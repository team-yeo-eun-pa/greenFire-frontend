import {Outlet} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import SellerPageNavBar from "../components/common/SellerPageNavBar";

function SellerPageLayout() {

    return (
        <>
            <Row>
                <Col xs lg="3">
                    <SellerPageNavBar/>
                </Col>
                <Col xs lg="9" className="mt-5">
                    <Outlet/>
                </Col>
            </Row>
        </>
    );
}

export default SellerPageLayout;
