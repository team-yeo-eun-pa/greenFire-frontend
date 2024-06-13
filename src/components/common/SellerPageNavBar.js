import Nav from "react-bootstrap/Nav";
import Image from 'react-bootstrap/Image';
import {useState} from "react";
import {CgProfile} from "react-icons/cg";
import {Link, NavLink} from "react-router-dom";

function SellerPageNavBar() {
    const [key, setKey] = useState('home');
    return (
        <>

            <Nav defaultActiveKey="/home" className="flex-column rounded mt-5 p-4"
                 style={{backgroundColor: "#F0F3EE"}}>
                {/* User Info */}
                {/*<div className="text-center mb-3">*/}
                {/*    {profileInfo.profilePicture ? (*/}
                {/*        <Image*/}
                {/*            src={profileInfo.profilePicture}*/}
                {/*            roundedCircle*/}
                {/*            className="mx-auto d-block mb-3"*/}
                {/*            style={{width: "130px", height: "130px"}}*/}
                {/*        />*/}
                {/*    ) : (*/}
                {/*        <CgProfile style={{width: "130px", height: "130px"}} />*/}
                {/*    )}*/}
                {/*    <br/>*/}
                {/*    <div className="fw-bold fs-6">*/}
                {/*        {profileInfo.memberName}*/}
                {/*    </div>*/}
                {/*    <div className="text-muted">*/}
                {/*        {profileInfo.memberEmail}*/}
                {/*    </div>*/}
                {/*    <NavLink to="/members/mypage/profile">*/}
                {/*        <button className="btn btn-secondary btn-sm mt-2">내 프로필</button>*/}
                {/*    </NavLink>*/}
                {/*</div>*/}
                {/*<hr/>*/}

                {/* Navigation Links */}
                <Nav.Link className="nav-link-custom-title mt-2">마이스토어</Nav.Link>
                <Nav.Link as={Link} to="/members/mypage/profile" className="nav-link-custom">스토어 프로필 관리</Nav.Link>
                <br/>
                <Nav.Link className="nav-link-custom-title">상품 관리</Nav.Link>
                <Nav.Link href="/seller/mystore/product" eventKey="" className="nav-link-custom">스토어 상품 관리</Nav.Link>
                <Nav.Link eventKey="" className="nav-link-custom">재고 관리</Nav.Link>
                <br/>
                <Nav.Link className="nav-link-custom-title">주문 관리</Nav.Link>
                <Nav.Link eventKey="" className="nav-link-custom">주문∙결제 내역</Nav.Link>
                <Nav.Link eventKey="" className="nav-link-custom">신규 주문 내역</Nav.Link>
                <Nav.Link eventKey="" className="nav-link-custom">배송 관리</Nav.Link>
                <Nav.Link eventKey="" className="nav-link-custom">반품∙교환</Nav.Link>
                <Nav.Link eventKey="" className="nav-link-custom">정산 관리</Nav.Link>
                <br/>
                <Nav.Link className="nav-link-custom-title">쿠폰 관리</Nav.Link>
                <Nav.Link eventKey="" className="nav-link-custom">쿠폰 발급</Nav.Link>
                <Nav.Link eventKey="" className="nav-link-custom">쿠폰 내역</Nav.Link>
                <br/>
                <Nav.Link className="nav-link-custom-title">챌린지 관리</Nav.Link>
                <Nav.Link eventKey="" className="nav-link-custom">챌린지 목록</Nav.Link>
                <Nav.Link eventKey="" className="nav-link-custom">챌린지 삭제 내역</Nav.Link>
                <Nav.Link eventKey="" className="nav-link-custom">리워드 관리</Nav.Link>
                <br/>
                <Nav.Link className="nav-link-custom-title">설정 및 기타 내역</Nav.Link>
                <Nav.Link eventKey="" className="nav-link-custom">알림 관리</Nav.Link>
                <Nav.Link eventKey="" className="nav-link-custom">문의 내역</Nav.Link>
            </Nav>
        </>
    );
}

export default SellerPageNavBar;