import React, { useState } from 'react';
import { Col, Form, InputGroup, Row, Button, Spinner } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FindMemberId = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [memberInfo, setMemberInfo] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setMemberInfo(null);

        try {
            const response = await axios.post('http://localhost:8001/members/find-id', {
                memberEmail: email
            });

            if (response.status === 200) {
                setMemberInfo(response.data);
            }
        } catch (error) {
            console.error('Failed to find member ID', error);
            setError('존재하는 회원을 찾을 수 없습니다. 입력하신 값을 다시 확인해주세요.');
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordReset = () => {
        navigate('/request-password-reset');
    };

    const handleLogin = () => {
        navigate('/members/login');
    };

    return (
        <Row className="mt-5 justify-content-md-center" style={{paddingTop: 120}}>
            <Col className="col-8">
                <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">아이디 찾기</div>
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

                    {!memberInfo && (
                        <div className="px-0 d-flex align-items-center justify-content-center">
                            <Button variant="success" type="submit" className="w-50" disabled={loading}>
                                {loading ? <Spinner animation="border" size="sm"/> : "아이디 찾기"}
                            </Button>
                        </div>
                    )}

                    {memberInfo && (
                        <div className="mt-3 text-center">
                            <h6>회원님의 초록불 아이디를 찾았습니다.</h6>
                            <div>아이디 : {memberInfo}</div>
                            <div className="mt-4 d-flex flex-column align-items-center">
                                <Button className="mb-2 w-50" variant="outline-success"
                                        onClick={handlePasswordReset}>
                                    비밀번호 찾기
                                </Button>
                                <Button className="w-50" variant="success" onClick={handleLogin}>
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

export default FindMemberId;
