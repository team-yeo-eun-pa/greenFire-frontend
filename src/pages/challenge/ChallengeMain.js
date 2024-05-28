import StoreBanner from "../../components/items/StoreBanner";
import ArrangeDrop from "../../components/items/ArrangeDrop";
import {Col, Row} from "react-bootstrap";
import ProductItem from "../../components/items/ProductItem";
import PagingBar from "../../components/common/PagingBar";
import ChallengeItem from "../../components/items/ChallengeItem";

function ChallengeMain() {
    return (
        <div className="store-main-page">

            <div className="store-banner-wrapper">
                <StoreBanner/>
            </div>

            <div className="product-list-top-wrapper">
                <div className="amount-num-wrapper">
                    <p>총 등록 챌린지 50개</p>
                </div>
                <div className="arrange-wrapper">
                    <ArrangeDrop/>
                </div>
            </div>

            <div className="product-list-wrapper" style={{marginTop: '15px'}}>
                <Row style={{marginTop: '5px', marginBottom: '10px'}}>

                    <Row style={{marginBottom:'20px'}}>최근 등록 챌린지</Row>
                    <Col>
                        <ChallengeItem/>
                    </Col>
                    <Col>
                        <ChallengeItem/>
                    </Col>
                    <Col>
                        <ChallengeItem/>
                    </Col>
                    <Col>
                        <ChallengeItem/>
                    </Col>
                    <Col>
                        <ChallengeItem/>
                    </Col>
                </Row>
                <Row style={{marginTop: '5px', marginBottom: '10px'}}>

                    <Row style={{marginBottom:'20px'}}>인기 많은  챌린지</Row>
                    <Col>
                        <ChallengeItem/>
                    </Col>
                    <Col>
                        <ChallengeItem/>
                    </Col>
                    <Col>
                        <ChallengeItem/>
                    </Col>
                    <Col>
                        <ChallengeItem/>
                    </Col>
                    <Col>
                        <ChallengeItem/>
                    </Col>
                </Row>
                <Row style={{marginTop: '5px', marginBottom: '10px'}}>

                    <Row style={{marginBottom:'20px'}}>우리 동네 챌린지</Row>
                    <Col>
                        <ChallengeItem/>
                    </Col>
                    <Col>
                        <ChallengeItem/>
                    </Col>
                    <Col>
                        <ChallengeItem/>
                    </Col>
                    <Col>
                        <ChallengeItem/>
                    </Col>
                    <Col>
                        <ChallengeItem/>
                    </Col>
                </Row>
            </div>

            <PagingBar/>
        </div>
    );
}

export default ChallengeMain;