import InquiryListItem from "../items/inquiry/InquiryListItem";
import data from "bootstrap/js/src/dom/data";
import React from "react";
import {Table} from "react-bootstrap";

function InquiryList({data}) {

    return (
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
            { data && data.map(inquiry => <InquiryListItem key={inquiry.inquiryCode} inquiry={inquiry}/>)}
            </tbody>

        </Table>
    );
}

export default InquiryList;