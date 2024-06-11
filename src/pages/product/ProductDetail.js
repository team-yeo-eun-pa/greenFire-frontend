import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {callProductDetailAPI} from "../../apis/ProductAPI";

function ProductDetail() {

    const dispatch = useDispatch();
    const { productCode} = useParams();
    const { product } = useSelector(state => state.productReducer);

    useEffect(() => {
        dispatch(callProductDetailAPI({productCode}));
    }, []);

    return (
        <>
            {

            }
        </>
    );
}