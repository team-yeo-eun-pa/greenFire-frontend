import {Outlet} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import React, {useEffect} from "react";
import SellerPageNavBar from "../components/common/SellerPageNavBar";
import {useDispatch, useSelector} from "react-redux";
import {callProfileAPI} from "../apis/MemberAPICalls";

function SellerPageLayout() {

    const dispatch = useDispatch();
    const {profileInfo} = useSelector(state => state.memberReducer);

    useEffect(() => {
        dispatch(callProfileAPI());
    }, []);

    return (
        <>
            <Row>
                <Col xs lg="3">
                    {
                        profileInfo && <SellerPageNavBar profileInfo={profileInfo}/>
                    }
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

export default SellerPageLayout;