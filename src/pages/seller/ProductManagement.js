import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

function ProductManagement() {

    return (
        <div>
            <Button>
                <Nav.Link href="/seller/mystore/regist">
                    상품 등록
                </Nav.Link>
            </Button>
        </div>
    )
}
export default ProductManagement;