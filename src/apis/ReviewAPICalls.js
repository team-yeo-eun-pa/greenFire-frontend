import {authRequest} from "./api";
import {getReviews} from "../modules/ReviewModules";

export const ReviewsAPICalls = ({productCode}) => {
    return async (dispatch, getState) => {
        const result = await authRequest.get(`/member/products/${productCode}/reviews`);

        console.log('ReviewAPICalls result : ', result);

        if(result.status === 200) {
            dispatch(getReviews(result));
        }
    }
}

export const ReviewCreateAPICalls = ({productCode, reviewCreateRequest}) => {
    return async (dispatch, getState) => {
        const result = await authRequest.post(`/member/reviews/${productCode}`, reviewCreateRequest);
        console.log('ReviewCreateAPICalls result : ' , result);

        if(result.status === 201) {
            dispatch(getReviews(result));
        }
    }

}
