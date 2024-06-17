
import React, {useEffect, useRef, useState} from 'react';
import ProductOptionEditList from "../../components/items/ProductOptionEditList";
import {
    callProductDetailAPI,
    callProductOptionListAPI, callSellerOptionDeleteAPI,
    callSellerOptionModifyAPI, callSellerOptionRegistAPI,
    callSellerProductDetailAPI,
    callSellerProductModifyAPI
} from "../../apis/ProductAPI";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


function ProductOptionEdit() {

    const dispatch = useDispatch();
    const { productCode} = useParams();
    const { success: saveSuccess } = useSelector(state => state.productReducer);
    const { product } = useSelector(state => state.productReducer);
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(callProductDetailAPI({productCode}));
    }, []);


    const [optionForm, setOptionForm] = useState({
        optionName : '',
        optionPrice: 1,
        optionStock: 1
    });

    const onChangeHandler = e => {
        setOptionForm && setOptionForm({
            ...optionForm,
            [e.target.name]: e.target.value

        })
    }

    const optionCode = 1;


    /* 내용 저장 */

    const submitAddOptionHandler = () => {
        const formData = new FormData();
        formData.append('productUpdateRequest', new Blob([JSON.stringify(optionForm)], { type : 'application/json'}));
        dispatch(callSellerOptionRegistAPI({ productCode, registRequest : formData }));
    }

    const submitModifyOptionHandler = () => {
        const formData = new FormData();
        formData.append('productUpdateRequest', new Blob([JSON.stringify(optionForm)], { type : 'application/json'}));
        dispatch(callSellerOptionModifyAPI({ productCode, optionCode, modifyRequest : formData }));
    }

    const submitRemoveOptionHandler = () => {
        const formData = new FormData();
        formData.append('productUpdateRequest', new Blob([JSON.stringify(optionForm)], { type : 'application/json'}));
        dispatch(callSellerOptionDeleteAPI({ productCode, optionCode, modifyRequest : formData }));
    }


    return (

        <div className="product-edit-page">

            <div>
                <label style={{marginBottom: "8px"}}>옵션</label>
                <ProductOptionEditList product={product} optionForm={optionForm} setOptionForm={setOptionForm}
                                       submitAddOptionHandler={submitAddOptionHandler}
                                       submitModifyOptionHandler={submitModifyOptionHandler}
                                       submitRemoveOptionHandler={submitRemoveOptionHandler}
                />
            </div>

        </div>
    )

}

export default ProductOptionEdit;