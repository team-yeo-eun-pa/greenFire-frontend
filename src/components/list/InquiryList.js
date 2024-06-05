import InquiryListItem from "../items/inquiry/InquiryListItem";
import data from "bootstrap/js/src/dom/data";

function InquiryList({inquiry}) {

    return (
        <div>
            { inquiry && inquiry.map(inquiry => <InquiryListItem key={inquiry.inquiryCode} inquiry={inquiry}/>)}
        </div>
    );
}

export default InquiryList;