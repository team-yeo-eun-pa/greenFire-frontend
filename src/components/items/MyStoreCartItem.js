import Nav from "react-bootstrap/Nav";


function MyStoreCartItem({cart}) {



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
                <div className="mystore-option-name">
                    {cart.optionName}
                </div>
            </div>

            <div className="mystore-product-price">
                {cart.optionPrice} 원
            </div>

            <div className="mystore-product-btn-wrapper">
                <button className="option-btn">
                    {/*<Nav.Link href="/seller/mystore/edit">*/}
                    {/*    수정*/}
                    {/*</Nav.Link>*/}
                </button>
                {/*<button className="option-btn">삭제</button>*/}
            </div>
        </div>
    )
}

export default MyStoreCartItem;