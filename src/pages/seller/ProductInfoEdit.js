import ReactQuill, {Quill} from 'react-quill';
import TextEditor from "../../components/items/TextEditor";
import React, {useEffect, useRef, useState} from 'react';
import {Form} from "react-bootstrap";
import ProductOptionEditList from "../../components/items/ProductOptionEditList";
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

function ProductInfoEdit() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productCode} = useParams();
    let { adminCategory, success, loading, error } = useSelector(state => state.category);
    const { success: saveSuccess } = useSelector(state => state.productReducer);
    const { product } = useSelector(state => state.productReducer);
    const [lastChange, setLastChange] = useState();


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
        productImg: ''
    });

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
        formData.append('productImg', imageInput.current.files[0]);
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

export default ProductInfoEdit;