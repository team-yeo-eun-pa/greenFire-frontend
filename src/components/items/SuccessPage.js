import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function SuccessPage({ title, subtitle, onBtnClick1, onBtnClick2, btnText1, btnText2 }) {

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center">
            <img src="/greenFire_logo.png" alt="Green Fire Logo" className="my-5" style={{ width: '300px', marginBottom: '20px' }} />
            <h3 className="mb-3">{title}</h3>
            <p className="mb-5 text-center text-secondary">{subtitle}</p>
            {btnText1 && (
                <Button variant="success" style={{ width: 300, marginBottom: 20 }} onClick={onBtnClick1}>
                    {btnText1}
                </Button>
            )}
            {btnText2 && (
                <Button variant="outline-secondary" style={{ width: 300, marginBottom: 20 }} onClick={onBtnClick2}>
                    {btnText2}
                </Button>
            )}
        </Container>
    );
}

export default SuccessPage;