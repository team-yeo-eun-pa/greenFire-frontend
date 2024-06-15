import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';

import { FaShoppingCart, FaHeart, FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import {Badge, Row, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import LoginModal from "../items/LoginModal";
import {useDispatch, useSelector} from "react-redux";
import {reset} from "../../modules/MemberModules";
import {isAdmin, isLogin, isSeller} from "../../utils/TokenUtils";
import {callLogoutAPI} from "../../apis/MemberAPICalls";
import {PiAcornDuotone} from "react-icons/pi";

function NavBar({ profileInfo }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showLoginModal, setShowLoginModal] = useState(false);
    const { success } = useSelector(state => state.memberReducer);

    useEffect(() => {
        if (success === true) {
            setShowLoginModal(false); // 모달 창 닫기
            navigate('/');
            dispatch(reset());
        }
    }, [success, navigate, dispatch]);

    const handleLoginModalClose = () => setShowLoginModal(false);
    const handleLoginModalShow = () => setShowLoginModal(true);

    // 기본값 설정
    const defaultProfileInfo = {
        memberName: "초록불",
        memberEmail: "당신은 멋진 지구지킴이!",
        profilePicture: null,
    };

    const displayProfileInfo = {
        ...defaultProfileInfo,
        ...profileInfo
    };

    function BeforeLogin() {
        return (
            <>
                <Badge
                    bg="light"
                    text="dark"
                    className="mx-2"
                    onClick={handleLoginModalShow}
                    style={{cursor: 'pointer'}}
                >
                    로그인
                </Badge>
                <Badge
                    bg="light"
                    text="dark"
                    className=""
                    onClick={() => navigate('members/signup')}
                    style={{cursor: 'pointer'}}
                >
                    회원가입
                </Badge>
            </>
        );
    }

    function AfterLogin() {
        return (
            <Row className="d-flex align-items-center justify-content-end">
                <Col
                    className="profile-pic col-3 mx-2"
                    style={{
                        background: "none",
                        color: "white",
                        border: "none",
                        marginBottom: "5px",
                        marginLeft: "15px",
                        width: "30px",
                        fontSize: "28px"
                    }}>
                    {displayProfileInfo.profilePicture ? (
                        <Image
                            src={displayProfileInfo.profilePicture}
                            roundedCircle
                            style={{width: "30px", height: "30px"}}
                        />
                    ) : (
                        <CgProfile />
                    )}
                </Col>

                <Col>
                    <NavDropdown title={displayProfileInfo.memberName || "User"} id="navbarScrollingDropdown" className="mx-1 col-12" align="end">
                        <div className="text-center mb-3">
                            {displayProfileInfo.profilePicture ? (
                                <Image
                                    src={displayProfileInfo.profilePicture}
                                    roundedCircle
                                    className="mx-auto d-block mb-3 p-4"
                                    style={{width: "90px", height: "90px"}}
                                />
                            ) : (
                                <PiAcornDuotone className="my-3" style={{width: "90px", height: "90px", color: "#6a914f"}} />
                            )}
                            <br/>
                            <div className="fw-bold fs-6">{displayProfileInfo.memberName}님</div>
                            <div style={{fontSize: 12}} className="fw-lighter">{displayProfileInfo.memberEmail}</div>
                        </div>
                        <NavDropdown.Divider />
                        {isAdmin() && (
                            <NavDropdown.Item onClick={() => navigate(`/admin/dashboard/main`)}>
                                관리자페이지
                            </NavDropdown.Item>
                        )}
                        {isSeller() && (
                            <>
                                <NavDropdown.Item onClick={() => navigate(`/seller/mystore/main`)}>
                                    마이스토어
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate(`/members/mypage`)}>
                                    마이페이지
                                </NavDropdown.Item>
                            </>
                        )}
                        {(!isAdmin() && !isSeller()) && (
                            <NavDropdown.Item onClick={() => navigate(`/members/mypage`)}>
                                마이페이지
                            </NavDropdown.Item>
                        )}
                        <NavDropdown.Divider />
                        <NavDropdown.Item type="button" onClick={() => dispatch(callLogoutAPI())}>
                            로그아웃
                        </NavDropdown.Item>
                    </NavDropdown>
                </Col>
            </Row>
        );
    }

    return (
        <Navbar expand="lg" className="bg-success p-5" style={{height: 162}}>
            <Container fluid>
                <Image src="/greenFire_logo-nav.png" width={30} height={30}/>
                <Navbar.Brand href="/" className="text-white mx-3">GREEN FIRE</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor: "#ffffff"}}/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className="text-white">초록불 소개</Nav.Link>
                        <NavDropdown title="반딧불이 스토어" id="navbarScrollingDropdown" className="custom-dropdown">
                            <NavDropdown.Item href="/product">
                                전체보기
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action2">식품</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">주방용품</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">생활용품</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">생필품</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="초록불 챌린지" id="navbarScrollingDropdown" className="custom-dropdown">
                            <NavDropdown.Item href="/">챌린지 소개</NavDropdown.Item>
                            <NavDropdown.Item href="">챌린지 참여</NavDropdown.Item>
                            <NavDropdown.Item href="">챌린지 인증</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action5">초록불 찾기</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="커뮤니티" id="navbarScrollingDropdown" className="custom-dropdown">
                            <NavDropdown.Item href="">공지사항</NavDropdown.Item>
                            <NavDropdown.Item href="/members/mypage/inquiry">문의센터</NavDropdown.Item>
                            <NavDropdown.Item href="">신고센터</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/*<Form className="d-flex">*/}
                    {/*    <Form.Control*/}
                    {/*        type=""*/}
                    {/*        placeholder="Search"*/}
                    {/*        className="me-2 bg-light"*/}
                    {/*        aria-label="Search"*/}
                    {/*        src="logo192.png"*/}
                    {/*    />*/}
                    {/*    <button style={{background: "none", color: "white", border: "none", marginRight: "10px"}}>*/}
                    {/*        <FaSearch/>*/}
                    {/*    </button>*/}
                    {/*</Form>*/}

                    <button className="iconbtn" style={{color: "white", marginLeft: "5px"}}>
                        <Nav.Link href="/cart">
                            <FaShoppingCart/>
                        </Nav.Link>
                    </button>
                    <button className="iconbtn" style={{color: "white"}}>
                        <Nav.Link href="/wish">
                            <FaHeart/>
                        </Nav.Link>
                    </button>
                    <button className="iconbtn" style={{color: "white", marginRight: "1rem"}}>
                        <FaBell/>
                    </button>
                    { isLogin() ? <AfterLogin/> : <BeforeLogin/> }
                    <LoginModal show={showLoginModal} handleClose={handleLoginModalClose} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
