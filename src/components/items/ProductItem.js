import Card from "react-bootstrap/Card";
import {Tag} from "antd";
import React from "react";

import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";


function ProductItem(props) {

    return(
        <>
            <Card style={{width: '14rem', cursor: 'pointer'}}>
                <Card.Img variant="top" src="/p1.png"/>
                <Card.Body>
                    <Card.Title>{props.product.productName}
                    </Card.Title>
                    <Card.Text className="mb-0">
                        {props.product.storeCode}
                    </Card.Text>
                    <Card.Text className="fs-6 fw-lighter" style={{letterSpacing: '0.1em'}}>
                        {props.product.storeCode}
                    </Card.Text>

                    <div className="card-btn-wrapper">
                        <button className="iconbtn">
                            <FaRegHeart/>
                        </button>
                        <button className="iconbtn">
                            <FaCartPlus/>
                        </button>
                    </div>

                </Card.Body>
            </Card>

        </>

    );
}

export default ProductItem;