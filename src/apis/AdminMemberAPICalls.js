import {authRequest} from "./api";
import {getAdminMembers} from "../modules/AdminMemberModules";

export const AdminMemberAPICalls = ({currentPage = 1}) => {
    return async (dispatch, getState) => {
            const result = await authRequest.get(`/admin/members?page=${currentPage}`);
            console.log('AdminMemberAPICalls result : ', result);

            if (result.status === 200) {
                dispatch(getAdminMembers(result));
            }

    }
}
