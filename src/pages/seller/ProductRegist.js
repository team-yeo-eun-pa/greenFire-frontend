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
import {callProductOptionListAPI, callSellerProductRegistAPI} from "../../apis/ProductAPI";
import {success} from "../../modules/AdminCategoryModules";

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

    /* 텍스트 에디터 */
    const [lastChange, setLastChange] = useState();
    const quillRef = useRef();

    useEffect(() => {
        if (saveSuccess === true) navigate('/seller/mystore/product');
    }, [saveSuccess]);



    /* 카테고리 불러오기 */

    let { adminCategory, success, loading, error } = useSelector(state => state.category);

    useEffect(() => {
        dispatch(AdminCategoryAPICalls);
    }, [dispatch, success]);


    /* 옵션 불러오기 */

    const { productOption } = useSelector(state => state.option);

    useEffect(() => {
        dispatch(callProductOptionListAPI({productCode}));
    }, [productCode]);





    // const submitProductRegistHandler = () => {
    //     const formData = new FormData();
    //     // formData.append('productImg', imageInput.current.files[0]);
    //     formData.append('productRequest', new Blob([JSON.stringify(form)], { type : 'application/json'}));
    //     dispatch(callSellerProductRegistAPI({ registRequest : formData }));
    // }


    return (
        <div className="product-regist-page">

            <div>
                <ProductForm category={adminCategory}/>
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