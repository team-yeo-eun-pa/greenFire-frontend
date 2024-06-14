import React from 'react';
import { Modal, Button, Card, Row, Col } from 'react-bootstrap';

function AddressSelectionModal({ show, handleClose, addresses, handleSelect, handleDelete, handleEdit, handleAdd }) {
    return (
        <Modal show={show} onHide={handleClose} className="mt-5">
            <Modal.Header closeButton className="border-0">
                <Modal.Title>배송지 선택</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-5">
                {addresses.map((address, index) => (
                    <Card key={index} className="mb-3">
                        <Card.Body>
                            {address.isOrdinaryAddress && <p className="text-success">기본 배송지</p>}
                            <p>{address.receiverName}</p>
                            <p>{address.address} {address.addressDetail}</p>
                            <p>{address.contactNumber}</p>
                            <Row>
                                <div className="d-flex justify-content-end">
                                        <Button variant="outline-secondary"
                                                onClick={() => handleDelete(address.id)}>삭제</Button>
                                        <Button variant="success" onClick={() => handleSelect(address)}>선택</Button>
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
                ))}
            </Modal.Body>
            <Modal.Footer className="border-0">
                <Button variant="success" className="w-100" onClick={handleAdd}>
                    배송지 추가
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddressSelectionModal;