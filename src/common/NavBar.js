import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary p-5">
            <Container fluid>
                <Image src="greenFire_logo-nav.png" width={30} height={30}/>
                <Navbar.Brand href="#" className="text-white mx-3">GREEN FIRE</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: "#ffffff"}} />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className="text-white">초록불 소개</Nav.Link>
                        <NavDropdown title="반딧불이 스토어" id="navbarScrollingDropdown" className="custom-dropdown">
                            <NavDropdown.Item href="">
                                전체보기
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action2">식품</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">주방용품</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">생활용품</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">생필품</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="초록불 챌린지" id="navbarScrollingDropdown" className="custom-dropdown">
                            <NavDropdown.Item href="">챌린지 참여</NavDropdown.Item>
                            <NavDropdown.Item href="">챌린지 인증</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">초록불 찾기</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="커뮤니티" id="navbarScrollingDropdown" className="custom-dropdown">
                            <NavDropdown.Item href="">공지사항</NavDropdown.Item>
                            <NavDropdown.Item href="">문의센터</NavDropdown.Item>
                            <NavDropdown.Item href="">신고센터</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <NavDropdown title="name" id="navbarScrollingDropdown"
                    className="mx-4">
                        <NavDropdown.Item href="#action2">식품</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;