import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Form, Button, Spinner } from 'react-bootstrap';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // URL 쿼리 파라미터로부터 멤버코드와 인증코드 추출
    const params = new URLSearchParams(location.search);
    const memberCode = params.get('memberCode');
    const verificationCode = params.get('verificationCode');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        if (newPassword !== confirmPassword) {
            setError('재입력하신 비밀번호가 일치하지 않습니다.');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.put('http://localhost:8001/members/reset-password', {
                memberCode,
                verificationCode,
                newPassword
            });

            if (response.status === 204) {
                setSuccess(true);
            }
        } catch (error) {
            console.error('Password reset failed', error);
            setError('Password reset failed');
        } finally {
            setLoading(false);
        }
    };

    const handleMainClick = () => {
        navigate("/");
    };

    const handleLoginClick = () => {
        navigate("/members/login");
    };

    return (
        <Row className="mt-5 justify-content-md-center" style={{ paddingTop: 80 }}>
            <Col className="col-8">
                <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">비밀번호 재설정</div>
                <Form className="p-5" onSubmit={handleSubmit}>
                    {!success && (
                        <>
                            <Form.Group as={Row} className="mb-3" controlId="formNewPassword">
                                <Form.Label column sm="2">새 비밀번호</Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="password"
                                        placeholder="새 비밀번호를 입력해 주세요."
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formConfirmPassword">
                                <Form.Label column sm="2">비밀번호 확인</Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="password"
                                        placeholder="비밀번호를 다시 입력해 주세요."
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <div className="px-0 d-flex align-items-center justify-content-center">
                                <Button variant="success" type="submit" className="w-50" disabled={loading}>
                                    {loading ? <Spinner animation="border" size="sm" /> : "비밀번호 재설정"}
                                </Button>
                            </div>
                        </>
                    )}

                    {success && (
                        <div className="mt-3 text-center text-success">
                            <h5>비밀번호가 성공적으로 재설정되었습니다.</h5>
                            <div className="mt-4 d-flex flex-column align-items-center">
                                <Button className="mb-2 w-50" variant="outline-success" onClick={handleMainClick}>
                                    메인으로
                                </Button>
                                <Button className="w-50" variant="success" onClick={handleLoginClick}>
                                    로그인
                                </Button>
                            </div>
                        </div>
                    )}
                    {error && (
                        <div className="mt-3 text-center text-danger">
                            <h5>{error}</h5>
                        </div>
                    )}
                </Form>
            </Col>
        </Row>
    );
};

export default ResetPassword;
