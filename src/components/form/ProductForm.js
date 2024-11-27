import {Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {callProductListAPI} from "../../apis/ProductAPI";
import {AdminCategoryAPICalls} from "../../apis/AdminCategoryAPICalls";

function ProductForm(props) {

    const [imageUrl, setImageUrl] = useState(props.productForm.productImg);




    const onChangeImageUpload = () => {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            const { result } = e.target;
            if(result) setImageUrl(result);
        }
        if(props.imageInput.current.files[0])
            fileReader.readAsDataURL(props.imageInput.current.files[0]);
    }



    useEffect(() => {
        if (props.product) {
            props.setProductForm({
                productName: props.product.productInfo.productName,
                sellableStatus: props.product.productInfo.sellableStatus,
                categoryCode: props.product.productInfo.categoryCode,
                productDescription: props.product.productInfo.productDescription,
                productImg: props.product.productInfo.productImg
            });
            setImageUrl(props.product.productInfo.productImg);
        }
    }, [props.product]);

return (

    <div>
        <Form className="product-regist-forms">
            <Form.Group className="product-info-form" controlId="productName">
                <Form.Label>상품명</Form.Label>
                <Form.Control
                    type="text"
                    name="productName"
                    onChange={props.onChangeHandler}
                    value={props.productForm.productName}
                />
            </Form.Group>

            <Form.Group className="product-info-form" controlId="productStatus">
                <Form.Label>판매 상태</Form.Label>
                <Form.Select name="sellableStatus" value={props.productForm.sellableStatus} onChange={props.onChangeHandler}>
                    <option value="Y">판매중</option>
                    <option value="N">구매불가</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="product-info-form" controlId="productCategory">
                <Form.Label>카테고리</Form.Label>
                <Form.Select name="categoryCode" value={props.productForm.categoryCode} onChange={props.onChangeHandler}>
                    {props.category.map(ct => (
                        <option key={ct.categoryCode} value={ct.categoryCode}>
                            {ct.categoryTitle}
                        </option>
                    ))
                    }
                </Form.Select>
            </Form.Group>

            <Form.Group controlId="productThumbnail">
                <Form.Label>대표 사진</Form.Label>
                <Form.Control accept='image/jpg,image/png,image/jpeg,image/gif'
                              ref={ props.imageInput }
                              onChange={ onChangeImageUpload }
                              type="file"/>
            </Form.Group>
        </Form>
    </div>

    );
}

export default ProductForm;