// import {Col, Row, Tab, Tabs} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image';
// import TableEx from "../items/TableEx";
// import ListGroutEx from "../items/ListGroutEx";
import {useState} from "react";

function SellerPageNavBar() {
    const [key, setKey] = useState('home');
    return (
        <>

            <Nav defaultActiveKey="/home" className="flex-column rounded mt-5 p-4"
                 style={{backgroundColor: "#F0F3EE"}}>

                <div className="d-flex flex-column align-items-center">
                    <div className="m-4">
                        <Image src="https://resource.miricanvas.com/image/argo/argo_huk.svg"
                               className="p-2 mb-1 justify-content-center" width={100} height={100}
                               roundedCircle/>
                    </div>
                    <div className="m-1 text-center">
                        <strong>
                            배지가든
                        </strong>
                    </div>
                    <div className="text-center">
                        <span>YEP1234@gmail.com<br/></span>
                    </div>
                    <Button variant="secondary" type="submit" className="w-115 m-3">
                        스토어 프로필
                    </Button>
                </div>

                <Nav.Link className="nav-link-custom-title mt-5">상품 관리</Nav.Link>
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