import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import { AdminMemberAPICalls } from '../../apis/AdminMemberAPICalls';
import TableEx from '../../components/items/TableEx';
import '../../style.css'; // CSS 파일 임포트

const AdminMemberView = React.memo(() => {
    const dispatch = useDispatch();
    const adminMembers = useSelector(state => state.AdminMemberReducer.adminMembers || []);
    const [currentPage] = useState(1);

    useEffect(() => {
        dispatch(AdminMemberAPICalls({ currentPage }));
    }, [dispatch, currentPage]);

    if (!Array.isArray(adminMembers)) {
        return <div>잘못된 데이터 형식입니다.</div>;
    }

    const headers = [
        '번호', '아이디', '이름', '닉네임', '이메일', '전화번호', '상태', '가입일', '탈퇴일'
    ];

    const rows = adminMembers.map((adminMember, index) => [
        index + 1,
        adminMember.memberId,
        adminMember.memberName,
        adminMember.memberNickname,
        adminMember.memberEmail,
        adminMember.memberPhone,
        adminMember.memberStatus,
        adminMember.registDate,
        adminMember.quitDate,
    ]);

    return (
        <Container fluid className="px-4">
            <Row className="mt-2"> {/* 'mt-4'에서 'mt-2'로 수정 */}
                <Col className="px-0">
                    <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle pb-2">
                        회원관리
                    </div>
                    <div className="table-responsive mt-2"> {/* 'mt-3'에서 'mt-2'로 수정 */}
                        <TableEx headers={headers} rows={rows} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
});

export default AdminMemberView;
