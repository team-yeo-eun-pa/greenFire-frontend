import {Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ProductOptionEditListItem from "./ProductOptionEditListItem";

function ProductOptionEditList(props) {

    const [selectedOption, setSelectedOption] = useState(null);
    const [mode, setMode] = useState(null);

    const handleClickRegist = () => {
        setMode("regist");
        setSelectedOption(null);
    };


    console.log(props.product);

    useEffect(() => {
        if (props.product) {
            setSelectedOption({
                optionName: props.product.productOptions.optionName,
                optionPrice: props.product.productOptions.optionPrice,
                optionStock: props.product.productOptions.optionStock
            });
        }
    }, [props.product]);

    return (
        <div className="product-option-form">

            <ListGroup className="product-option-wrapper">

                <div className="option-btn-wrapper">
                    <button className="option-btn" onClick={handleClickRegist}>추가</button>
                    {/*<Button className="option-btn" onClick={handleClickEdit}>수정</Button>*/}
                    {/*<Button className="option-btn" onClick={handleClickDelete}>삭제</Button>*/}
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
                    <Form className="option-regist-forms">
                        <Form.Group className="option-info-form" controlId="optionName">
                            <Form.Label>옵션명</Form.Label>
                            <Form.Control
                                type="text"
                                value={selectedOption ? selectedOption.optionName : ''}
                                onChange={(e) => setSelectedOption({ ...selectedOption, optionName: e.target.value})}
                            />
                        </Form.Group>

                        <Form.Group className="option-info-form" controlId="optionPrice">
                            <Form.Label>옵션가격</Form.Label>
                            <Form.Control
                                type="number"
                                value={selectedOption ? selectedOption.optionPrice : ''}
                                defaultValue={props.product.productOptions.optionPrice}
                                onChange={(e) => setSelectedOption({ ...selectedOption, optionPrice: e.target.value})}
                            />
                        </Form.Group>

                        <Form.Group className="option-info-form" controlId="optionStock">
                            <Form.Label>재고</Form.Label>
                            <Form.Control
                                type="number"
                                value={selectedOption ? selectedOption.optionStock : ''}
                                defaultValue={props.product.productOptions.optionStock}
                                onChange={(e) => setSelectedOption({ ...selectedOption, optionStock: e.target.value})}
                            />
                        </Form.Group>

                        <button className="option-btn" onClick={props.submitAddOptionHandler}>완료</button>
                    </Form>
                )}
            </div>

        </div>
    )
}
export default ProductOptionEditList;