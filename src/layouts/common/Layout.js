import Header from "../../common/Header";
import {Outlet} from "react-router-dom";
import Footer from "../../common/Footer";
import NavBar from "../../common/NavBar";
import Container from "react-bootstrap/Container";

function Layout() {
    return(
        <>
            <Header/>
            <NavBar/>
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