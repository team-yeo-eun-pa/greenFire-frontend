
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




    return (

        <div className="product-edit-page">

            <div>
                <label style={{marginBottom: "8px"}}>옵션</label>
                <ProductOptionEditList product={product} optionForm={optionForm} setOptionForm={setOptionForm}
                />
            </div>

        </div>
    )

}

export default ProductOptionEdit;