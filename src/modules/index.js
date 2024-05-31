import {combineReducers} from "redux";
import inquiryReducer from "./InquiryModules";
import memberReducer from "./MemberModules";
import noticeReducer from "./NoticeModules";

const rootReducer = combineReducers({
    inquiryReducer, memberReducer, noticeReducer
});

export default rootReducer;