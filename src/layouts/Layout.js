import Header from "../common/Header";
import {Outlet} from "react-router-dom";
import Footer from "../common/Footer";
import NavBar from "../common/NavBar";

function Layout() {
    return(
        <>
            <Header/>
            <NavBar/>
            <main className="main">
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default Layout;