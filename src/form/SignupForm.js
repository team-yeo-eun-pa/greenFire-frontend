import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, InputGroup, Row} from "react-bootstrap";

function SignupForm() {

    return (
        <Form>
            <Row className="mt-5 justify-content-md-center">
                <Col className="col-8">
                    <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">초록불 회원 가입</div>
                        <Form className="p-5">
                            <Form.Group as={Row} className="mb-3" controlId="">
                                <Form.Label column sm="2">
                                    이름
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" placeholder="이름을 입력해 주세요." />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="">
                                <Form.Label column sm="2">
                                    아이디
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" placeholder="아이디를 입력해 주세요." />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="">
                                <Form.Label column sm="2">
                                    이메일
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="text" placeholder="아이디를 입력해 주세요." />
                                </Col>
                                <Form.Label column sm="auto" style={{ width: '20px', textAlign: 'center', paddingLeft: 0, paddingRight: 0 }}>
                                    @
                                </Form.Label>
                                <Col sm="auto" style={{ flexGrow: 1 }}>
                                    <Form.Select aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="">
                                <Form.Label column sm="2">
                                    전화번호
                                </Form.Label>
                                <Col sm="3">
                                    <Form.Select aria-label="Default select example">
                                        <option>010</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Col sm="7">
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="아이디를 입력해 주세요."
                                            aria-label=""
                                            aria-describedby=""
                                        />
                                        <Button variant="outline-success" id="button-addon2">
                                            인증번호 발송
                                        </Button>
                                    </InputGroup>
                                </Col>
                            </Form.Group>

                            <div className="px-0 d-flex align-items-center justify-content-center">
                                <Button variant="success" type="submit" className="w-75">
                                    회원 가입
                                </Button>
                            </div>
                        </Form>
                    {/*<Col className="col-2 px-4 pt-5">*/}
                    {/*    <div className="fs-6 fw-light">이름</div>*/}
                    {/*    <div className="fs-6 fw-light">이메일</div>*/}
                    {/*    <div className="fs-6 fw-light">전화번호</div>*/}
                    {/*    <div className="fs-6 fw-light">본인확인</div>*/}
                    {/*    <div className="fs-6 fw-light">아이디</div>*/}
                    {/*    <div className="fs-6 fw-light">비밀번호</div>*/}
                    {/*</Col>*/}
                    {/*<Col className="col-8 pt-5">*/}
                    {/*<Form.Group className="mb-3" controlId="formBasicEmail">*/}
                    {/*    /!*<Form.Label>이름</Form.Label>*!/*/}
                    {/*    <Form.Control type="text" placeholder="이름을 입력해 주세요."/>*/}
                    {/*    /!*<Form.Text className="text-muted">*!/*/}
                    {/*    /!*    We'll never share your email with anyone else.*!/*/}
                    {/*    /!*</Form.Text>*!/*/}
                    {/*</Form.Group>*/}

                    {/*<Form.Group className="mb-3" controlId="formBasicPassword">*/}
                    {/*    <Form.Control type="password" placeholder="비밀번호를 입력해 주세요."/>*/}
                    {/*</Form.Group>*/}
                    {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
                    {/*    <Form.Check type="checkbox" label="Check me out"/>*/}
                    {/*</Form.Group>*/}
                    {/*</Col>*/}
                </Col>
            </Row>
        </Form>
    );


}

export default SignupForm;