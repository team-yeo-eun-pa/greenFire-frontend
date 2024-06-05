import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

function InquiryListItem({inquiry : {inquiryCode, inquiryWriteDate, memberCode, csStatus}}) {


    const navigate = useNavigate();

    return (

        <div>

            <h5>{inquiryWriteDate}</h5>
            <h5>{memberCode}</h5>
            <h5>{csStatus}</h5>

            <Button
                onclick={()=> navigate(`/inquiry`)}
            >
                뒤로가기
            </Button>


        </div>

    );
}

export default InquiryListItem;