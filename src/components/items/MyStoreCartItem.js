import Nav from "react-bootstrap/Nav";
import {Form} from "react-bootstrap";
import React from "react";


function MyStoreCartItem({cart, cartQuantity, setCartQuantity}) {

    const onChangeQuantityHandler = e => {

    }


    return (
        <div className="mystore-product-item">
            <div className="mystore-product-wrapper">
                <div className="mystore-product-img-wrapper">
                    {/*<img className="mystore-product-img" src={props.product.productImg}/>*/}
                    <img className="mystore-product-img" src="p1.png"/>
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

            <div>
                <Form.Label>수량</Form.Label>
                <Form.Control
                    type="number"
                    value={cart.cartQuantity}
                    onChange={onChangeQuantityHandler}
                />
            </div>



            <div className="mystore-product-btn-wrapper">
                <button className="option-btn">
                    주문
                </button>
                <button className="option-btn">삭제</button>
            </div>
        </div>
    )
}

export default MyStoreCartItem;