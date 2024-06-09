import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { AdminNoticesAPICalls } from '../../apis/AdminNoticeAPICalls';
import TableEx from '../../components/items/TableEx';
import { useNavigate } from 'react-router-dom';
import '../../style.css'; // 스타일 시트 임포트

function AdminNotices() {
    const dispatch = useDispatch();
    const { notices } = useSelector(state => state.noticeReducer);
    const [currentPage] = useState(1);
    const [selectedOption, setSelectedOption] = useState(null);
    const [mode, setMode] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(AdminNoticesAPICalls({ currentPage }));
    }, [dispatch, currentPage]);

    if (!notices) {
        return <div>Loading...</div>;
    }

    const handleRowClick = (index) => {
        const notice = notices.data[index];
        navigate(`/admin/dashboard/notice`, { state: notice.noticeCode });
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
            // 선택된 옵션 제거
            setSelectedOption(null);
            setMode(null);
        }
    };

    const headers = ['번호', '제목', '작성자', '작성일', '게시글 관리'];

    const rows = notices.data
        ? notices.data.map((notice, index) => [
            index + 1,
            notice.noticeTitle,
            notice.memberName,
            notice.noticeDate,
            <div className="text-center">
                <Button className="option-btn me-2" variant="outline-primary" onClick={handleClickEdit}>수정</Button>
                <Button className="option-btn" variant="outline-danger" onClick={handleClickDelete}>삭제</Button>
            </div>
        ])
        : [];

    return (
        <Container fluid className="px-4">
            <Row className="mt-2">
                <Col className="px-0">
                    <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle pb-2">
                        공지사항
                    </div>
                    <div className="table-responsive mt-2">
                        <TableEx headers={headers} rows={rows} onRowClick={handleRowClick} />
                    </div>
                    <div className="button-container mt-2"> {/* 버튼 컨테이너로 감쌈 */}
                        <Button onClick={() => navigate('/admin/dashboard/notice-create')} variant="success">작성하기</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AdminNotices;
