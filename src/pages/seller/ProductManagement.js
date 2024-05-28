import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import ListGroup from "react-bootstrap/ListGroup";
import WishItem from "../../components/items/WishItem";
import MystoreProductItem from "./MystoreProductItem";
import PagingBar from "../../components/common/PagingBar";

function ProductManagement() {

    const productName = [
        "상품명긴상품명10자이상상품명",
        "상품명긴상품명10자이상상품명2",
        "상품명3"
    ];

    const productPrice = [
        10000,
        12000,
        8000
    ];

    const productImg = [
        "p1.png",
        "p2.png",
        "p3.png"
    ];


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
                            <MystoreProductItem
                                productName={productName}
                                productImg={productImg[index]}
                                productPrice={productPrice[index]}
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