import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { AdminMemberAPICalls } from '../../apis/AdminMemberAPICalls';
import TableEx from '../../components/items/TableEx';

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
        <Row>
            <Col xs lg="9" className="mt-5">
                <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">회원관리</div>
                <TableEx headers={headers} rows={rows} />
            </Col>
        </Row>
    );
});

export default AdminMemberView;
