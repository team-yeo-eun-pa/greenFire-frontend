import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Col, Modal, Row, Table} from 'react-bootstrap';
import {AdminReportAPICalls, AdminReportSuspendEndAPICalls} from "../../apis/AdminReportAPICalls";
import Button from "react-bootstrap/Button";
import {success} from "../../modules/AdminReportModules";
import {useNavigate} from "react-router-dom";

const AdminReports = React.memo(() => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const adminReports = useSelector(state => state.AdminReportReducer.reports || []);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(AdminReportAPICalls({ currentPage }));
    }, [dispatch, currentPage, success]);

    useEffect(() => {
        if (success) {
            navigate('/admin/dashboard/reports');
        }
    }, [success, navigate]);

    // for modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSuspendEnd = (memberCode) => {
        dispatch(AdminReportSuspendEndAPICalls({ memberCode}));
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
                        <th>정지상태</th>
                        <th>지위</th>
                        <th>신고횟수</th>
                        <th>정지해제시간</th>
                        <th>정지해제</th>
                    </tr>
                    </thead>
                    <tbody>
                    {adminReports.map((adminReports, index) => (
                        <tr key={adminReports.reportCode}>
                            <td>{index + 1}</td>
                            <td>{adminReports.memberId}</td>
                            <td>{adminReports.memberName}</td>
                            <td>{adminReports.memberNickname}</td>
                            <td>{adminReports.memberStatus}</td>
                            <td>{adminReports.memberRole}</td>
                            <td>{adminReports.reportCount}</td>
                            <td>{adminReports.suspendedEndDate}</td>
                            <td><Button variant="success" onClick={handleShow}>
                                정지해제</Button></td>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{adminReports.memberName}의 신고내역</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>해당 회원의 정지를 해제하시겠습니까?</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="success" className="text-white" onClick={ () => {
                                        handleSuspendEnd(adminReports.memberCode);
                                        handleClose();
                                    }}>
                                        확인
                                    </Button>
                                    <Button variant="secondary" onClick={handleClose}>
                                        취소
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
});

export default AdminReports;
