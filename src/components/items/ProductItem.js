import Card from "react-bootstrap/Card";
import {Tag} from "antd";
import React from "react";

import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";


function ProductItem() {

    return(
        <>
            <Card style={{width: '14rem', cursor: 'pointer'}}>
                <Card.Img variant="top" src="/p1.png"/>
                <Card.Body>
                    <Card.Title>상품명
                    </Card.Title>
                    <Card.Text className="mb-0">
                        판매자명
                    </Card.Text>
                    <Card.Text className="fs-6 fw-lighter" style={{letterSpacing: '0.1em'}}>
                        10000원
                    </Card.Text>

                    <div className="card-btn-wrapper">
                        <button style={{background: "none", border: "none"}}>
                            <FaRegHeart/>
                        </button>
                        <button style={{background: "none", border: "none"}}>
                            <FaCartPlus/>
                        </button>
                    </div>

                </Card.Body>
            </Card>

        </>

    );
}

export default ProductItem;