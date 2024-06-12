// AdminNotices.jsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Button } from 'react-bootstrap';
import {AdminNoticesAPICalls, NoticeAPICalls, NoticeDeleteAPICalls} from '../../apis/NoticeAPICalls';
import TableEx from '../../components/items/TableEx';
import { useNavigate } from "react-router-dom";
import { isAdmin } from "../../utils/TokenUtils";
import PagingBar from "../../components/common/PagingBar";
import notice from "./Notice";

function AdminNotices() {
    const dispatch = useDispatch();
    const { notices } = useSelector(state => state.noticeReducer);
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
    const [totalPages, setTotalPages] = useState(1); // 총 페이지 수
    const navigate = useNavigate();
    const [isAdminUser, setIsAdminUser] = useState(false);
    const [modifyMode, setModifyMode] = useState(false);
    const [form, setForm] = useState({});

    useEffect(() => {
        const checkAdminStatus = async () => {
            const adminStatus = await isAdmin();
            setIsAdminUser(adminStatus);
        };

        checkAdminStatus();
    }, []);

    useEffect(() => {
        // API 호출하여 공지사항 목록 가져오기
        dispatch(AdminNoticesAPICalls({ currentPage })).then(response => {
            if (response && response.success) {
                // 총 페이지 수 설정
                setTotalPages(response.totalPages);
            }
        });
    }, [dispatch, currentPage]);


    const handleEditNotice = async (notice) => {
     navigate('/admin/dashboard/notice-update', {state : notice.noticeCode})
    };


    // 공지사항 삭제 확인 및 처리 함수
    const handleDeleteConfirm = (noticeCode) => {
        if (window.confirm("삭제하시겠습니까?")) {
            dispatch(NoticeDeleteAPICalls({ noticeCode })).then(response => {
                if (response && response.success) {
                    navigate('/notice');
                }
            });
        }
    };

    // 공지사항 테이블의 행 클릭 시 해당 공지사항의 상세 페이지로 이동하는 함수
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
                <div className="text-center" key={notice.noticeCode}>
                    <Button className="option-btn me-2" variant="outline-secondary" onClick={(e) => { e.stopPropagation(); handleEditNotice(notice); }}>수정</Button>
                    <Button className="option-btn" variant="outline-danger" onClick={(e) => { e.stopPropagation(); handleDeleteConfirm(notice.noticeCode); }}>삭제</Button>
                </div>
            )
        ])
        : [];

    // 페이지 변경 이벤트 핸들러
    const handlePageChange = (page) => {
        setCurrentPage(page); // 페이지 변경 시 현재 페이지 업데이트
    };

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
                <PagingBar currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} /> {/* PagingBar에 currentPage, totalPages, onPageChange 전달 */}
            </Col>
        </Row>
    );
}

export default AdminNotices;