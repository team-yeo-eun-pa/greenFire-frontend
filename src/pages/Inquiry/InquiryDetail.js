
import {Col, FloatingLabel, InputGroup, Row, Table} from "react-bootstrap";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callInquiryDetailViewAPI} from "../../apis/InquiryAPI";
import Button from "react-bootstrap/Button";
import {useNavigate, useParams} from "react-router-dom";
import Form from "react-bootstrap/Form";

function InquiryDetail () {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {inquiryCode} = useParams();

    const {detail} = useSelector(state => state.inquiryReducer);

    useEffect(() => {
        dispatch(callInquiryDetailViewAPI({inquiryCode}))
    }, []);

    return (
        <>

            {detail &&
            <>

                {/*<Form.Group as={Row} className="mb-3" controlId="inquiryCode">*/}
                {/*    <Form.Label column sm="2">*/}
                {/*        문의 코드*/}
                {/*    </Form.Label>*/}
                {/*    <Col sm="10">*/}
                {/*        <InputGroup className="mb-3">*/}
                {/*            <Form.Control*/}
                {/*                type="textarea"*/}
                {/*                placeholder={inquiryCode}*/}
                {/*                name="inquiryCode"*/}
                {/*                value={detail.inquiryCode}*/}
                {/*                onChange={onChangeHandler}*/}
                {/*            />*/}
                {/*        </InputGroup>*/}
                {/*    </Col>*/}
                {/*</Form.Group>*/}


                <div  className="text-center">문의 코드 : {inquiryCode}</div>
                <div className="text-center">작성일 : {detail.inquiryWriteDate} </div>
                <div className="text-center">문의 제목 : {detail.inquiryTitle} </div>
                <div className="text-center">문의 내용 : {detail.inquiryDetail} </div>
                <div clssName="test-center">문의 답변 내용 : {detail.inquiryReply} </div>
                <div className="text-center">문의 처리 상태 : {detail.inquiryReplyStatus} </div>
            </>
            }








                    {/*<>*/}
                        {/*placeholder에 값을 넣어주면?
                            인풋 타입에 값이 받아져서 오는걸까?*/}

                        {/*<FloatingLabel controlId="inquiryCode" label="inquiryCode">*/}
                        {/*    <Form.Control type="password" placeholder='${inquiryCode}' />*/}
                        {/*</FloatingLabel>*/}

                        {/*<FloatingLabel controlId="inquiryWriteDate" label="inquiryWriteDate">*/}
                        {/*    <Form.Control type="password" placeholder='{inquiryWriteDate}' />*/}
                        {/*</FloatingLabel>*/}

                        {/*<FloatingLabel controlId="inquiryTitle" label="inquiryTitle">*/}
                        {/*    <Form.Control type="password" placeholder='{inquiryTitle}' />*/}
                        {/*</FloatingLabel>*/}

                        {/*<FloatingLabel controlId="inquiryDetail" label="inquiryDetail">*/}
                        {/*    <Form.Control type="password" placeholder='{inquiryDetail}' />*/}
                        {/*</FloatingLabel>*/}

                        {/*<FloatingLabel controlId="inquiryReplayStatus" label="inquiryReplayStatus">*/}
                        {/*    <Form.Control type="inquiryStatus" placeholder='{inquiryReplyStatus}' />*/}
                        {/*</FloatingLabel>*/}

            <Button
                variant="outline-success"
                onClick={() => navigate(-1)}
            >{''}
                뒤로가기</Button>

        </>
    );
}

export default InquiryDetail;