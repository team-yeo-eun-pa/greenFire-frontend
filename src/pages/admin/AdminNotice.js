import React from 'react';
import AdminPageLayout from "../../layouts/AdminPageLayout";
import {Col, Row, Table} from "react-bootstrap";
import AdminPageNavBar from "../../components/common/AdminPageNavBar";
import ListGroutEx from "../../components/items/ListGroutEx";
import {Outlet} from "react-router-dom";
import Button from "react-bootstrap/Button";

function AdminNotice() {
    return (
        <>
            <Row>
                <Col xs lg="3">
                    <AdminPageNavBar/>
                </Col>
                <Col xs lg="9" className="mt-5">
                    <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">공지사항</div>
                    <Table hover className="table px-5 mt-4">
                        <thead className="border-2 border-bottom border-top border-secondary-subtle border-start-0 border-end-0">
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>신청일</th>
                        </tr>
                        </thead>

                        {/*tbody 안 내용은 각자 조회 기능에 맞게 재작성*/}
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                        {/*tbody 안 내용은 각자 조회 기능에 맞게 재작성*/}
                    </Table>
                    <Button variant="success">작성하기</Button>
                    <Button variant="outline-secondary">취소</Button>
                    <Outlet/>
                </Col>

            </Row>
        </>
    );
}

export default AdminNotice;
