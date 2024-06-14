
/*초기값*/
import {createActions, handleActions} from "redux-actions";

const initialState = {};


/*액션타입*/

const GET_ADDRESS = `address/GET_ADDRESS`;
const SUCCESS = `address/SUCCESS`;


/*액션함수*/
export const {address : {getAddress, success}} = createActions({

    [GET_ADDRESS] : result => ({address : result.data}),
    [SUCCESS] : () => ({success : true})
})

/*리듀서함수*/

const addressReducer = handleActions({

    [GET_ADDRESS] : (state, {payload}) => payload,
    [SUCCESS] : (state, {payload}) => payload
}, initialState);

export default addressReducer;