import {Outlet} from "react-router-dom";
import UserPageNavBar from "../components/common/UserPageNavBar";
import {Col, Row} from "react-bootstrap";
import React from "react";

function UserPageLayout() {
    return (
        <>
            <Row>
                <Col xs lg="3">
                    <UserPageNavBar/>
                </Col>
                <Col xs lg="9" className="mt-5">
                    {/*<div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">메뉴 타이틀</div>*/}
                    {/*<ListGroutEx/>*/}
                    <Outlet/>
                </Col>
            </Row>
        </>
    );
}

export default UserPageLayout;