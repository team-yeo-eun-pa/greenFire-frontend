import Header from "../../components/common/Header";
import {Outlet} from "react-router-dom";
import Footer from "../../components/common/Footer";
import NavBar from "../../components/common/NavBar";
import Container from "react-bootstrap/Container";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callProfileAPI} from "../../apis/MemberAPICalls";

function Layout() {

    const dispatch = useDispatch();
    const {profileInfo} = useSelector(state => state.memberReducer);

    useEffect(() => {
        if (!profileInfo) {
            dispatch(callProfileAPI());
        }
    }, [dispatch, profileInfo]);

    return(
        <>
            <Header/>
            <NavBar profileInfo={profileInfo}/>
            <Container className="mt-5 justify-content-md-center">
            <main className="main">
                <Outlet/>
            </main>
            </Container>
            <Footer/>
        </>
    );
}

export default Layout;