import Container from "react-bootstrap/Container";
import AdminPageNavBar from "../common/AdminPageNavBar";
import SignupForm from "../form/SignupForm";
import ChallengeList from "./challenge/ChallengeList";

function Main() {
    return (
        <>
            <Container className="mt-5 justify-content-md-center">
                <AdminPageNavBar/>
                {/*<SignupForm/>*/}
                {/*<ChallengeList/>*/}
            </Container>
        </>
    );
}

export default Main;