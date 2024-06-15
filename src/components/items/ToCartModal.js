import {Form, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {callEditCartAPI} from "../../apis/CartAPI";
import {useDispatch} from "react-redux";

function ToCartModal(props) {

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(props.cart.cartQuantity);
    const handleChangeQuantity = (e) => {
        setQuantity(e.target.value);
        props.onChangeQuantityHandler(e);
    };

    const handleEditCart = async () => {
        const cartItemRequest = new FormData();
        cartItemRequest.append('cartQuantity', quantity);

        try {
            await dispatch(callEditCartAPI({ cartCode: props.cart.cartCode, cartItemRequest }));
            props.handleClose();
        } catch (error) {

        }
    };

    return (
        <Modal className="wish-cart-modal" show={props.open} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>상품 선택</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/*<Form.Group className="cart-form" controlId="selectOption">*/}
                    {/*    <Form.Label>옵션 선택</Form.Label>*/}
                    {/*    <Form.Select name="optionCode" value={props.cart.optionCode} onChange={props.onChangeOptionHandler}*/}
                    {/*                 style={{width: '250px'}}>*/}
                    {/*        {props.cart.map(c => (*/}
                    {/*            <option key={c.optionCode} value={c.optionCode}>*/}
                    {/*                {c.optionName} | 가격: {c.optionPrice}*/}
                    {/*            </option>*/}
                    {/*        ))*/}
                    {/*        }*/}
                    {/*    </Form.Select>*/}
                    {/*</Form.Group>*/}
                    <Form.Group className="cart-form" controlId="selectAmount">
                        <Form.Label>수량 선택</Form.Label>
                        <Form.Control type="number" value={quantity} onChange={handleChangeQuantity}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className="modal-submit-btn" onClick={()=>{

                    props.handleClose();
                }}>
                    확인
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default ToCartModal;