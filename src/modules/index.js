import {combineReducers} from "redux";
import inquiryReducer from "./InquiryModules";
import memberReducer from "./MemberModules";
import noticeReducer from "./NoticeModules";
import AdminMemberReducer from "./AdminMemberModules";
import AdminCategoryReducer from "./AdminCategoryModules";
import AdminReportReducer from "./AdminReportModules";
import ReportReducer from "./ReportModules";
import applyReducer from "./ApplyModules";
import orderReducer from "./OrderModules";
import sellerReducer from "./SellerModules";
import addressReducer from "./AddressModules";

const rootReducer = combineReducers({
    inquiryReducer,
    memberReducer,
    sellerReducer,
    noticeReducer,
    AdminMemberReducer,
    category: AdminCategoryReducer,
    orderReducer,
    addressReducer,
    AdminReportReducer,
    ReportReducer,
    applyReducer
});

export default rootReducer;