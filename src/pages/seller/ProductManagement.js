import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import ListGroup from "react-bootstrap/ListGroup";
import PagingBar from "../../components/common/PagingBar";
import MystoreProductItem from "../../components/items/MystoreProductItem";
import {useEffect, useState} from "react";
import {callProductListAPI, callSellerProductListAPI} from "../../apis/ProductAPI";
import {useDispatch, useSelector} from "react-redux";

function ProductManagement() {

    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const {products} = useSelector(state => state.productReducer);

    console.log(products);

    useEffect(() => {
        dispatch(callSellerProductListAPI({currentPage}));
    }, [currentPage]);

    // const productName = [
    //     "상품명긴상품명10자이상상품명",
    //     "상품명긴상품명10자이상상품명2",
    //     "상품명3"
    // ];
    //
    // const productPrice = [
    //     10000,
    //     12000,
    //     8000
    // ];
    //
    // const productImg = [
    //     "p1.png",
    //     "p2.png",
    //     "p3.png"
    // ];


    return (
        <div>
            <button className="submit-btn">
                <Nav.Link href="/seller/mystore/regist">
                    상품 등록
                </Nav.Link>
            </button>

            <div className="mystore-product-list">
                {/*{productName.map((productName, index) => (*/}
                {/*    <ListGroup key={productName}>*/}
                {/*        <ListGroup.Item>*/}
                {/*            <MystoreProductItem*/}
                {/*                productName={productName}*/}
                {/*                // productImg={productImg[index]}*/}
                {/*                price={productPrice[index]}*/}
                {/*            />*/}
                {/*        </ListGroup.Item>*/}
                {/*    </ListGroup>*/}
                {/*))}*/}
                {products.data.map((productName, index) => (
                    <ListGroup key={productName}>
                        <ListGroup.Item>
                            <MystoreProductItem
                                productName={products.productName}
                                // productImg={productImg[index]}
                                price={products.price[index]}
                            />
                        </ListGroup.Item>
                    </ListGroup>
                ))}
            </div>

            <PagingBar/>
        </div>
    )
}
export default ProductManagement;