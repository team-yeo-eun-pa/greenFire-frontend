import {Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ProductOptionEditListItem from "./ProductOptionEditListItem";
import {callSellerOptionRegistAPI} from "../../apis/ProductAPI";
import {useDispatch} from "react-redux";

function ProductOptionEditList(props) {

    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState({
        optionName: "",
        optionPrice: 0,
        optionStock: 0
    });
    const [mode, setMode] = useState(null);

    const handleClickRegist = () => {
        setMode("regist");
        setSelectedOption({
            optionName: "",
            optionPrice: 0,
            optionStock: 0,
        });
    };




    const submitAddOptionHandler = (e) => {

        const formData = new FormData();
        formData.append('productOptionCreateRequest', new Blob([JSON.stringify(selectedOption)], { type : 'application/json'}));

        console.log(formData);

        submitAddOptionHandler(formData);
        setMode(null);

    };

    // const submitAddOptionHandler = (formData) => {
    //     formData.append('productOptionCreateRequest', new Blob([JSON.stringify(props.optionForm)], { type : 'application/json'}));
    //     dispatch(callSellerOptionRegistAPI({ productCode : props.product.productCode, registRequest : formData }));
    // }



    return (
        <div className="product-option-form">

            <ListGroup className="product-option-wrapper">

                <div className="option-btn-wrapper">
                    <button className="option-btn" onClick={handleClickRegist}>추가</button>
                </div>

                {props.product && (
                    <div className="product-option-list">
                        {props.product.productOptions.map((opt, index) => (
                            <ListGroup.Item key={index}>
                                <ProductOptionEditListItem
                                    option={opt}
                                    optionForm={props.optionForm}
                                    setOptionForm={props.setOptionForm}
                                />
                            </ListGroup.Item>
                        ))
                        }
                    </div>
                )}



            </ListGroup>

            <div>
                {(mode === "regist") && (
                    <Form className="option-regist-forms" onSubmit={submitAddOptionHandler}>
                        <Form.Group className="option-info-form" controlId="optionName">
                            <Form.Label>옵션명</Form.Label>
                            <Form.Control
                                type="text"
                                value={selectedOption.optionName}
                                onChange={(e) => setSelectedOption({ ...selectedOption, optionName: e.target.value})}
                            />
                        </Form.Group>

                        <Form.Group className="option-info-form" controlId="optionPrice">
                            <Form.Label>옵션가격</Form.Label>
                            <Form.Control
                                type="number"
                                value={selectedOption.optionPrice}
                                onChange={(e) => setSelectedOption({ ...selectedOption, optionPrice: parseFloat(e.target.value)})}
                            />
                        </Form.Group>

                        <Form.Group className="option-info-form" controlId="optionStock">
                            <Form.Label>재고</Form.Label>
                            <Form.Control
                                type="number"
                                value={selectedOption.optionStock}
                                onChange={(e) => setSelectedOption({ ...selectedOption, optionStock: parseFloat(e.target.value)})}
                            />
                        </Form.Group>

                        <button className="option-btn" type="submit">완료</button>
                    </Form>
                )}
            </div>

        </div>
    )
}
export default ProductOptionEditList;