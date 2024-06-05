import {combineReducers} from "redux";
import inquiryReducer from "./InquiryModules";
import memberReducer from "./MemberModules";
import noticeReducer from "./NoticeModules";
import AdminMemberReducer from "./AdminMemberModules";
import sellerReducer from "./SellerModules";
import AdminCategoryReducer from "./AdminCategoryModules";
import AdminReportReducer from "./AdminReportModules";

const rootReducer = combineReducers({
    inquiryReducer, memberReducer, noticeReducer, AdminMemberReducer, category :AdminCategoryReducer, AdminReportReducer
});

export default rootReducer;