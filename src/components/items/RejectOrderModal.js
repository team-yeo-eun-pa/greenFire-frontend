import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function RejectOrderModal({ show, handleClose, onConfirm }) {
    const [reason, setReason] = useState('');
    const [otherReason, setOtherReason] = useState('');

    const handleReasonChange = (e) => {
        setReason(e.target.value);
    };

    const handleOtherReasonChange = (e) => {
        setOtherReason(e.target.value);
    };

    const handleConfirm = () => {
        // 주문 거절 확인 처리 로직 추가
        onConfirm(reason === '기타' ? otherReason : reason);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>주문 거절</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="text-danger">
                    주문 거절 후에는 상태를 변경할 수 없습니다.<br />
                    주문 거절 사유를 입력해 주세요.
                </p>
                <Form>
                    <Form.Group controlId="rejectReason">
                        <Form.Label>거절 사유</Form.Label>
                        <Form.Control as="select" value={reason} onChange={handleReasonChange}>
                            <option value="">select option</option>
                            <option value="품절">품절</option>
                            <option value="배송 지연">배송 지연</option>
                            <option value="기타">기타(직접 입력)</option>
                        </Form.Control>
                    </Form.Group>
                    {reason === '기타' && (
                        <Form.Group controlId="otherReason" className="mt-3">
                            <Form.Control
                                type="text"
                                placeholder="기타 사유를 입력해 주세요"
                                value={otherReason}
                                onChange={handleOtherReasonChange}
                            />
                        </Form.Group>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    닫기
                </Button>
                <Button variant="success" onClick={handleConfirm}>
                    확인
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RejectOrderModal;