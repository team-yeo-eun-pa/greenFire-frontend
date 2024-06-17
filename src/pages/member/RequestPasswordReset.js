import React, { useState } from 'react';
import { Col, Form, InputGroup, Row, Button, Spinner } from "react-bootstrap";
import axios from 'axios';

const RequestPasswordReset = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await axios.post('http://localhost:8001/members/find-pwd', {
                memberEmail: email
            });

            if (response.status === 201) {
                setSuccess(true);
            }
        } catch (error) {
            console.error('Failed to request password reset', error);
            setError('존재하는 회원을 찾을 수 없습니다. 입력하신 값을 다시 확인해주세요.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Row className="mt-5 justify-content-md-center">
            <Col className="col-8">
                <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">비밀번호 찾기</div>
                <Form className="p-5" onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formEmail">
                        <Form.Label column sm="2">이메일</Form.Label>
                        <Col sm="10">
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="이메일을 입력해 주세요."
                                    name="memberEmail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </InputGroup>
                        </Col>
                    </Form.Group>

                    <div className="px-0 d-flex align-items-center justify-content-center">
                        <Button variant="success" type="submit" className="w-50" disabled={loading}>
                            {loading ? <Spinner animation="border" size="sm" /> : "비밀번호 찾기"}
                        </Button>
                    </div>

                    {success && (
                        <div className="mt-3 text-center text-success">
                            <h5>비밀번호 재설정 이메일이 전송되었습니다.</h5>
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

export default RequestPasswordReset;
