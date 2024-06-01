import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {RiMedalLine} from "react-icons/ri";
import Button from "react-bootstrap/Button";
import {GiGreenhouse} from "react-icons/gi";
import {PiStorefrontLight} from "react-icons/pi";
import Container from "react-bootstrap/Container";
import React from "react";
import Image from "react-bootstrap/Image";

function StoreCategoryButtons() {
    return(
        <>
            <Container className="mt-5">
                <Row style={{marginTop: '5px', marginBottom: '10px'}}>
                    <Col>
                        <Card.Title
                            className="d-flex justify-content-center py-0 m-3"
                        ><Image src="/category1.png" style={{width: "160px", height: "160px"}}/></Card.Title>
                        <Card.Body className="text-center fw-bold">
                            <Card.Title>식품</Card.Title>
                        </Card.Body>
                    </Col>
                    <Col>
                        <Card.Title
                            className="d-flex justify-content-center py-0 m-3"
                        ><Image src="/category2.png" style={{width: "160px", height: "160px"}}/></Card.Title>
                        <Card.Body className="text-center fw-bold">
                            <Card.Title>주방용품</Card.Title>
                        </Card.Body>
                    </Col>
                    <Col>
                        <Card.Title
                            className="d-flex justify-content-center py-0 m-3"
                        ><Image src="/category3.png" style={{width: "160px", height: "160px"}}/></Card.Title>
                        <Card.Body className="text-center fw-bold">
                            <Card.Title>생활용품</Card.Title>
                        </Card.Body>
                    </Col>
                    <Col>
                        <Card.Title
                            className="d-flex justify-content-center py-0 m-3"
                        ><Image src="/category4.png" style={{width: "160px", height: "160px"}}/></Card.Title>
                        <Card.Body className="text-center fw-bold">
                            <Card.Title>생필품</Card.Title>
                        </Card.Body>
                    </Col>

                </Row>
            </Container>
        </>
    );
}

export default StoreCategoryButtons;