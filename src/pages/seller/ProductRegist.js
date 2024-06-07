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
import ProductOptionAddForm from "../../components/form/ProductOptionAddForm";


const Delta = Quill.import('delta');

function ProductRegist() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { adminCategory, success, loading, error } = useSelector(state => state.category);
    const { saveSuccess } = useSelector(state => state.productReducer);

    // db 수정 후 상품 설명 추가 필요
    const [productForm, setProductForm] = useState({
        productName : '',
        sellableStatus: '',
        categoryCode: '',
    });

    const [options, setOptions] = useState([]);
    const imageInput = useRef();
    /* 텍스트 에디터 */
    const [lastChange, setLastChange] = useState();
    const quillRef = useRef();

    useEffect(() => {
        if (saveSuccess === true) navigate('/seller/mystore/product');
    }, [saveSuccess]);


    /* 카테고리 불러오기 */

    useEffect(() => {
        dispatch(AdminCategoryAPICalls());
    }, [dispatch]);


    // const addOption = (option) => {
    //     setOptions([...options, option])
    // };

    const removeOption = (index) => {
        setOptions(options.filter((_, i) => i !== index));
    };

    const submitProductRegistHandler = () => {
        const formData = new FormData();
        // formData.append('productImg', imageInput.current.files[0]);
        formData.append('productCreateRequest', new Blob([JSON.stringify(productForm)], { type : 'application/json'}));
        formData.append('options', new Blob([JSON.stringify(options)], { type : 'application/json'}));
        dispatch(callSellerProductRegistAPI({ registRequest : formData }));
    }

    console.log('options', options);

    return (
        <div className="product-regist-page">

            <div>
                <ProductForm category={adminCategory}/>
            </div>

            <div>
                <label style={{marginBottom: "8px"}}>옵션</label>
                <ProductOptionAddForm options={options} setOptions={setOptions} removeOption={removeOption}/>
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
                <button className="submit-btn" onClick={submitProductRegistHandler}>상품 등록</button>
            </div>

        </div>
    )
}

export default ProductRegist;