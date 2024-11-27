import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import { CgProfile } from 'react-icons/cg';
import { FaEdit } from 'react-icons/fa';

function MemberProfileItem({ profileInfo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [form, setForm] = useState({
        memberNickname: profileInfo.memberNickname || "닉네임을 등록해보세요 :)",
        memberEmail: profileInfo.memberEmail,
        memberPhone: profileInfo.memberPhone
    });

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleCancel = () => {
        setForm({
            memberNickname: profileInfo.memberNickname || "닉네임을 등록해보세요 :)",
            memberEmail: profileInfo.memberEmail,
            memberPhone: profileInfo.memberPhone
        });
        setIsEditing(false);
    };

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Container className="mt-5 p-4">
            <Row className="justify-content-center">
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
                    <div className="fw-bold py-3 border-bottom border-1 border-dark-subtle mb-5" />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={7}>
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>이름</Form.Label>
                            <Col sm={9}>
                                <Form.Control plaintext readOnly defaultValue={profileInfo.memberName} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>닉네임</Form.Label>
                            <Col sm={9}>
                                {isEditing ? (
                                    <Form.Control
                                        type="text"
                                        name="memberNickname"
                                        value={form.memberNickname}
                                        onChange={onChangeHandler}
                                    />
                                ) : (
                                    <Form.Control plaintext readOnly defaultValue={profileInfo.memberNickname || "닉네임을 등록해보세요 :)"} />
                                )}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>아이디</Form.Label>
                            <Col sm={9}>
                                <Form.Control plaintext readOnly defaultValue={profileInfo.memberId} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>이메일</Form.Label>
                            <Col sm={9}>
                                {isEditing ? (
                                    <Form.Control
                                        type="email"
                                        name="memberEmail"
                                        value={form.memberEmail}
                                        onChange={onChangeHandler}
                                    />
                                ) : (
                                    <Form.Control plaintext readOnly defaultValue={profileInfo.memberEmail} />
                                )}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3}>연락처</Form.Label>
                            <Col sm={9}>
                                {isEditing ? (
                                    <Form.Control
                                        type="text"
                                        name="memberPhone"
                                        value={form.memberPhone}
                                        onChange={onChangeHandler}
                                    />
                                ) : (
                                    <Form.Control plaintext readOnly defaultValue={profileInfo.memberPhone} />
                                )}
                            </Col>
                        </Form.Group>
                    </Form>

                    <div className="d-flex justify-content-end mt-3">
                        {isEditing ? (
                            <>
                                <Button variant="outline-secondary" className="mx-2" onClick={handleCancel}>
                                    취소
                                </Button>
                                <Button variant="success" className="mx-2" onClick={handleSave}>
                                    저장
                                </Button>
                            </>
                        ) : (
                            <Button variant="outline-success" className="mx-2" onClick={handleEdit}>
                                <FaEdit /> 편집
                            </Button>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default MemberProfileItem;
