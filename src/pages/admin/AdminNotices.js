// AdminNotices.js
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Table, Button } from 'react-bootstrap';
import {AdminNoticeAPICalls} from "../../apis/AdminNoticeAPICalls";


function AdminNotices() {
    const dispatch = useDispatch();
    const {notices} = useSelector(state => state.noticeReducer);
    const [currentPage] = useState(1);

    useEffect(() => {
        console.log(notices)
        dispatch(AdminNoticeAPICalls({currentPage}));
    }, [currentPage]);

    return (
        notices &&
        <Row>
            <Col xs lg="9" className="mt-5">
                <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">공지사항</div>
                <Table hover className="table px-5 mt-4">
                    <thead className="border-2 border-bottom border-top border-secondary-subtle border-start-0 border-end-0">
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                    </thead>
                    <tbody>
                        {notices.data &&
                            notices.data.map((notice, index) => (
                        <tr key={notice.noticeCode}>
                            <td>{index + 1}</td>
                            <td>{notice.noticeTitle}</td>
                            <td>{notice.memberName}</td>
                            <td>{notice.noticeDate}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <Button variant="success">작성하기</Button>
            </Col>
        </Row>
    );
}

export default AdminNotices;
