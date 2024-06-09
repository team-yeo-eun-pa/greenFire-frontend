import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import {callApplyCancelAPI, callApplyDetailAPI, callApplyRegistAPI, callApplyUpdateAPI} from "../../apis/ApplyAPICalls";
import {FcCancel} from "react-icons/fc";
import ApplyForm from "../../components/form/ApplyForm";

const ApplyDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { sellerCode } = useParams();
    const { applyDetail } = useSelector(state => state.applyReducer);
    const [isEditing, setIsEditing] = useState(false);
    const imageInput = useRef();

    const [form, setForm] = useState({
        storeName: '',
        storeRepresentativeName: '',
        businessNumber: '',
        mosNumber: '',
        memberPhone: 'test',
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

    const onClickApplyModifyHandler = () => {
        try {
            const formData = new FormData();
            formData.append('businessImg', imageInput.current.files[0]);
            formData.append('applyRequest', new Blob([JSON.stringify(form)], { type: 'application/json' }));

            dispatch(callApplyUpdateAPI({ sellerCode, applyRequest: formData }));
        } catch (error) {
            console.error('Error updating application:', error);
        }
    }


    const onClickCancelHandler = () => {
        const formData = new FormData();
        formData.append('cancelRequest', new Blob([JSON.stringify(form)], {type: 'application/json'}))
        dispatch(callApplyCancelAPI({sellerCode, cancelRequest: formData}));
    };

    const onClickEditHandler = () => {
        setIsEditing(true);
        setForm({...applyDetail});
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
                            <Form>
                                <Col className="col-12">
                                    <ApplyForm apply={form} setForm={setForm} imageInput={imageInput} modifyMode={true} />
                                </Col>
                                <div
                                    className="w-100 mb-1 fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">
                                </div>
                                <div className="d-flex justify-content-end mt-3">
                                    <Button variant="outline-secondary" className="mx-2" onClick={onClickBackHandler}>
                                        취소
                                    </Button>
                                    <Button variant="success" type="submit" className="mx-2" onClick={onClickApplyModifyHandler}>
                                        저장
                                    </Button>
                                </div>
                            </Form>
                        ) : (
                            <div>
                                {/*<Form.Group as={Row} className="mb-3" controlId="formStoreRepresentativeName">*/}
                                {/*    <Form.Label column sm="3">*/}
                                {/*        대표사진*/}
                                {/*    </Form.Label>*/}
                                {/*    <Col sm="9">*/}
                                {/*        {imageUrl &&*/}
                                {/*            <img*/}
                                {/*                className="d-none"*/}
                                {/*                alt="preview"*/}
                                {/*                src={imageUrl}*/}
                                {/*            />*/}
                                {/*        }*/}
                                {/*    </Col>*/}
                                {/*</Form.Group>*/}
                                <Form.Group as={Row} className="mb-3" controlId="formStoreName">
                                <Form.Label column sm="3">
                                        상호명
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            plaintext
                                            readOnly
                                            defaultValue={applyDetail.storeName}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formStoreRepresentativeName">
                                    <Form.Label column sm="3">
                                        대표자
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            plaintext
                                            readOnly
                                            defaultValue={applyDetail.storeRepresentativeName}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formBusinessNumber">
                                    <Form.Label column sm="3">
                                        사업자등록번호
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            plaintext
                                            readOnly
                                            defaultValue={applyDetail.businessNumber}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formMosNumber">
                                    <Form.Label column sm="3">
                                        통신판매업번호
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            plaintext
                                            readOnly
                                            defaultValue={applyDetail.mosNumber}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formStoreRepresentativeName">
                                    <Form.Label column sm="3">
                                        전문분야
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            plaintext
                                            readOnly
                                            defaultValue={applyDetail.storeType}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formApplyContent">
                                    <Form.Label column sm="3">
                                        신청 한 마디
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control
                                            plaintext
                                            readOnly
                                            defaultValue={applyDetail.applyContent}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formApplyDatetime">
                                    <Form.Label column sm="3">
                                        신청일
                                    </Form.Label>
                                    <Col sm="9">
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
                                                onClick={onClickCancelHandler}>
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
