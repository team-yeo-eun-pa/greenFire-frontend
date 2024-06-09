import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Col, Row, InputGroup, Badge } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import {callApplyDetailAPI, callApplyUpdateAPI} from "../../apis/ApplyAPICalls";
import {FcCancel} from "react-icons/fc";

const ApplyDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { sellerCode } = useParams();
    const { applyDetail } = useSelector(state => state.applyReducer);
    const [isEditing, setIsEditing] = useState(false);
    const [form, setForm] = useState({
        storeName: '',
        storeRepresentativeName: '',
        businessNumber: '',
        mosNumber: '',
        storeType: '',
        applyContent: ''
    });

    useEffect(() => {
        dispatch(callApplyDetailAPI({ sellerCode }));
    }, [dispatch, sellerCode]);

    useEffect(() => {
        if (applyDetail) {
            setForm({
                storeName: applyDetail.storeName,
                storeRepresentativeName: applyDetail.storeRepresentativeName,
                businessNumber: applyDetail.businessNumber,
                mosNumber: applyDetail.mosNumber,
                storeType: applyDetail.storeType,
                applyContent: applyDetail.applyContent
            });
        }
    }, [applyDetail]);

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(callApplyUpdateAPI({ sellerCode, applyRequest: form }));
        setIsEditing(false);
    };

    const onClickEditHandler = () => {
        setIsEditing(true);
    };

    const onClickBackHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="mt-5">
            <Row className="justify-content-md-center">
                <Col className="col-8">
                <div className="w-100 mb-5 fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">반딧불이 스토어 신청</div>
                    {applyDetail ? (
                        isEditing ? (
                            <Form onSubmit={onSubmitHandler}>
                                <Form.Group as={Row} className="mb-3" controlId="formStoreName">
                                    <Form.Label column sm="3">
                                        상호명
                                    </Form.Label>
                                    <Col sm="9">
                                        <InputGroup className="mb-4">
                                            <Form.Control
                                                type="text"
                                                name="storeName"
                                                value={form.storeName}
                                                onChange={onChangeHandler}
                                            />
                                            <Button variant="outline-success" id="button-addon2">
                                                중복 확인
                                            </Button>
                                        </InputGroup>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-4" controlId="formStoreRepresentativeName">
                                    <Form.Label column sm="3">
                                        대표자
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="text"
                                            name="storeRepresentativeName"
                                            value={form.storeRepresentativeName}
                                            onChange={onChangeHandler}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-4" controlId="formBusinessNumber">
                                    <Form.Label column sm="3">
                                        사업자등록번호
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="text"
                                            name="businessNumber"
                                            value={form.businessNumber}
                                            onChange={onChangeHandler}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formMosNumber">
                                    <Form.Label column sm="3">
                                        통신판매업번호
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            type="text"
                                            name="mosNumber"
                                            value={form.mosNumber}
                                            onChange={onChangeHandler}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formStoreType">
                                    <Form.Label column sm="3">
                                        전문 분야
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Select
                                            name="storeType"
                                            value={form.storeType}
                                            onChange={onChangeHandler}
                                        >
                                            <option value="true">판매중</option>
                                            <option value="false">구매불가</option>
                                        </Form.Select>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-5" controlId="formApplyContent">
                                    <Form.Label column sm="3">
                                        신청 내용
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            name="applyContent"
                                            value={form.applyContent}
                                            onChange={onChangeHandler}
                                        />
                                    </Col>
                                </Form.Group>
                                <div
                                    className="w-100 mb-1 fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">
                                </div>
                                <div className="d-flex justify-content-end mt-3">
                                    <Button variant="outline-secondary" className="mx-2" onClick={onClickBackHandler}>
                                        취소
                                    </Button>
                                    <Button variant="success" type="submit" className="mx-2">
                                        저장
                                    </Button>
                                </div>
                            </Form>
                        ) : (
                            <div>
                                <Form.Group as={Row} className="mb-3" controlId="formStoreName">
                                <Form.Label column sm="4">
                                        상호명
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            plaintext
                                            readOnly
                                            defaultValue={applyDetail.storeName}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formStoreRepresentativeName">
                                    <Form.Label column sm="4">
                                        대표자
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            plaintext
                                            readOnly
                                            defaultValue={applyDetail.storeRepresentativeName}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formBusinessNumber">
                                    <Form.Label column sm="4">
                                        사업자등록번호
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            plaintext
                                            readOnly
                                            defaultValue={applyDetail.businessNumber}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formMosNumber">
                                    <Form.Label column sm="4">
                                        통신판매업번호
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            plaintext
                                            readOnly
                                            defaultValue={applyDetail.mosNumber}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formStoreRepresentativeName">
                                    <Form.Label column sm="4">
                                        전문분야
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            plaintext
                                            readOnly
                                            defaultValue={applyDetail.storeType}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formStoreRepresentativeName">
                                    <Form.Label column sm="4">
                                        대표사진
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            plaintext
                                            readOnly
                                            defaultValue={applyDetail.storeRepresentativeName}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formApplyDatetime">
                                    <Form.Label column sm="4">
                                        신청일
                                    </Form.Label>
                                    <Col sm="8">
                                        <Form.Control
                                            plaintext
                                            readOnly
                                            defaultValue={applyDetail.applyDatetime}
                                        />
                                    </Col>
                                </Form.Group>
                                {/*<Form.Group as={Row} className="mb-3" controlId="formApplyStatus">*/}
                                {/*    <Form.Label column sm="3">*/}
                                {/*        상태*/}
                                {/*    </Form.Label>*/}
                                {/*    <Col sm="9">*/}
                                {/*        <Badge bg={getBadgeVariant(applyDetail.applyStatus)}>*/}
                                {/*            {getBadgeText(applyDetail.applyStatus)}*/}
                                {/*        </Badge>*/}
                                {/*    </Col>*/}
                                {/*</Form.Group>*/}
                                {/*<Col sm="12">*/}
                                    <div
                                        className="w-100 mb-1 fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">
                                    </div>

                                    <div className="d-flex justify-content-end mt-3">
                                        <Button variant="outline-danger" className="btn-md mx-1"
                                                onClick={onClickEditHandler}>
                                            <FcCancel/> 신청 취소
                                        </Button>
                                        <Button variant="outline-success" className="btn-md mx-1"
                                                onClick={onClickEditHandler}>
                                            <FaEdit/> 내용 편집
                                        </Button>
                                    </div>
                                {/*</Col>*/}
                            </div>
                        )
                    ) : (
                        <p>로딩 중...</p>
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default ApplyDetail;
