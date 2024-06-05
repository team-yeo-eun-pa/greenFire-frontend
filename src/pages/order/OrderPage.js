import React from "react";
import { Link } from "react-router-dom";

function OrderPage() {
    return(
        <>
            <h1>OrderPage</h1>
            <Link to="/payment">
            <button>결제하기</button>
            </Link>
        </>
    );
}

export default OrderPage;