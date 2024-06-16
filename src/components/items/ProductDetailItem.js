import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {Form} from "react-bootstrap";

function ProductDetailItem(props) {

    const navigate = useNavigate();
    const [amount, setAmount] = useState(1);
    const imageUrl = props.product.productImg ? props.product.productImg : '/defaultimg.png';

    const [selectOption, setSelectOption] = useState(props.option[0].optionCode);

    const onClickOrderBtnHandler = () => {
        const productData = {
            // product: props.product.option.find(op => op.optionCode === selectOption),
            product: props.product,
            option: props.option.find(op => op.optionCode === selectOption),
            amount
        };

        navigate('/order', { state: { productData } });
    }

    const onChangeHandler = e => {
        setSelectOption(e.target.value);
    }

    return (

        <div>
            <div className="product-img-wrapper">
                <img src={props.product.productImg} alt={props.product.productName}/>
            </div>

            <div className="product-info-wrapper">
                <table className="product-info-table">
                    <tbody>
                    <tr>
                        <th>상품명</th>
                        <td>{props.product.productName}</td>
                    </tr>
                    <tr>
                        <th>판매자</th>
                        <td>{props.product.storeName}</td>
                    </tr>
                    <tr>
                        <th>분류</th>
                        <td>{props.product.categoryTitle}</td>
                    </tr>
                    <tr>
                        <th>구매 수량</th>
                        <td>
                            <input
                                type="number"
                                min="1"
                                value={amount}
                                onChange={e => setAmount(e.target.value)}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>

                <Form.Group>
                    <Form.Label>옵션</Form.Label>
                    //1sol
                    <Form.Select name="optionCode" onChange={onChangeHandler}>
                        //end
                        {props.option.map(op => (
                            <option key={op.optionCode} value={op.optionCode}>
                                {op.optionName} | 가격: {op.optionPrice}
                            </option>
                        ))
                        }
                    </Form.Select>
                </Form.Group>


                <button onClick={onClickOrderBtnHandler}>구매</button>
            </div>
        </div>

    )
}

export default ProductDetailItem;