import Header from "../common/Header";
import {Outlet} from "react-router-dom";
import Footer from "../common/Footer";
import NavScrollExample from "../common/NavScrollExample";

function Layout() {
    return(
        <>
            <Header/>
            <NavScrollExample/>
            <main className="main">
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default Layout;