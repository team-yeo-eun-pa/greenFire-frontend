import ReactQuill, {Quill} from 'react-quill';
import TextEditor from "../../components/items/TextEditor";
import React, {useEffect, useRef, useState} from 'react';
import {Form} from "react-bootstrap";
import ProductOptionForm from "../../components/form/ProductOptionForm";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import ProductForm from "../../components/form/ProductForm";
import {AdminCategoryAPICalls} from "../../apis/AdminCategoryAPICalls";
import {callSellerProductRegistAPI} from "../../apis/ProductAPI";

const Delta = Quill.import('delta');

function ProductRegist() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // db 수정 후 상품 설명 추가 필요
    const [productForm, setProductForm] = useState({
        productName : '',
        sellableStatus: '',
        categoryCode: '',
    });

    const [optionForm, setOptionForm] = useState({
        optionName: '',
        optionPrice: '',
        optionStock: ''
    });

    const imageInput = useRef();
    const { saveSuccess } = useSelector(state => state.productReducer);

    useEffect(() => {
        if (saveSuccess === true) navigate('/seller/mystore/product');
    }, [saveSuccess]);

    /* 텍스트 에디터 */
    const [lastChange, setLastChange] = useState();
    const quillRef = useRef();

    /* 카테고리 불러오기 */

    useEffect(() => {
        dispatch(AdminCategoryAPICalls);
    }, []);

//리듀서
    const {productCategory} = useSelector(state => state.category);

    useEffect(() => {
        dispatch(AdminCategoryAPICalls);
    }, []);

    const productOption = [
        { id: 1, name: '옵션명1', price: 12000, stock: 5 },
        { id: 2, name: '옵션명2', price: 9000, stock: 3 },
        { id: 3, name: '옵션명3', price: 16000, stock: 2 },
        { id: 3, name: '옵션명3', price: 16000, stock: 2 },
        { id: 3, name: '옵션명3', price: 16000, stock: 2 },
        { id: 3, name: '옵션명3', price: 16000, stock: 2 },
        { id: 3, name: '마지막', price: 16000, stock: 2 },
    ];

    // const submitProductRegistHandler = () => {
    //     const formData = new FormData();
    //     // formData.append('productImg', imageInput.current.files[0]);
    //     formData.append('productRequest', new Blob([JSON.stringify(form)], { type : 'application/json'}));
    //     dispatch(callSellerProductRegistAPI({ registRequest : formData }));
    // }


    return (
        <div className="product-regist-page">

            <div>
                <ProductForm category={productCategory}/>
            </div>

            <div>
                <label style={{marginBottom: "8px"}}>옵션</label>
                <ProductOptionForm optionInfo={productOption}/>
            </div>


            <label style={{marginBottom: "8px"}}>상세 설명</label>
            <TextEditor
                ref={quillRef}
                defaultValue={new Delta()
                    .insert('상품 상세설명')
                    // .insert('\n', {header: 1})
                    // .insert('Some ')
                    // .insert('initial', {bold: true})
                    // .insert(' ')
                    // .insert('content', {underline: true})
                    .insert('\n')}
                // onSelectionChange={setRange}
                onTextChange={setLastChange}
            />

            <div className="submit-btn-wrapper">
                <button className="submit-btn">상품 등록</button>
            </div>

        </div>
    )
}

export default ProductRegist;