// AdminNotices.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Button } from 'react-bootstrap';
import { AdminNoticeAPICalls } from '../../apis/AdminNoticeAPICalls';
import TableEx from '../../components/items/TableEx';

function AdminNotices() {
    const dispatch = useDispatch();
    const { notices } = useSelector(state => state.noticeReducer);
    const [currentPage] = useState(1);

    useEffect(() => {
        console.log(notices);
        dispatch(AdminNoticeAPICalls({ currentPage }));
    }, [dispatch, currentPage]);

    if (!notices) {
        return <div>Loading...</div>;
    }

    const headers = ['번호', '제목', '작성자', '작성일'];

    const rows = notices.data
        ? notices.data.map((notice, index) => [
            index + 1,
            notice.noticeTitle,
            notice.memberName,
            notice.noticeDate
        ])
        : [];

    return (
        <Row>
            <Col xs lg="9" className="mt-5">
                <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">공지사항</div>
                <TableEx headers={headers} rows={rows} />
                <Button variant="success">작성하기</Button>
            </Col>
        </Row>
    );
}

export default AdminNotices;
