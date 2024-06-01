import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Table } from 'react-bootstrap';
import { AdminMemberAPICalls } from '../../apis/AdminMemberAPICalls';

const AdminMemberView = React.memo(() => {
    const dispatch = useDispatch();
    const adminMembers = useSelector(state => state.AdminMemberReducer.adminMembers || []);
    const currentPage = 1;

    useEffect(() => {
        dispatch(AdminMemberAPICalls({ currentPage }));
    }, [dispatch, currentPage]);

    if (!Array.isArray(adminMembers)) {
        return <div>잘못된 데이터 형식입니다.</div>;
    }

    return (
        <Row>
            <Col xs lg="9" className="mt-5">
                <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">회원관리</div>
                <Table hover className="table px-5 mt-4">
                    <thead className="border-2 border-bottom border-top border-secondary-subtle border-start-0 border-end-0">
                    <tr>
                        <th>번호</th>
                        <th>아이디</th>
                        <th>이름</th>
                        <th>닉네임</th>
                        <th>이메일</th>
                        <th>전화번호</th>
                        <th>상태</th>
                        <th>가입일</th>
                        <th>탈퇴일</th>
                    </tr>
                    </thead>
                    <tbody>
                    {adminMembers.map((adminMember, index) => (
                        <tr key={adminMember.memberCode}>
                            <td>{index + 1}</td>
                            <td>{adminMember.memberId}</td>
                            <td>{adminMember.memberName}</td>
                            <td>{adminMember.memberNickname}</td>
                            <td>{adminMember.memberEmail}</td>
                            <td>{adminMember.memberPhone}</td>
                            <td>{adminMember.memberStatus}</td>
                            <td>{adminMember.registDate}</td>
                            <td>{adminMember.quitDate}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
});

export default AdminMemberView;
