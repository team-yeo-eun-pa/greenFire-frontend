// AdminNotices.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Button } from 'react-bootstrap';
import { AdminNoticesAPICalls } from '../../apis/AdminNoticeAPICalls';
import TableEx from '../../components/items/TableEx';
import {useNavigate} from "react-router-dom";

function AdminNotices() {
    const dispatch = useDispatch();
    const { notices } = useSelector(state => state.noticeReducer);
    const [currentPage] = useState(1);
    const navigate = useNavigate();


    useEffect(() => {
        console.log(notices);
        dispatch(AdminNoticesAPICalls({ currentPage }));
    }, [dispatch, currentPage]);

    const handleRowClick = (index) => {
        const notice = notices.data[index];
        navigate(`/notice/detail`, { state: notice.noticeCode});
    };

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
                <TableEx headers={headers} rows={rows} onRowClick={handleRowClick} />
            </Col>
        </Row>
    );
}

export default AdminNotices;
