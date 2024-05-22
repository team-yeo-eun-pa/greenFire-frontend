import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";

function Error() {
    return (
        <error>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center">
                        <div>
                            <strong>
                                <h1>404</h1>
                            </strong>
                            <div>
                                <Image src="https://resource.miricanvas.com/image/argo/argo_frustration.png"
                                       className="p-2 mb-1" width={100} height={100}/>
                            </div>
                            <div className="mt-1">
                                못 찾았어요.
                            </div>
                            <div>
                                <span>다시 시도해보시겠어요?<br/></span>
                            </div>
                            <Button variant="success" type="submit" className="w-45 mt-3">
                                메인으로
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </error>
    );
}

export default Error;