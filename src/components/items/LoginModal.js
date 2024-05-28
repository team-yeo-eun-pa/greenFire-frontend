import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';

function LoginModal({show, handleClose}) {
    return (
        <Modal show={show} onHide={handleClose} className="mt-5">
            <Modal.Header closeButton className="border-0">
                <div>
                    {/*<Modal.Title>로그인</Modal.Title>*/}
                    {/*<div className="mt-2">test</div>*/}
                </div>
            </Modal.Header>
            <Modal.Body className="px-5">
                <h3>로그인</h3>
                <h6 className="fw-lighter pb-3" style={{color: '#9b9b9b', fontSize: '12px'}}>
                    초록불은 회원님의 활동을 지지합니다.<br/>
                    로그인 후 다양한 초록불 서비스에 참여해 보세요! </h6><br/>
                <Form>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>아이디</Form.Label>
                        <Form.Control type="text" autoFocus/>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                </Form>
                <Navbar className="text-secondary" style={{fontSize: '14px'}}>
                    <Navbar.Text href="/members/signup">회원가입</Navbar.Text>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Navbar.Text href="">아이디/</Navbar.Text>
                            <Navbar.Text href="">비밀번호 찾기</Navbar.Text>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </Modal.Body>
            <Modal.Footer className="d-flex flex-column align-items-center justify-content-center border-0">
                <Button variant="success" style={{cursor: 'pointer'}} className="w-75 my-2">
                    로그인
                </Button>
                <img src="/logo_horizontal.png" alt="logo" className="py-5" width={180}/>
            </Modal.Footer>
        </Modal>
    );
}

export default LoginModal;
