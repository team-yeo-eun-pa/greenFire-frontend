import React from 'react';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import { CgProfile } from 'react-icons/cg';

function MemberProfileItem({ profileInfo }) {
    return(
        <>
            {/*<div className="profile-item-div">*/}
            {/*    <h1>내 정보</h1>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        readOnly={true}*/}
            {/*        value={profileInfo.memberId}*/}
            {/*    />*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        readOnly={true}*/}
            {/*        value={profileInfo.memberName}*/}
            {/*    />*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        readOnly={true}*/}
            {/*        value={profileInfo.memberEmail}*/}
            {/*    />*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        readOnly={true}*/}
            {/*        value={profileInfo.memberNickname ? profileInfo.memberNickname : '미입력'}*/}
            {/*    />*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        readOnly={true}*/}
            {/*        value={profileInfo.memberPhone}*/}
            {/*    />*/}

                <Container className="mt-5 p-4">
                    <Row>
                        <Col className="text-center">
                            {profileInfo.profilePicture ? (
                                <Image
                                    src={profileInfo.profilePicture}
                                    roundedCircle
                                    className="mx-auto d-block mb-3"
                                    style={{ width: "130px", height: "130px" }}
                                />
                            ) : (
                                <CgProfile style={{ width: "130px", height: "130px" }} />
                            )}
                            <h5 className="fw-bold py-3">{profileInfo.memberName}</h5>
                            <div className="fw-bold py-3 border-bottom border-1 border-dark-subtle mb-5"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9}>
                            <Form>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm={2}>이름</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control plaintext readOnly defaultValue={profileInfo.memberName} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm={2}>아이디</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control plaintext readOnly defaultValue={profileInfo.memberId} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm={2}>이메일</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control plaintext readOnly defaultValue={profileInfo.memberEmail} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm={2}>연락처</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control plaintext readOnly defaultValue={profileInfo.memberPhone} />
                                    </Col>
                                </Form.Group>

                            </Form>
                            <Button variant="outline-primary" className="me-2">편집</Button>
                            <Button variant="outline-secondary">저장</Button>
                        </Col>
                    </Row>
                </Container>
        </>
    );
}

export default MemberProfileItem;