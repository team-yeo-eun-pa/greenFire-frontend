import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

function Error() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickHandler=() => {
        dispatch(() => navigate("/"));
    }

    return (
        <error>
            <Container className="d-flex vh-100 align-items-start" style={{paddingTop: 200}}>
                <Row className="justify-content-center w-100">
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
                            <Button variant="success" type="submit" className="w-45 mt-3"
                                onClick={onClickHandler}
                            >
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