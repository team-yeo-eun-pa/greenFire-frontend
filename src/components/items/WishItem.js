import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import {useRef, useState} from "react";
import ToCartModal from "./ToCartModal";

function WishItem(props) {

    const [modalOpen, setModalOpen] = useState(false);
    const modalOut = useRef();

    return (
        <div className="wish-item">

            <div className="wish-product-wrapper">
                <div className="wish-img-wrapper">
                    <img className="wish-img" src={props.productImg}/>
                </div>
                <div className="wish-name">
                    {props.productName}
                </div>
            </div>

            <div className="wish-price">
                {props.productPrice} 원
            </div>

            <div className="wish-btn-wrapper">
                <button className="iconbtn">
                    <FaHeart/>
                </button>
                {/*<button className="iconbtn" onClick={() => setModalOpen(true)}>*/}
                <button className="iconbtn" onClick={props.onOpenModal}>
                    <FaCartPlus/>
                </button>
            </div>

        </div>
    )
}

export default WishItem;