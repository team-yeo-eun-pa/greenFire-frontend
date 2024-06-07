import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {callMemberInquiryRegistAPI, callUpdateInquiryAPI} from "../../apis/InquiryAPI";
import InquiryForm from "../../components/form/InquiryForm";
import {Col, Row} from "react-bootstrap";
import UserPageNavBar from "../../components/common/UserPageNavBar";
import Button from "react-bootstrap/Button";

function InquiryRegist() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        memberId: '',
        memberEmail: '',
        inquiryTitle: '',
        inquiryDetail: ''
    });

    const {getInquiry} = useSelector(state => state.inquiryReducer);

    useEffect(() => {
        if (getInquiry === true) navigate('/inquiry');
    }, [getInquiry])
    const onClickInquiryUpdateHandler = () => {
        const formData = new FormData();
        formData.append('inquiryUpdateRequest', new Blob([JSON.stringify(form)], {type: 'application/json'}));
        dispatch(callUpdateInquiryAPI({inquiryUpdateRequest: formData}));
    }


    return (
        <>
            <Row>

                {/*<Col xs={3}> <UserPageNavBar/> </Col>*/}


                <Col>
                    <Col xs={9}> <InquiryForm inquiry={form} setForm={setForm} modifyMode={true}/> </Col>




                            <div className="inquiry-regist-btn">
                                <Button
                                    variant="success"
                                    onClick={onClickInquiryUpdateHandler}
                                >{''}
                                    등록하기
                                </Button>

                            <Button
                                variant="outline-success"
                                onClick={() => navigate(-1)}
                            >{''}
                                뒤로가기
                            </Button>

                        </div>

                </Col>


            </Row>
        </>
    );
}


export default InquiryRegist;

