
import {FloatingLabel, Table} from "react-bootstrap";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {callInquiryDetailViewAPI} from "../../apis/InquiryAPI";

function InquiryDetail ({inquiry: {inquiryCode, inquiryWriteDate, inquiryTitle, inquiryDetail, inquiryReplyStatus}}) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(callInquiryDetailViewAPI({inquiryCode}))
    }, []);

    return (
        <>
            <Table hover className="table text-center px-5 mt-4">

                <thead>
                <tr>
                    <th>문의 코드 </th>
                    <th>작성일</th>
                    <th>문의 제목</th>
                    <th>문의 내용</th>
                    <th>문의 처리 상태</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td key={inquiryCode} className="text-center">{inquiryCode}</td>
                    <td key={inquiryWriteDate} className="text-center">{inquiryWriteDate}</td>
                    <td key={inquiryTitle} className="text-center">{inquiryTitle}</td>
                    <td key={inquiryDetail} className="text-center">{inquiryDetail}</td>
                    <td key={inquiryReplyStatus} className="text-center">{inquiryReplyStatus}</td>




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


                </tr>
                </tbody>

            </Table>

        </>
    );
}

export default InquiryDetail;