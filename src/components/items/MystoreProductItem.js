import Nav from "react-bootstrap/Nav";
import {callSellerProductDeleteAPI} from "../../apis/ProductAPI";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {success} from "../../modules/ProductModules";
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function MystoreProductItem({product}) {

    const dispatch = useDispatch();
    const productCode = product.productCode;
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const onClickDeleteBtnHandler = () => {
        dispatch(callSellerProductDeleteAPI({productCode, sellablestatus : "D"}));
    }
    const imageUrl = product.productImg ? product.productImg : '/defaultimg.png';


    useEffect(() => {
        if(success === true) navigate('/seller/mystore/product');
    }, [success])

    const handleClickEditBtn = () => {
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    const navigateToEditPage = (path) => {
        handleClose();
        navigate(path);
    };

    return (
        <div className="mystore-product-item">
            <div className="mystore-product-wrapper">
                <div className="mystore-product-img-wrapper">
                    <img className="mystore-product-img" src={imageUrl}/>
                </div>
                <div className="mystore-product-name">
                    {product.productName}
                </div>
            </div>

            <div className="mystore-product-price">
                {product.price} 원
            </div>

            <div className="mystore-product-btn-wrapper">
                <button className="option-btn" onClick={handleClickEditBtn}>
                    수정
                </button>
                <button className="option-btn" onClick={onClickDeleteBtnHandler}>
                    삭제
                </button>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                    <Button variant="primary" onClick={() => navigateToEditPage(`/seller/mystore/edit/${product.productCode}`)}>
                        상품 정보 수정
                    </Button>
                    <Button variant="secondary" onClick={() => navigateToEditPage(`/seller/mystore/editOption/${product.productCode}`)}>
                        상품 옵션 수정
                    </Button>
            </Modal>
        </div>
    )
}

export default MystoreProductItem;