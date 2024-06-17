
import React, {useEffect, useRef, useState} from 'react';
import ProductOptionEditList from "../../components/items/ProductOptionEditList";
import {callSellerOptionModifyAPI, callSellerProductDetailAPI, callSellerProductModifyAPI} from "../../apis/ProductAPI";


function ProductOptionEdit() {


    useEffect(() => {
        dispatch(callSellerProductDetailAPI({productCode}));
    }, []);


    /* 내용 저장 */
    const callSeller = () => {
        const formData = new FormData();
        formData.append('productUpdateRequest', new Blob([JSON.stringify(productForm)], { type : 'application/json'}));
        dispatch(callSellerProductModifyAPI({ productCode, modifyRequest : formData }));
    }


    return (

        <div className="product-edit-page">

            <div>
                <label style={{marginBottom: "8px"}}>옵션</label>
                <ProductOptionEditList product={product}/>
            </div>

        </div>
    )

}

export default ProductOptionEdit;