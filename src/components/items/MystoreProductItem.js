import Nav from "react-bootstrap/Nav";
import {callSellerProductDeleteAPI} from "../../apis/ProductAPI";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {success} from "../../modules/ProductModules";
import {useNavigate} from "react-router-dom";


function MystoreProductItem({product}) {

    const dispatch = useDispatch();
    const productCode = product.productCode;
    const navigate = useNavigate();
    const onClickDeleteBtnHandler = () => {
        dispatch(callSellerProductDeleteAPI({productCode, sellablestatus : "D"}));
    }

    useEffect(() => {
        if(success === true) navigate('/seller/mystore/product');
    }, [success])

    return (
        <div className="mystore-product-item">
            <div className="mystore-product-wrapper">
                <div className="mystore-product-img-wrapper">
                    <img className="mystore-product-img" src={product.productImage}/>
                </div>
                <div className="mystore-product-name">
                    {product.productName}
                </div>
            </div>

            <div className="mystore-product-price">
                {product.price} 원
            </div>

            <div className="mystore-product-btn-wrapper">
                <button className="option-btn" onClick={()=>navigate(`/seller/mystore/edit/${product.productCode}`)}>
                        수정
                </button>
                <button className="option-btn" onClick={onClickDeleteBtnHandler}>
                        삭제
                </button>
            </div>
        </div>
    )
}

export default MystoreProductItem;