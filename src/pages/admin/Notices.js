import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Button } from 'react-bootstrap';
import { AdminNoticesAPICalls } from '../../apis/AdminNoticeAPICalls';
import TableEx from '../../components/items/TableEx';
import { useNavigate } from "react-router-dom";
import { isAdmin } from "../../utils/TokenUtils";

function AdminNotices() {
    const dispatch = useDispatch();
    const { notices } = useSelector(state => state.noticeReducer);
    const [currentPage] = useState(1);
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAdminUser, setIsAdminUser] = useState(false);
    const [mode, setMode] = useState(null);


    useEffect(() => {
        const checkAdminStatus = async () => {
            const adminStatus = await isAdmin();
            setIsAdminUser(adminStatus);
        };

        checkAdminStatus();
    }, []);

    useEffect(() => {
        dispatch(AdminNoticesAPICalls({ currentPage }));
    }, [dispatch, currentPage]);

    const handleClickEdit = () => {
        if (selectedOption === null) {
            alert("수정할 옵션을 선택하세요");
        } else {
            setMode("edit");
        }
    };

    const handleClickDelete = () => {
        if (selectedOption === null) {
            alert("삭제할 옵션을 선택하세요");
        } else {
            setMode("delete");
            setSelectedOption(null);
            setMode(null);
        }
    };

    const handleRowClick = (index) => {
        const notice = notices.data[index];
        navigate(`/notice/detail`, { state: notice.noticeCode });
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
            notice.noticeDate,
            isAdminUser && (
                <div className="text-center">
                    <Button className="option-btn me-2" variant="outline-primary" onClick={handleClickEdit}>수정</Button>
                    <Button className="option-btn" variant="outline-danger" onClick={handleClickDelete}>삭제</Button>
                </div>
            )
        ])
        : [];

    return (
        <Row>
            <Col xs lg="9" className="mt-5">
                <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">공지사항</div>
                <TableEx headers={headers} rows={rows} onRowClick={handleRowClick} />
                {isAdminUser && (
                    <div className="button-container mt-2">
                        <Button onClick={() => navigate('/admin/dashboard/notice-create')} variant="success">작성하기</Button>
                    </div>
                )}
            </Col>
        </Row>
    );
}

export default AdminNotices;
