import Nav from "react-bootstrap/Nav";
import {Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import ToCartModal from "./ToCartModal";


function MyStoreCartItem({cart, cartQuantity, setCartQuantity, selectItem, setSelectItem, removeBtn, editBtn}) {

    const imageUrl = cart.productImg ? cart.productImg : '/defaultimg.png';

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);


    const onChangeQuantityHandler = e => {
        setCartQuantity && setCartQuantity({
            ...cartQuantity,
            [e.target.name] : e.target.value

        })
    }

    useEffect(() => {

    }, [selectItem, setSelectItem]);



    console.log(cart);


    return (

        <div className="mystore-product-item">
            <div className="mystore-product-wrapper">
                <div className="mystore-product-img-wrapper">
                    <img className="mystore-product-img" src={imageUrl}/>
                </div>
                <div className="mystore-product-name">
                    {cart.productName}
                </div>

            </div>

            <div className="mystore-option-name">
                {cart.optionName}
            </div>

            <div className="mystore-product-price">
                {cart.optionPrice} 원
            </div>

            <div className="cart-quantity">
                <Form.Control
                    type="number"
                    className="cart-quantity-form"
                    value={cart.cartQuantity}
                    onChange={onChangeQuantityHandler}
                />
            </div>


            <div className="mystore-product-btn-wrapper">
                <button className="option-btn">
                    주문
                </button>
                <button className="option-btn" onClick={() => removeBtn(cart.cartCode)}>삭제</button>
                {/*<button className="option-btn" onClick={() => editBtn(cart.optionCode, cart.cartQuantity)}>수정</button>*/}
                <button className="option-btn" onClick={handleOpenModal}>수정</button>
            </div>

            <ToCartModal open={openModal} handleClose={handleCloseModal}
                         onChangeQuantityHandler={onChangeQuantityHandler}
                         cart={cart}
            />
        </div>
    )
}

export default MyStoreCartItem;