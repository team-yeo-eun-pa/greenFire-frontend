import Container from "react-bootstrap/Container";
import AdminPageNavBar from "../common/AdminPageNavBar";
import SignupForm from "../form/SignupForm";

function Main() {
    return (
        <>
            <Container className="mt-5 justify-content-md-center">
                {/*<AdminPageNavBar/>*/}
                <SignupForm/>
            </Container>
        </>
    );
}

export default Main;