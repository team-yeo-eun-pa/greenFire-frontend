import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import ListGroup from "react-bootstrap/ListGroup";
import PagingBar from "../../components/common/PagingBar";
import MystoreProductItem from "../../components/items/MystoreProductItem";
import {useEffect, useState} from "react";
import {callProductListAPI, callStoreProductListAPI} from "../../apis/ProductAPI";
import {useDispatch, useSelector} from "react-redux";
import {Col, Row} from "react-bootstrap";
import ProductItem from "../../components/items/ProductItem";

function ProductManagement() {

    const {products} = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(callStoreProductListAPI({currentPage}));
    }, [currentPage]);

    console.log(products);


    return (
        <div>
            <button className="submit-btn">
                <Nav.Link href="/seller/mystore/regist">
                    상품 등록
                </Nav.Link>
            </button>

            <div className="mystore-product-list">
                {productName.map((productName, index) => (
                    <ListGroup key={productName}>
                        <ListGroup.Item>
                                {products.data.map(product => (
                                    <Col key={product.id} style={{marginTop: '5px', marginBottom: '10px'}}>
                                        <MystoreProductItem product={product}/>
                                    </Col>
                                ))}
                        </ListGroup.Item>
                    </ListGroup>
                ))}
            </div>

            <PagingBar/>
        </div>
    )
}
export default ProductManagement;