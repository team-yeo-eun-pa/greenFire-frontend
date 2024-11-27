import Card from "react-bootstrap/Card";
import {Tag} from "antd";
import React from "react";

import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import {useNavigate} from "react-router-dom";


function ProductItem({product}) {

    const navigate = useNavigate();
    const imageUrl = product.productImg ? product.productImg : '/defaultimg.png';

    return(
        <div>
            <Card style={{width: '14rem', height: '20rem', cursor: 'pointer'}}
                  onClick={() => navigate(`/product/${product.productCode}`)}>
                <Card.Img variant="top" src={imageUrl} style={{objectFit: 'cover', height: '10rem'}}/>
                <Card.Body>
                    <Card.Title>{product.productName}
                    </Card.Title>
                    <Card.Text className="mb-0">
                        {product.storeName}
                    </Card.Text>
                    <Card.Text className="fs-6 fw-lighter" style={{letterSpacing: '0.1em'}}>
                        {product.price}
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

        </div>

    );
}

export default ProductItem;