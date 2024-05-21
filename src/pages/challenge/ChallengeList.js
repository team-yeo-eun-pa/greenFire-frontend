import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

function ChallengeList() {
    return (
        <Container>
            <Row>



                <CardGroup>
                    <Card>
                        <Row>
                            <Col> 프로필사진 </Col>
                            <Col>
                                <div>인증글 작성자</div>
                                <div>#메인태그</div>
                            </Col>
                        </Row>

                        <Card.Img variant="top" src="test1.jpg"/>
                        {/*이미지 사이즈에 상관 없음.
                단, 디폴트 사이즈는 310 X 160 픽셀쓰. */}

                        <Card.Body>
                            <Card.Title> 인증 글 1 </Card.Title>
                            <Card.Text>
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                            </Card.Text>

                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                                        <Form.Label>닉네임</Form.Label>
                                        <Row>
                                            <Col><Form.Control
                                                required
                                                type="text"
                                                placeholder="내용을 작성해주세요"
                                            /></Col>
                                            <Col><Button variant="success">댓글 등록</Button>{' '}</Col>
                                        </Row>
                                    </Form.Group>
                                </Row>
                            </Form>

                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Row>
                            <Col> 프로필사진 </Col>
                            <Col>
                                <div>인증글 작성자</div>
                                <div>#메인태그</div>
                            </Col>
                        </Row>
                        <Card.Img variant="top" src="test1.jpg"/>
                        <Card.Body>
                            <Card.Title> 인증 글 1 </Card.Title>
                            <Card.Text>
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                            </Card.Text>
                        </Card.Body>
                        <Row>
                            <Col><Form.Control
                                required
                                type="text"
                                placeholder="내용을 작성해주세요"
                            /></Col>
                            <Col><Button variant="success">댓글 등록</Button>{' '}</Col>
                        </Row>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Row>
                            <Col> 프로필사진 </Col>
                            <Col>
                                <div>인증글 작성자</div>
                                <div>#메인태그</div>
                            </Col>
                        </Row>
                        <Card.Img variant="top" src="test1.jpg"/>
                        <Card.Body>
                            <Card.Title> 인증 글 1 </Card.Title>
                            <Card.Text>
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                                두준두준 두준짱의 미모를 감상하는 타임 캬캬캬
                            </Card.Text>
                        </Card.Body>
                        <Row>
                            <Col><Form.Control
                                required
                                type="text"
                                placeholder="내용을 작성해주세요"
                            /></Col>
                            <Col><Button variant="success">댓글 등록</Button>{' '}</Col>
                        </Row>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                </CardGroup>
            </Row>
        </Container>
    );
}

export default ChallengeList;