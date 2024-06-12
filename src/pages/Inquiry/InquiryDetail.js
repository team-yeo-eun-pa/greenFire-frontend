
import {FloatingLabel, Table} from "react-bootstrap";
import React from "react";

function InquiryDetail ({inquiry: {inquiryCode, inquiryWriteDate, inquiryTitle, inquiryDetail, inquiryReplyStatus}}) {

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
                {/*  값만 가져오는 방법이 뭘까.
                     테이블이 아니고, 등록 페이지 처럼 만들어야 하는디.
                     인풋타입을 넣으면 입력을 받을 수 잇게 되는데..
                     후에
                    */}


                    <>
                        {/*placeholder에 값을 넣어주면?*/}

                        <FloatingLabel controlId="inquiryCode" label="inquiryCode">
                            <Form.Control type="password" placeholder={inquiryCode} />
                        </FloatingLabel>

                        <FloatingLabel controlId="inquiryWriteDate" label="inquiryWriteDate">
                            <Form.Control type="password" placeholder={inquiryWriteDate} />
                        </FloatingLabel>

                        <FloatingLabel controlId="inquiryTitle" label="inquiryTitle">
                            <Form.Control type="password" placeholder={inquiryTitle} />
                        </FloatingLabel>

                        <FloatingLabel controlId="inquiryDetail" label="inquiryDetail">
                            <Form.Control type="password" placeholder={inquiryDetail} />
                        </FloatingLabel>

                        <FloatingLabel controlId="inquiryReplayStatus" label="inquiryReplayStatus">
                            <Form.Control type="inquiryStatus" placeholder={inquiryReplyStatus} />
                        </FloatingLabel>
                    </>

                </tr>
                </tbody>

            </Table>

        </>
    );
}