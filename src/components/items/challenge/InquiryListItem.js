import {useNavigate} from "react-router-dom";

function InquiryListItem({inquiry : {inquiryCode, inquiryWriteDate, memberCode, csStatus}}) {


    const navigate = useNavigate();

    return (

        <div
         onclick={()=> navigate(`/inquiry/${inquiryCode}`)}>

            <h5>{memberCode}</h5>
            <h5>{csStatus}</h5>


        </div>

    );
}

export default InquiryListItem;