import Image from 'react-bootstrap/Image';
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import React from "react";
import Button from "react-bootstrap/Button";
import {RiMedalLine} from "react-icons/ri";
import {GiGreenhouse} from "react-icons/gi";
import {PiStorefrontLight} from "react-icons/pi";
import StoreCategoryButtons from "./StoreCategoryButtons";
import {useNavigate} from "react-router-dom";

function MainItem() {

    const navigate = useNavigate();

    return (
        <>
            <Container style={{marginBottom: "100px"}}>
                <Row>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Image src="/greenFire_logo.png" fluid/>
                    </Col>
                </Row>
                <Col className="text-center">
                    <h5>누구에게나 마음 속 초록불은 있다!<br/>당신의 마음에 초록불을 밝혀보세요.</h5>
                </Col>
            </Container>
            {/*<div className="border-bottom border-1 border-success" style={{marginTop: "100px"}}/>*/}
            <Row>
                <Col
                    style={{
                        backgroundColor: "rgba(181,208,181,0.25)",
                        height: "500px",
                        color: "rgba(181,208,181,0.25)",
                        fontSize: "100px",
                        fontWeight: "bolder",
                        letterSpacing: "80px",
                        overflow: "auto"
                    }}
                    className="col-lg-6 col-md-12 px-5 d-flex align-items-center justify-content-start text-end">
                    GREEN<br/>FIRE
                </Col>
                <Col
                    style={{
                        backgroundColor: "rgba(181,208,181,0.25)",
                        height: "500px",
                        color: "rgba(68,75,68,0.8)",
                        fontSize: "15px",
                        fontWeight: "lighter"
                    }}
                    className="col-lg-6 col-md-12 col-sm-auto px-5 d-flex align-items-center justify-content-start text-start">
                    <div
                        className="lh-lg"
                        style={{
                            maxHeight: "100%",
                            overflow: "auto",
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                            paddingRight: "15px"
                        }}>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur aut dolorem,
                            ducimus ea et fugit ipsum molestias optio provident quas quisquam quod repellat repellendus,
                            repudiandae rerum sapiente sed sint.
                            Accusamus beatae cupiditate dolore dolores enim explicabo incidunt nostrum quos similique?
                            Ad aliquam dicta exercitationem in ipsam iure molestiae nulla ratione, veniam vero. At
                            deserunt dolorum eligendi officia sunt suscipit!
                            At facilis porro quis! Aliquam debitis earum est illum iste minima molestias mollitia,
                            natus nemo nisi numquam, praesentium quae tempore voluptatibus voluptatum. At facere labore
                            magnam, optio pariatur quia reprehenderit!
                        </div>
                    </div>
                </Col>
            </Row>
            {/*<Card style={{ width: '18rem' }}>*/}
            <Container className="mt-5" style={{marginBottom: "100px"}}>
                <Row style={{marginTop: '5px', marginBottom: '10px'}}>
                    <Col>

                        <Card.Title
                            className="d-flex justify-content-center py-2 m-3"
                        ><RiMedalLine style={{width: "130px", height: "130px"}}/></Card.Title>
                        <Card.Body className="text-center">
                            <Card.Title>초록불 챌린지</Card.Title>
                            <Card.Text>
                                친환경 제품을 판매하는<br/> 초록불의 스토어입니다.
                            </Card.Text>
                            <Button
                                variant="outline-success"
                                onClick={() => navigate('/challenge')}
                            >스토어 바로가기</Button>
                        </Card.Body>
                    </Col>
                    <Col>

                        <Card.Title
                            className="d-flex justify-content-center py-2 m-3"
                        ><GiGreenhouse style={{width: "130px", height: "130px"}}/></Card.Title>
                        <Card.Body className="text-center">
                            <Card.Title>반딧불이 스토어</Card.Title>
                            <Card.Text>
                                친환경 제품을 판매하는<br/> 초록불의 스토어입니다.
                            </Card.Text>
                            <Button
                                variant="outline-success"
                                onClick={() => navigate('/product')}
                            >스토어 바로가기</Button>
                        </Card.Body>
                    </Col>
                    <Col>

                        <Card.Title
                            className="d-flex justify-content-center py-2 m-3"
                        ><PiStorefrontLight style={{width: "130px", height: "130px"}}/></Card.Title>
                        <Card.Body className="text-center">
                            <Card.Title>스토어 입점</Card.Title>
                            <Card.Text>
                                친환경 제품을 판매하는<br/> 초록불의 스토어입니다.
                            </Card.Text>
                            <Button
                                variant="outline-success"
                                onClick={() => navigate('/members/mypage')}
                            >스토어 바로가기</Button>
                        </Card.Body>
                    </Col>

                </Row>
            </Container>

            <Row>
                <Col
                    style={{
                        backgroundColor: "rgba(127,216,89,0.22)",
                        height: "500px",
                        color: "rgba(68,75,68,0.8)",
                        fontSize: "15px",
                        fontWeight: "lighter"
                    }}
                    className="col-lg-6 col-md-12 col-sm-auto px-5 d-flex align-items-center justify-content-start text-end">
                    <div
                        className="lh-lg"
                        style={{
                            maxHeight: "100%",
                            overflow: "auto",
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                            paddingRight: "15px"
                        }}>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur aut dolorem,
                            ducimus ea et fugit ipsum molestias optio provident quas quisquam quod repellat repellendus,
                            repudiandae rerum sapiente sed sint.
                            Accusamus beatae cupiditate dolore dolores enim explicabo incidunt nostrum quos similique?
                            Ad aliquam dicta exercitationem in ipsam iure molestiae nulla ratione, veniam vero. At
                            deserunt dolorum eligendi officia sunt suscipit!
                            At facilis porro quis! Aliquam debitis earum est illum iste minima molestias mollitia,
                            natus nemo nisi numquam, praesentium quae tempore voluptatibus voluptatum. At facere labore
                            magnam, optio pariatur quia reprehenderit!
                        </div>
                    </div>
                </Col>
                <Col
                    style={{
                        backgroundColor: "rgba(127,216,89,0.22)",
                        height: "500px",
                        color: "rgba(181,208,181,0.25)",
                        fontSize: "100px",
                        fontWeight: "bolder",
                        letterSpacing: "80px",
                        overflow: "auto"
                    }}
                    className="col-lg-6 col-md-12 px-5 d-flex align-items-center justify-content-start text-start">
                    GREEN<br/>FIRE
                </Col>
            </Row>

            {/* 식품, 주방용품, 생활용품, 생필품 버튼*/}
            <StoreCategoryButtons/>

        </>
    );
}

export default MainItem;