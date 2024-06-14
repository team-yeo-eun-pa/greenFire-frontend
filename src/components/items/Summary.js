import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Summary = ({ summaryData, description }) => {
    return (
        <Container className="mt-5 my-4">
            <Row>
                {summaryData.map((data, index) => (
                    <Col md={12/index.length} className="text-center" key={index}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>{data.count}건</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {description && (
                <Row className="mt-5">
                    <Col className=" text-success">
                        {description.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default Summary;