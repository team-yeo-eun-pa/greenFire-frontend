import {Form, Modal} from "react-bootstrap";

function WishToCartModal(props) {

    return (
        <Modal className="wish-cart-modal" show={props.open} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>상품 담기</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="cart-form" controlId="selectOption">
                        <Form.Label>옵션 선택</Form.Label>
                        <Form.Select>
                            <option value="1">옵션1</option>
                            <option value="2">옵션2</option>
                            <option value="3">옵션3</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="cart-form" controlId="selectAmount">
                        <Form.Label>수량 선택</Form.Label>
                        <Form.Control type="number"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className="modal-submit-btn" onClick={()=>{
                    //장바구니에 추가하는 기능 작성
                    props.handleClose();
                }}>
                    확인
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default WishToCartModal;