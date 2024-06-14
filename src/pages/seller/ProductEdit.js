import ReactQuill, {Quill} from 'react-quill';
import TextEditor from "../../components/items/TextEditor";
import React, {useEffect, useRef, useState} from 'react';
import {Form} from "react-bootstrap";
import ProductOptionEditForm from "../../components/form/ProductOptionEditForm";
import Button from "react-bootstrap/Button";
import {success} from "../../modules/ProductModules";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AdminCategoryAPICalls} from "../../apis/AdminCategoryAPICalls";
import ProductForm from "../../components/form/ProductForm";
import ProductOptionAddForm from "../../components/form/ProductOptionAddForm";
import {
    callSellerProductDetailAPI,
    callSellerProductModifyAPI,
} from "../../apis/ProductAPI";
import ProductDescriptionForm from "../../components/form/ProductDescriptionForm";

const Delta = Quill.import('delta');

function ProductEdit() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productCode} = useParams();
    let { adminCategory, success, loading, error } = useSelector(state => state.category);
    const { success: saveSuccess } = useSelector(state => state.productReducer);
    const { product } = useSelector(state => state.productReducer);
    const [lastChange, setLastChange] = useState();

    // const [selectOption, setSelectOption] = useState({
    //     optionName : '',
    //     optionPrice: ''
    // });
    const imageInput = useRef();

    /* 카테고리 불러오기 */
    useEffect(() => {
        dispatch(AdminCategoryAPICalls());
    }, [dispatch]);

    /* 상품 정보 불러오기 */
    useEffect(() => {
        dispatch(callSellerProductDetailAPI({productCode}));
    }, []);

    const [productForm, setProductForm] = useState({
        productName : '',
        sellableStatus: 'Y',
        categoryCode: 1,
        productDescription: '',
        productImage: ''
    });



    // /* 성공 시 페이지 이동*/
    // useEffect(() => {
    //     if (saveSuccess === true) navigate('/seller/mystore/product');
    // }, [saveSuccess]);

    const sellableStatus = ["Y", "N"]


    const onChangeHandler = e => {
        setProductForm && setProductForm({
            ...productForm,
            [e.target.name]: e.target.value

        })
    }

    /* 내용 저장 */
    const onClickProductEditHandler = () => {
        const formData = new FormData();
        formData.append('productImage', imageInput.current.files[0]);
        formData.append('productUpdateRequest', new Blob([JSON.stringify(productForm)], { type : 'application/json'}));
        dispatch(callSellerProductModifyAPI({ productCode, modifyRequest : formData }));
    }




    return (

        <div className="product-edit-page">

            <div>
                <ProductForm sellableStatus={sellableStatus} category={adminCategory}
                             imageInput={imageInput} productForm={productForm}
                             setProductForm={setProductForm} onChangeHandler={onChangeHandler}
                             product={product}/>
            </div>

            <div>
                <label style={{marginBottom: "8px"}}>옵션</label>
                {/*<ProductOptionEditForm product={product} selectOption={selectOption} setSelectOption={setSelectOption}/>*/}
                <ProductOptionEditForm product={product}/>
            </div>


            <label style={{marginBottom: "8px"}}>상세 설명</label>
            <ProductDescriptionForm
                product={product}
                delaultvalue={productForm.productDescription}
                productForm={productForm}
                setProductForm={setProductForm}
                onChangeHandler={onChangeHandler}
            />

            <div className="submit-btn-wrapper">
                <button className="submit-btn" onClick={onClickProductEditHandler}>완료</button>
            </div>

        </div>
    )

}

export default ProductEdit;