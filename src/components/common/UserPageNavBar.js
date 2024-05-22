import Nav from "react-bootstrap/Nav";
import {useState} from "react";
import Image from 'react-bootstrap/Image';

function UserPageNavBar() {
    const [key, setKey] = useState('home');
    return (
        <>
            <Nav defaultActiveKey="/home" className="flex-column rounded mt-5 p-4"
                 style={{backgroundColor: "#F0F3EE"}}>
                {/* User Info */}
                <div className="text-center mb-3">
                    <Image
                        src="holder.js/171x180"
                        roundedCircle
                        className="mx-auto d-block mb-3"
                        style={{width: "130px", height: "130px"}} // Increased size
                    />
                    <br/>
                    <div className="fw-bold">여운파</div>
                    <div className="text-muted">YEP1234@gmail.com</div>
                    <button className="btn btn-secondary btn-sm mt-2">내 프로필</button>
                </div>
                <hr/>

                {/* Navigation Links */}
                <Nav.Link className="nav-link-custom-title">초록불 챌린지</Nav.Link>
                <Nav.Link eventKey="myChallenges" className="nav-link-custom">나의 챌린지</Nav.Link>
                <Nav.Link eventKey="myCertifications" className="nav-link-custom">나의 인증</Nav.Link>
                <br/>
                <Nav.Link className="nav-link-custom-title">반딧불이 스토어</Nav.Link>
                <Nav.Link eventKey="orders" className="nav-link-custom">주문∙배송</Nav.Link>
                <Nav.Link eventKey="coupons" className="nav-link-custom">쿠폰</Nav.Link>
                <Nav.Link eventKey="wishlist" className="nav-link-custom">찜한 상품</Nav.Link>
                <Nav.Link eventKey="reviews" className="nav-link-custom">내가 쓴 리뷰</Nav.Link>
                <Nav.Link eventKey="applyStore" className="nav-link-custom">입점 신청하기</Nav.Link>
                <br/>
                <Nav.Link className="nav-link-custom-title">설정 및 기타내역</Nav.Link>
                <Nav.Link eventKey="notifications" className="nav-link-custom">알림 설정</Nav.Link>
                <Nav.Link eventKey="inquiries" className="nav-link-custom">1:1 문의 내역</Nav.Link>
                <Nav.Link eventKey="storeInquiries" className="nav-link-custom">스토어 문의 내역</Nav.Link>
            </Nav>
        </>
    );
}

export default UserPageNavBar;