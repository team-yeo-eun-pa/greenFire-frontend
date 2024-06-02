import {authRequest} from "./api";
import {getAdminCategory, success} from "../modules/AdminCategoryModules";


export const AdminCategoryAPICalls = () => {
    return async (dispatch, getState) => {
        const result = await authRequest.get(`/admin/categories`);
        console.log('AdminCategoryAPICalls result : ', result);

        if(result.status === 200) {
            dispatch(getAdminCategory(result));
        }
    }
}

export const callAdminCategoryRegistAPI = ({ registRequest }) => {

    return async (dispatch, getState) => {
        const result = await authRequest.post(`/admin/categories`, registRequest);
        console.log('callAdminCategoryRegistAPI result : ',result);

        if(result.status === 201) {
            dispatch(success());
        }
    }
};