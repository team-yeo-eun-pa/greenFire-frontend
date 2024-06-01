import {combineReducers} from "redux";
import inquiryReducer from "./InquiryModules";
import memberReducer from "./MemberModules";
import noticeReducer from "./NoticeModules";
import AdminMemberReducer from "./AdminMemberModules";

const rootReducer = combineReducers({
    inquiryReducer, memberReducer, noticeReducer, AdminMemberReducer
});

export default rootReducer;