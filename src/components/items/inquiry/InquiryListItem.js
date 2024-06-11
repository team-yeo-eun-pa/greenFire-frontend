import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

function InquiryListItem({inquiry: {inquiryCode, inquiryWriteDate, inquiryTitle, inquiryDetail}}) {


    const navigate = useNavigate();

    return (

        <div>
           <div
                onClick={() => navigate(`/inquiry/${inquiryCode}`)}
            >

                <h5>{inquiryWriteDate}</h5>
                <h5>{inquiryTitle}</h5>
                <h5>{inquiryDetail}</h5>
            </div>


            <Button
                onclick={() => navigate(`/`)}
            >
                메인으로
            </Button>


        </div>

    );
}

export default InquiryListItem;