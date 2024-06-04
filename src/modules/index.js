import {combineReducers} from "redux";
import inquiryReducer from "./InquiryModules";
import memberReducer from "./MemberModules";
import noticeReducer from "./NoticeModules";
import AdminMemberReducer from "./AdminMemberModules";
import sellerReducer from "./SellerModules";

const rootReducer = combineReducers({
    inquiryReducer, memberReducer, sellerReducer, noticeReducer, AdminMemberReducer
});

export default rootReducer;