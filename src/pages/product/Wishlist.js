import ListGroup from "react-bootstrap/ListGroup";
import WishItem from "../../components/items/WishItem";
import {useRef, useState} from "react";
import ToCartModal from "../../components/items/ToCartModal";

function Wishlist() {

    const [openModal, setOpenModal] = useState(false);

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

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);


    return (
        <div>
            {productName.map((productName, index) => (
                <ListGroup key={productName}>
                    <ListGroup.Item>
                        <WishItem
                            productName={productName}
                            productImg={productImg[index]}
                            productPrice={productPrice[index]}
                            onOpenModal={handleOpenModal}
                        />
                    </ListGroup.Item>
                </ListGroup>
            ))}
            <ToCartModal open={openModal} handleClose={handleCloseModal}/>

        </div>
    )
}
export default Wishlist;
