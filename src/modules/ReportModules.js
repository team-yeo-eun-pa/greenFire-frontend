import {createAction, handleActions} from "redux-actions";

const initialState = {
    success :false
};

const REPORT = 'report/REPORT';
const SUCCESS = 'report/SUCCESS';


export const getReport = createAction(REPORT, (result) => ({report: result.data}));
export const success = createAction(SUCCESS)

const ReportReducer = handleActions( {
    [REPORT] : (state, {payload}) => ({
        ...state,
        report: payload.report
    })
}, initialState)

export default ReportReducer;