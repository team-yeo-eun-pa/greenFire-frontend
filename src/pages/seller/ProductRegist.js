import ReactQuill, {Quill} from 'react-quill';
import TextEditor from "../../components/items/TextEditor";
import React, {useEffect, useRef, useState} from 'react';
import {Form} from "react-bootstrap";
import ProductOptionEditList from "../../components/items/ProductOptionEditList";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import ProductForm from "../../components/form/ProductForm";
import {AdminCategoryAPICalls} from "../../apis/AdminCategoryAPICalls";
import {callSellerProductRegistAPI} from "../../apis/ProductAPI";
import {success} from "../../modules/AdminCategoryModules";
import ProductOptionAddForm from "../../components/form/ProductOptionAddForm";
import {registSuccess} from "../../modules/ProductModules";
import ProductDescriptionForm from "../../components/form/ProductDescriptionForm";


// const Delta = Quill.import('delta');


function ProductRegist() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { adminCategory, success, loading, error } = useSelector(state => state.category);
    const { success : saveSuccess } = useSelector(state => state.productReducer);

    const [productForm, setProductForm] = useState({
        productName : '',
        sellableStatus: 'Y',
        categoryCode: 1,
        productDescription: '',
        productImg: ''
    });

    const [options, setOptions] = useState([]);
    const imageInput = useRef();


    useEffect(() => {
        if (saveSuccess === true) navigate('/seller/mystore/product');
    }, [saveSuccess]);


    useEffect(() => {
        dispatch(AdminCategoryAPICalls());
    }, [dispatch]);


    const removeOption = (index) => {
        setOptions(options.filter((_, i) => i !== index));
    };

    const sellableStatus = ["Y", "N"]


    const onChangeHandler = e => {
        setProductForm && setProductForm({
            ...productForm,
            [e.target.name] : e.target.value

        })
    }

    const submitProductRegistHandler = () => {
        const formData = new FormData();

        if (imageInput.current.files.length > 0) {
            formData.append('productImg', imageInput.current.files[0]);
        }

        console.log('regist-productForm: ', productForm);
        console.log('regist-options: ', options);
        formData.append('productCreateRequest', new Blob([JSON.stringify(productForm)], { type : 'application/json'}));
        formData.append('productOptionCreateRequest', new Blob([JSON.stringify(options)], { type : 'application/json'}));
        dispatch(callSellerProductRegistAPI({ registRequest : formData }));
    }

    console.log('options: ', options);

    return (
        <div className="product-regist-page">

            <div>
                <ProductForm sellableStatus={sellableStatus} category={adminCategory}
                             imageInput={imageInput} productForm={productForm} removeOption={removeOption}
                             setProductForm={setProductForm} onChangeHandler={onChangeHandler}/>
            </div>

            <div>
                <label style={{marginBottom: "8px"}}>옵션</label>
                <ProductOptionAddForm options={options} setOptions={setOptions} removeOption={removeOption}/>
            </div>


            <label style={{marginBottom: "8px"}}>상세 설명</label>
            <ProductDescriptionForm productForm={productForm}
                                    setProductForm={setProductForm}
                                    onChangeHandler={onChangeHandler}
            />
            <div className="submit-btn-wrapper">
                <button className="submit-btn" onClick={submitProductRegistHandler}>상품 등록</button>
            </div>

        </div>
    )
}

export default ProductRegist;