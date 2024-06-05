import {combineReducers} from "redux";
import inquiryReducer from "./InquiryModules";
import memberReducer from "./MemberModules";
import noticeReducer from "./NoticeModules";
import AdminMemberReducer from "./AdminMemberModules";
import sellerReducer from "./SellerModules";
import AdminCategoryReducer from "./AdminCategoryModules";
import productReducer from "./ProductModules";

const rootReducer = combineReducers({
    inquiryReducer, memberReducer, productReducer, sellerReducer, noticeReducer, AdminMemberReducer, category :AdminCategoryReducer
});

export default rootReducer;