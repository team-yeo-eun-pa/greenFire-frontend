
/*초기값*/
import {createActions, handleActions} from "redux-actions";

const initialState = {};


/*액션타입*/

const GET_INQUIRY = `inquiry/GET_INQUIRY`;
const SUCCESS = `inquiry/SUCCESS`;


/*액션함수*/
export const {inquiry : {getInquiry, success}} = createActions({

    [GET_INQUIRY] : result => ({inquiry : result.data}),
    [SUCCESS] : () => ({success : true})
})

/*리듀서함수*/

const inquiryReducer = handleActions({

    [GET_INQUIRY] : (state, {payload}) => payload,
    [SUCCESS] : (state, {payload}) => payload
}, initialState);

export default inquiryReducer;