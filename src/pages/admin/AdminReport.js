import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Modal, Row, Table, Tabs, Tab, Dropdown } from 'react-bootstrap';
import { AdminReportAPICalls, AdminReportSuspendEndAPICalls, AdminReportDetailAPICalls } from "../../apis/AdminReportAPICalls";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const AdminReports = React.memo(() => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const adminReports = useSelector(state => state.AdminReportReducer.adminReports || []);
    const adminReportDetails = useSelector(state => state.AdminReportReducer.reportDetails || []);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedReport, setSelectedReport] = useState(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showSuspendModal, setShowSuspendModal] = useState(false);
    const [sortOption, setSortOption] = useState('');
    const [activeTab, setActiveTab] = useState('seller');
    const success = useSelector(state => state.AdminReportReducer.success);

    useEffect(() => {
        if (success) {
            navigate('/admin/dashboard/reports');
        }
    }, [success, navigate]);


    const handleShowDetails = async (memberId) => {
        await dispatch(AdminReportDetailAPICalls({ memberId }));
        setShowDetailsModal(true);
    };

    const handleShowSuspend = (report) => {
        setSelectedReport(report);
        setShowSuspendModal(true);
    };

    const handleCloseDetails = () => setShowDetailsModal(false);
    const handleCloseSuspend = () => setShowSuspendModal(false);

    const handleSuspendEnd = (memberCode) => {
        dispatch(AdminReportSuspendEndAPICalls({ memberCode }));
        handleCloseSuspend();
    }

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        // Add sorting logic here if necessary
    }

    console.log("Admin Reports:", adminReports);

    // useEffect(() => {
    //     if (activeTab === 'seller') {
    //         dispatch(AdminReportAPICalls({ currentPage, role: 'seller' }));
    //     } else if (activeTab === 'member') {
    //         dispatch(AdminReportAPICalls({ currentPage, role: 'member' }));
    //     }
    // }, [dispatch, currentPage, activeTab]);

    const fetchAdminReports = (role) => {
        dispatch(AdminReportAPICalls({ currentPage, role }));
    }

    useEffect(() => {
        fetchAdminReports(activeTab);
    }, [dispatch, currentPage, activeTab]);

    return (
        <Row>
            <Col xs lg="9" className="mt-5">
                <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">신고센터</div>
                <Tabs
                    id="controlled-tab"
                    activeKey={activeTab}
                    onSelect={(k) => setActiveTab(k)}
                    className="mb-3"
                >
                    <Tab eventKey="seller" title="판매자">
                        <Dropdown onSelect={handleSortChange} className="my-2">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                정렬
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="number">번호</Dropdown.Item>
                                <Dropdown.Item eventKey="date">정지일</Dropdown.Item>
                                <Dropdown.Item eventKey="count">신고횟수</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
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
                                <th>더보기</th>
                                <th>정지해제</th>
                            </tr>
                            </thead>
                            <tbody>
                            {adminReports.data &&
                                adminReports.data.map((report, index) => {
                                    if (report.role !== 'seller') return null;
                                    return (
                                        <tr key={report.memberCode}>
                                            <td>{index + 1}</td>
                                            <td>{report.memberId}</td>
                                            <td>{report.memberName}</td>
                                            <td>{report.memberNickname}</td>
                                            <td>{report.memberStatus}</td>
                                            <td>{report.memberRole}</td>
                                            <td>{report.reportCount}</td>
                                            <td>{report.suspendedEndDate}</td>
                                            <td><Button variant="success" onClick={() => handleShowDetails(report.memberId)}>더보기</Button></td>
                                            <td><Button variant="success" onClick={() => handleShowSuspend(report)}>정지해제</Button></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="member" title="회원">
                        <Dropdown onSelect={handleSortChange} className="my-2">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                정렬
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="number">번호</Dropdown.Item>
                                <Dropdown.Item eventKey="date">정지일</Dropdown.Item>
                                <Dropdown.Item eventKey="count">신고횟수</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
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
                                <th>더보기</th>
                                <th>정지해제</th>
                            </tr>
                            </thead>
                            <tbody>
                            {adminReports.data &&
                                adminReports.data.map((report, index) => {
                                    if (report.role !== 'member') return null;
                                    return (
                                        <tr key={report}>
                                            <td>{index + 1}</td>
                                            <td>{report.memberId}</td>
                                            <td>{report.memberName}</td>
                                            <td>{report.memberNickname}</td>
                                            <td>{report.memberStatus}</td>
                                            <td>{report.memberRole}</td>
                                            <td>{report.reportCount}</td>
                                            <td>{report.suspendedEndDate}</td>
                                            <td><Button variant="success" onClick={() => handleShowDetails(report.memberId)}>더보기</Button></td>
                                            <td><Button variant="success" onClick={() => handleShowSuspend(report)}>정지해제</Button></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </Col>

            <Modal show={showDetailsModal} onHide={handleCloseDetails}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedReport && `${selectedReport.memberName || selectedReport.businessName}의 신고상세`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {adminReportDetails && (
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>번호</th>
                                <th>신고 내용</th>
                                <th>신고 위치</th>
                                <th>신고 날짜</th>
                            </tr>
                            </thead>
                            <tbody>
                            {adminReportDetails.map((detail, idx) => (
                                <tr key={detail.reportCode}>
                                    <td>{idx + 1}</td>
                                    <td>{detail.reportReason}</td>
                                    <td>{detail.reportType}</td>
                                    <td>{detail.reportDate}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDetails}>닫기</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showSuspendModal} onHide={handleCloseSuspend}>
                <Modal.Header closeButton>
                    <Modal.Title>정지 해제 확인</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>해당 회원의 정지를 해제하시겠습니까?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => handleSuspendEnd(selectedReport.memberCode)}>확인</Button>
                    <Button variant="secondary" onClick={handleCloseSuspend}>취소</Button>
                </Modal.Footer>
            </Modal>
        </Row>
    );
});

export default AdminReports;
