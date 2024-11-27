
import MainItem from "./MainItem";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callProfileAPI} from "../apis/MemberAPICalls";
import {isLogin} from "../utils/TokenUtils";

function Main() {
    const dispatch = useDispatch();
    const { profileInfo } = useSelector(state => state.memberReducer);

    useEffect(() => {
        if (isLogin() && !profileInfo) {
            dispatch(callProfileAPI());
        }
    }, [dispatch, profileInfo]);

    return (
        <>
            <NavBar profileInfo={profileInfo || {}} />
            <MainItem />
            <Footer />
        </>
    );
}

export default Main;