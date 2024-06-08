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
    const [selectedOption, setSelectedOption] = useState(null);
    const [mode, setMode] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        console.log(notices);
        dispatch(AdminNoticesAPICalls({ currentPage }));
    }, [dispatch, currentPage]);

    if (!notices) {
        return <div>Loading...</div>;
    }

    const handleRowClick = (index) => {
        const notice = notices.data[index];
        navigate(`/admin/dashboard/notice`, { state: notice.noticeCode});
    };


    const handleClickEdit = () => {
        if (selectedOption === null) {
            alert("수정할 옵션을 선택하세요");
        } else {
            setMode("edit");
        }
    };

    const handleClickDelete = () => {
        setMode("delete");
        if (selectedOption === null) {
            alert("삭제할 옵션을 선택하세요");
        } else {
            //선택된 옵션 제거 작성 prop.setOptionInfo(prop.optionInfo.filter(opt => opt !== selectedOption));
            setSelectedOption(null);
            setMode(null);
        }
    };


    const headers = ['번호', '제목', '작성자', '작성일', 'Actions'];

    const rows = notices.data
        ? notices.data.map((notice, index) => [
            index + 1,
            notice.noticeTitle,
            notice.memberName,
            notice.noticeDate,
            <>
                <Button className="option-btn" onClick={handleClickEdit}>수정</Button>
                <Button className="option-btn" onClick={handleClickDelete}>삭제</Button>
            </>
        ])
        : [];

    return (
        <Row>
            <Col xs lg="9" className="mt-5">
                <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">공지사항</div>
                <TableEx headers={headers} rows={rows} onRowClick={handleRowClick} />
                <Button onClick={() => navigate('/admin/dashboard/notice-create')} variant="success">작성하기</Button>
            </Col>
        </Row>
    );
}

export default AdminNotices;
