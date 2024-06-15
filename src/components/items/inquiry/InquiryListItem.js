import {useNavigate} from "react-router-dom";
import {Table} from "react-bootstrap";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {callInquiryDetailViewAPI} from "../../../apis/InquiryAPI";


function InquiryListItem({inquiry: {inquiryCode, inquiryWriteDate, inquiryTitle, inquiryDetail, inquiryReplyStatus}}) {


    const navigate = useNavigate();




    return (



                    <tr
                        onClick={() => navigate(`/members/mypage/inquiry/detail/${inquiryCode}`)}>

                        <td key={inquiryCode} className="text-center">{inquiryCode}</td>
                        <td key={inquiryWriteDate} className="text-center">{inquiryWriteDate}</td>
                        <td key={inquiryTitle} className="text-center">{inquiryTitle}</td>
                        <td key={inquiryDetail} className="text-center">{inquiryDetail}</td>
                        <td key={inquiryReplyStatus} className="text-center">{inquiryReplyStatus}</td>

                    </tr>
    );
}

export default InquiryListItem;