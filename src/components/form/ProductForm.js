import {Form} from "react-bootstrap";
import React, {useEffect} from "react";
import {callProductListAPI} from "../../apis/ProductAPI";
import {AdminCategoryAPICalls} from "../../apis/AdminCategoryAPICalls";

function ProductForm(props) {


    return (
        <div>
            <Form className="product-regist-forms">
                <Form.Group className="product-info-form" controlId="productName">
                    <Form.Label>상품명</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group className="product-info-form" controlId="productStatus">
                    <Form.Label>판매 상태</Form.Label>
                    <Form.Select>
                        <option value="true">판매중</option>
                        <option value="false">구매불가</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="product-info-form" controlId="productCategory">
                    <Form.Label>카테고리</Form.Label>
                    <Form.Select>
                        {props.category.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="productThumbnail">
                    <Form.Label>대표 사진</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form>
        </div>
    )
}
export default ProductForm;