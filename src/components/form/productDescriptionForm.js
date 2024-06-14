import {Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
function ProductDescriptionForm(props) {

    const [imageUrl, setImageUrl] = useState(props.productForm.productImageUrl);


    return (
        <div>
            <Form className="product-regist-forms">
                <Form.Control
                    type="text"
                    name="productDescription"
                    onChange={props.onChangeHandler}
                    value={props.productForm.productDescription}
                />
            </Form>
        </div>

    );
}

export default ProductDescriptionForm;