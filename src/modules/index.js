import {combineReducers} from "redux";
import inquiryReducer from "./InquiryModules";
import memberReducer from "./MemberModules";
import noticeReducer from "./NoticeModules";
import AdminMemberReducer from "./AdminMemberModules";
import AdminCategoryReducer from "./AdminCategoryModules";
import AdminReportReducer from "./AdminReportModules";
import ReportReducer from "./ReportModules";

const rootReducer = combineReducers({
    inquiryReducer, memberReducer, noticeReducer, AdminMemberReducer, category :AdminCategoryReducer, AdminReportReducer,ReportReducer
});

export default rootReducer;