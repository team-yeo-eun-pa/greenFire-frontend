import {combineReducers} from "redux";
import inquiryReducer from "./InquiryModules";
import memberReducer from "./MemberModules";
import noticeReducer from "./NoticeModules";
import AdminMemberReducer from "./AdminMemberModules";
import AdminCategoryReducer from "./AdminCategoryModules";
import AdminReportReducer from "./AdminReportModules";
import ReportReducer from "./ReportModules";
import productReducer from "./ProductModules";
import optionReducer from "./ProductOptionModules";
import sellerReducer from "./SellerModules";
import orderReducer from "./OrderModules";
import addressReducer from "./AddressModules";
import applyReducer from "./ApplyModules";
import ReviewReducer from "./ReviewModules";
import cartReducer from "./CartModules";

const rootReducer = combineReducers({
    inquiryReducer,
    memberReducer,
    sellerReducer,

    productReducer,
    optionReducer,
    cartReducer,

    noticeReducer,
    AdminMemberReducer,
    category: AdminCategoryReducer,
    orderReducer,
    addressReducer,
    AdminReportReducer,
    ReportReducer,
    applyReducer,
    ReviewReducer
});

export default rootReducer;