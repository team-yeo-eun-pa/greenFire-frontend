import InquiryList from "../../../components/list/InquiryList";
import React, {useEffect, useState} from "react";
import {getInquiry} from "../../../modules/InquiryModules";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Button from "react-bootstrap/Button";
import {callInquiryListAPI} from "../../../apis/InquiryAPI";
import PagingBar from "../../../components/common/PagingBar";



function InquiryListView({data}) {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [form, setForm] = useState();

    const [currentPage, setCurrentPage] = useState(1);



    const {getInquiry, inquiry} = useSelector(state => state.inquiryReducer);

    useEffect(() => {
        if (getInquiry === true) navigate(`/inquiry/view`);
    }, [getInquiry])

    const onClickInquiryRegistHandler = () => {
        dispatch(callInquiryListAPI({getInquiryListRequest}));
    }


    return  (

        <>

            {data &&
                <InquiryList data={inquiry.data}/>
            }
            {/*<PagingBar pageInfo={inquiry.pageInfo} setCurrentPage={setCurrentPage}/>*/}



            <div className="inquiry-regist-btn">
                <Button
                    variant="success"
                    onClick={onClickInquiryRegistHandler}
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


        </>
    );

}

export default InquiryListView;