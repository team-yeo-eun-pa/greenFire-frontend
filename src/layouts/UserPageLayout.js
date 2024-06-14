import {Outlet} from "react-router-dom";
import UserPageNavBar from "../components/common/UserPageNavBar";
import {Col, Row} from "react-bootstrap";

function UserPageLayout() {

    return (
        <>
            <Row>
                <Col xs lg="3">
                    <UserPageNavBar/>
                </Col>
                <Col xs lg="9" className="mt-5">
                    <Outlet/>
                </Col>
            </Row>
        </>
    );
}

export default UserPageLayout;
