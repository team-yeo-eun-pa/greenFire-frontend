import AdminPageNavBar from "../components/common/AdminPageNavBar";
import {Col, Row} from "react-bootstrap";
import React from "react";
import {Outlet} from "react-router-dom";
import ListGroutEx from "../components/items/common/ListGroutEx";

function AdminPageLayout() {
    return (
        <>gi
            <Row>
                <Col xs lg="3">
                    <AdminPageNavBar/>
                </Col>
                <Col xs lg="9" className="mt-5">
                    <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">타이틀</div>
                    <ListGroutEx/>
                    <Outlet/>
                </Col>
            </Row>
        </>
    );
}

export default AdminPageLayout;