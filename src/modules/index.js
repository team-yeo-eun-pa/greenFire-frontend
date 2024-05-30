import {combineReducers} from "redux";
import inquiryReducer from "./InquiryModules";
import memberReducer from "./MemberModules";

const rootReducer = combineReducers({
    inquiryReducer, memberReducer
});

export default rootReducer;