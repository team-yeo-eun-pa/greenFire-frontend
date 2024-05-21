import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Row} from "react-bootstrap";

function SignupForm() {

    return (
        <Form>
            <Row className="mt-5 justify-content-md-center">
                <Col className="col-8">
                    <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">초록불 회원 가입</div>
                    <Row>
                    <Col className="col-2 px-4 pt-5">
                        <div className="fs-6 fw-light">이름</div>
                        <div className="fs-6 fw-light">이메일</div>
                        <div className="fs-6 fw-light">전화번호</div>
                        <div className="fs-6 fw-light">본인확인</div>
                        <div className="fs-6 fw-light">아이디</div>
                        <div className="fs-6 fw-light">비밀번호</div>
                    </Col>
                    <Col className="col-8 pt-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/*<Form.Label>이름</Form.Label>*/}
                        <Form.Control type="text" placeholder="이름을 입력해 주세요."/>
                        {/*<Form.Text className="text-muted">*/}
                        {/*    We'll never share your email with anyone else.*/}
                        {/*</Form.Text>*/}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="비밀번호를 입력해 주세요."/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>
                    </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
    );


}

export default SignupForm;