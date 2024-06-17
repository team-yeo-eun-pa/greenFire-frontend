import Nav from "react-bootstrap/Nav";
import {callSellerOptionDeleteAPI, callSellerProductDeleteAPI} from "../../apis/ProductAPI";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {success} from "../../modules/ProductModules";
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProductOptionEditModal from "./ProductOptionEditModal";


function ProductOptionEditListItem({option, optionForm, setOptionForm}) {

    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const onClickDeleteBtnHandler = () => {
        dispatch(callSellerOptionDeleteAPI({
            productCode: option.productCode,
            optionCode: option.optionCode,
            optionAppearActivate : "D"
        }));
    }


    const handleClickEditBtn = () => {
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);


    return (
        <div className="option-edit-item">
                <div className="option-edit-name">
                    {option.optionName}
                </div>

            <div className="option-edit-btn-wrapper">
                <button className="option-btn" onClick={handleClickEditBtn}>
                    수정
                </button>
                <button className="option-btn" onClick={onClickDeleteBtnHandler}>
                    삭제
                </button>
            </div>

            <ProductOptionEditModal
                option={option}
                open={openModal}
                handleClose={handleCloseModal}
                optionForm={optionForm}
                setOptionForm={setOptionForm}
            />

        </div>
    )
}

export default ProductOptionEditListItem;