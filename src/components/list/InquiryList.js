import InquiryListItem from "../items/inquiry/InquiryListItem";
import data from "bootstrap/js/src/dom/data";

function InquiryList({inquiry}) {

    return (
        <div>
            { data && data.map(inquiry => <InquiryListItem key={inquiry.inquiryCode} inquiry={inquiry}/>)}
        </div>
    );
}

export default InquiryList;