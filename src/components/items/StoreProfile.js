import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {callStoreAPI} from "../../apis/SellerAPICalls";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {PiStorefrontLight} from "react-icons/pi";

function StoreProfile() {
    const dispatch = useDispatch();
    const {storeCode} = useParams();
    const {storeInfo} = useSelector(state => state.sellerReducer);

    useEffect(() => {
        dispatch(callStoreAPI(storeCode));
    }, [dispatch, storeCode]);

    console.log(storeInfo)

    return (
        storeInfo &&
        <>
            <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">스토어 정보</div>

            <Container className="mt-5" style={{marginBottom: "100px"}}>
                <Row className="py-5 bg-body-tertiary fs-5 flex-fill rounded-4">
                    <Col className="col-4 d-flex justify-content-center py-2 m-3">
                        {storeInfo.profilePicture ? (
                            <Image
                                src={storeInfo.profilePicture}
                                roundedCircle
                                className="mx-auto d-block mb-3"
                                style={{width: "130px", height: "130px"}}
                            />
                        ) : (
                            <PiStorefrontLight style={{width: "130px", height: "130px"}}/>
                        )}
                    </Col>
                    <Col className="">
                        <div
                            className="pt-2 fw-bolder fs-3"
                        >{storeInfo.storeName}</div>
                        <div className="pt-2">{storeInfo.storeInfo}</div>
                        <div className="pt-2">사업자번호 : {storeInfo.businessNumber}</div>
                        <div className="pt-2">통신판매업번호 :{storeInfo.mosNumber}</div>
                    </Col>
                </Row>
                <p>Representative: {storeInfo.storeRepresentativeName}</p>
                <p>Status: {storeInfo.storeStatus}</p>
            </Container>
        </>
    )
        ;
}

export default StoreProfile;
