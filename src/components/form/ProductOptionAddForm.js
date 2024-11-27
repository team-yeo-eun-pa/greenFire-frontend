import {Form} from "react-bootstrap";
import React, {useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function ProductOptionAddForm(props) {

    const [selectedOption, setSelectedOption] = useState(null);
    const [mode, setMode] = useState(null);

    const [optionName, setOptionName] = useState("");
    const [optionPrice, setOptionPrice] = useState("");
    const [optionStock, setOptionStock] = useState("");

    const handleClickRegist = () => {
        setMode("regist");
        setSelectedOption(null);
        setOptionName("");
        setOptionPrice("");
        setOptionStock("");
    };

    const handleClickDelete = () => {
        setMode("delete");
        if (selectedOption === null) {
            alert("삭제할 옵션을 선택하세요");
        } else {
            const selectedIndex = props.options.findIndex(opt => opt === selectedOption);
            if (selectedIndex !== -1) {
                props.removeOption(selectedIndex);
                setSelectedOption(null);
                setMode(null);
            }
        }
    };


    const handleChangeOptionList = (opt) => {
        setSelectedOption(opt);
        setOptionName(opt.optionName);
        setOptionPrice(opt.optionPrice);
        setOptionStock(opt.optionStock);
    }

    const handleSubmit = () => {
        if (mode === "regist") {
            props.setOptions([...props.options, {
                optionName: optionName,
                optionPrice: optionPrice,
                optionStock: optionStock
            }]);
        }
        setOptionName("");
        setOptionPrice("");
        setOptionStock("");
        setMode(null);
        setSelectedOption(null);
    }

    console.log('props.options', props.options)

    return (
        <div className="product-option-form">

            <ListGroup className="product-option-wrapper">

                <div className="option-btn-wrapper">
                    <button className="option-btn" onClick={handleClickRegist}>추가</button>
                    <button className="option-btn" onClick={handleClickDelete}>삭제</button>
                </div>



                <div className="product-option-list">
                    {props.options.map((opt, index) => (
                        <ListGroup key={index}>
                            <Form.Check
                                type="checkbox"
                                label={opt.optionName}
                                name="selectOption"
                                onChange={() => handleChangeOptionList(opt)}
                                checked={selectedOption === opt}
                            />

                        </ListGroup>
                    ))}
                </div>

            </ListGroup>

            <div>
                {(mode === "regist") && (
                    <Form className="option-regist-forms">
                        <Form.Group className="option-info-form" controlId="optionName">
                            <Form.Label>옵션명</Form.Label>
                            <Form.Control
                                type="text"
                                value={optionName}
                                onChange={(e) => setOptionName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="option-info-form" controlId="optionPrice">
                            <Form.Label>옵션가격</Form.Label>
                            <Form.Control
                                type="number"
                                value={optionPrice}
                                onChange={(e) => setOptionPrice(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="option-info-form" controlId="optionStock">
                            <Form.Label>재고</Form.Label>
                            <Form.Control
                                type="number"
                                value={optionStock}
                                onChange={(e) => setOptionStock(e.target.value)}
                            />
                        </Form.Group>

                        <button className="submit-btn" onClick={handleSubmit}>완료</button>
                    </Form>
                )}
            </div>

        </div>
    )
}
export default ProductOptionAddForm;