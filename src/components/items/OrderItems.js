import React, {useEffect} from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {callProductOptionListAPI} from "../../apis/ProductAPI";
import {getOptions} from "../../modules/ProductOptionModules";

const OrderItems = ({ optionCodes, amount }) => {
    const dispatch = useDispatch();
    const productData = useSelector(state => state.productReducer.product);

    useEffect(() => {
        if (optionCodes && optionCodes.length > 0) {
            optionCodes.forEach(optionCode => {
                dispatch(callProductOptionListAPI({ optionCode }));
            });
        }
    }, [dispatch, optionCodes]);

    const filteredOptions = productData?.productOptions?.filter(option => optionCodes.includes(option.optionCode)) || [];

    console.log("filteredOptions", filteredOptions);
    console.log("optionCodes", optionCodes);

    return (
        <div>
            <h5>주문 상품</h5>
            {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                    <Card key={index} className="mb-3">
                        <Row className="align-items-center">
                            <Col md={2} className="text-center m-3">
                                <Image
                                    className="square-img"
                                    src={productData.productInfo.productImg || '/default-image.png'}
                                    fluid
                                    alt={productData.productInfo.productName}
                                />
                            </Col>
                            <Col md={5}>
                                <div>
                                    <Card.Title>{productData.productInfo.productName}</Card.Title>
                                    <Card.Text>옵션 : {option.optionName}</Card.Text>
                                    <Card.Text>가격 : {option.optionPrice}</Card.Text>
                                    <Card.Text>구매 수량 : {amount}</Card.Text>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                ))
            ) : (
                <p>선택한 옵션이 없습니다.</p>
            )}
        </div>
    );
};

export default OrderItems;