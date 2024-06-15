import {Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
function ProductDescriptionForm(props) {


    return (
        <div className="product-description-form-wrapper">

            <Form className="product-description-form">
                <Form.Control
                    as="textarea"
                    name="productDescription"
                    onChange={props.onChangeHandler}
                    value={props.productForm.productDescription}
                />
            </Form>

        </div>

    );
}

export default ProductDescriptionForm;