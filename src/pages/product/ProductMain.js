import {Col, Dropdown, Row} from "react-bootstrap";
import ArrangeDrop from "../../components/items/common/ArrangeDrop";
import ProductItem from "../../components/items/common/ProductItem";
import PagingBar from "../../components/common/PagingBar";
import StoreBanner from "../../components/items/common/StoreBanner";


function ProductMain() {
    return(
        <div className="store-main-page">

            <div className="store-banner-wrapper">
                <StoreBanner/>
            </div>

            <div className="product-list-top-wrapper">
                <div className="amount-num-wrapper">
                    <p>총 120 개</p>
                </div>
                <div className="arrange-wrapper">
                    <ArrangeDrop/>
                </div>
            </div>

            <div className="product-list-wrapper" style={{marginTop: '15px'}}>
                <Row style={{marginTop: '5px', marginBottom: '10px'}}>
                    <Col>
                        <ProductItem/>
                    </Col>
                    <Col>
                        <ProductItem/>
                    </Col>
                    <Col>
                        <ProductItem/>
                    </Col>
                    <Col>
                        <ProductItem/>
                    </Col>
                    <Col>
                        <ProductItem/>
                    </Col>
                </Row>
                <Row style={{marginTop: '5px', marginBottom: '10px'}}>
                    <Col>
                        <ProductItem/>
                    </Col>
                    <Col>
                        <ProductItem/>
                    </Col>
                    <Col>
                        <ProductItem/>
                    </Col>
                    <Col>
                        <ProductItem/>
                    </Col>
                    <Col>
                        <ProductItem/>
                    </Col>
                </Row>
                <Row style={{marginTop: '5px', marginBottom: '10px'}}>
                    <Col>
                        <ProductItem/>
                    </Col>
                    <Col>
                        <ProductItem/>
                    </Col>
                    <Col>
                        <ProductItem/>
                    </Col>
                    <Col>
                        <ProductItem/>
                    </Col>
                    <Col>
                        <ProductItem/>
                    </Col>
                </Row>
            </div>

            <PagingBar/>
        </div>
    );
}

export default ProductMain;