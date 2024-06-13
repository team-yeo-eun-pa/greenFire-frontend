import ReactQuill, {Quill} from 'react-quill';
import TextEditor from "../../components/items/TextEditor";
import React, {useEffect, useRef, useState} from 'react';
import {Form} from "react-bootstrap";
import ProductOptionEditForm from "../../components/form/ProductOptionEditForm";
import Button from "react-bootstrap/Button";
import {success} from "../../modules/ProductModules";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AdminCategoryAPICalls} from "../../apis/AdminCategoryAPICalls";
import ProductForm from "../../components/form/ProductForm";
import ProductOptionAddForm from "../../components/form/ProductOptionAddForm";
import {
    callProductDetailAPI, callProductOptionListAPI,
    callSellerProductDetailAPI,
    callSellerProductModifyAPI,
    callSellerProductRegistAPI
} from "../../apis/ProductAPI";

const Delta = Quill.import('delta');

function ProductEdit() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { adminCategory, success, loading, error } = useSelector(state => state.category);
    const { saveSuccess } = useSelector(state => state.productReducer);
    const { product } = useSelector(state => state.productReducer);
    const [lastChange, setLastChange] = useState();

    const [options, setOptions] = useState([]);
    const imageInput = useRef();

    /* 카테고리 불러오기 */
    useEffect(() => {
        dispatch(AdminCategoryAPICalls());
    }, [dispatch]);

    /* 상품 정보 불러오기 */
    useEffect(() => {
        dispatch(callSellerProductDetailAPI({productCode}));
    }, []);

    const [productModifyForm, setProductModifyForm] = useState({
        productName : "",
        sellableStatus: 'Y',
        categoryCode: 1,
        productDescription: '',
        productImage: ''
    });

    /* 성공 시 페이지 이동*/
    useEffect(() => {
        if (saveSuccess === true) navigate('/seller/mystore/product');
    }, [saveSuccess]);




    /* 옵션 불러오기 */

    useEffect(() => {
        dispatch(callProductOptionListAPI({productCode}));
    }, []);


    const removeOption = (index) => {
        setOptions(options.filter((_, i) => i !== index));
    };

    const sellableStatus = ["Y", "N"]


    const onChangeHandler = e => {
        setProductModifyForm && setProductModifyForm({
            ...productModifyForm,
            [e.target.name]: e.target.value

        })
    }

    const onClickProductEditHandler = () => {
        const formData = new FormData();
        formData.append('productImg', imageInput.current.files[0]);
        formData.append('productRequest', new Blob([JSON.stringify(form)], { type : 'application/json'}));
        dispatch(callSellerProductModifyAPI({ productCode, modifyRequest : formData }));
    }

    console.log('options: ', options);


    return (
        <div className="product-edit-page">

            <div>
                <ProductForm sellableStatus={sellableStatus} category={adminCategory}
                             imageInput={imageInput} productModifyForm={productModifyForm}
                             setProductModifyForm={setProductModifyForm} onChangeHandler={onChangeHandler}
                             product={product}/>
            </div>

            <div>
                <label style={{marginBottom: "8px"}}>옵션</label>
                <ProductOptionAddForm options={options} setOptions={setOptions} removeOption={removeOption}/>
            </div>


            <label style={{marginBottom: "8px"}}>상세 설명</label>
            <Form
                type="text"
                defaultValue={'상품 상세설명'}
                value={productModifyForm.productDescription}
            />

            <div className="submit-btn-wrapper">
                <button className="submit-btn" onClick={onClickProductEditHandler}>상품 수정 완료</button>
            </div>

        </div>
    )

}

export default ProductEdit;