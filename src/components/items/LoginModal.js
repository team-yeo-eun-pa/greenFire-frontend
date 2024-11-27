import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import { Button, Form, Modal, Navbar } from 'react-bootstrap';
import { callLoginAPI } from '../../apis/MemberAPICalls';

function LoginModal({ show, handleClose }) {
    const dispatch = useDispatch();
    const [form, setForm] = useState({});
    const { success } = useSelector(state => state.memberReducer);

    const onChangeHandler = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickLoginHandler = () => {
        dispatch(callLoginAPI({ loginRequest: form }))

    }

    useEffect(() => {
        if (success) {
            handleClose();
        }
    }, [success, handleClose]);

    return (
        <Modal show={show} onHide={handleClose} className="mt-5">
            <Modal.Header closeButton className="border-0" />
            <Modal.Body className="px-5">
                <h3>로그인</h3>
                <h6 className="fw-lighter pb-3" style={{ color: '#9b9b9b', fontSize: '12px' }}>
                    초록불은 회원님의 활동을 지지합니다.<br />
                    로그인 후 다양한 초록불 서비스에 참여해 보세요! </h6><br />
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>아이디</Form.Label>
                        <Form.Control name="memberId" onChange={onChangeHandler} type="text" autoFocus />
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control name="memberPassword" onChange={onChangeHandler} type="password" />
                    </Form.Group>
                </Form>
                <Navbar className="text-secondary" style={{ fontSize: '14px' }}>
                    <Navbar.Text>
                        <Link to="/members/signup" className="navbar-text">회원가입</Link>
                    </Navbar.Text>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to="/find-member-id" className="navbar-text">아이디/</Link>
                            <Link to="/request-password-reset" className="navbar-text">비밀번호 찾기</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </Modal.Body>
            <Modal.Footer className="d-flex flex-column align-items-center justify-content-center border-0">
                <Button
                    variant="success"
                    style={{ cursor: 'pointer' }}
                    className="w-75 my-2"
                    onClick={onClickLoginHandler}
                >
                    로그인
                </Button>
                <img src="/logo_horizontal.png" alt="logo" className="py-5" width={180} />
            </Modal.Footer>
        </Modal>
    );
}

export default LoginModal;
