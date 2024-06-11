import {useNavigate} from "react-router-dom";
import {useState} from "react";

function ProductDetailItem({product}) {

    const navigate = useNavigate();
    const [amount, setAmount] = useState(1);

    const onClickOrderBtnHandler = () => {
        // 주문 기능 작성
    }

    return (

        <div>
            <div className="product-img-wrapper">
                <img src={product.productImg} alt={product.productName}/>
            </div>

            <div className="product-info-wrapper">
                <table className="product-info-table">
                    <tbody>
                    <tr>
                        <th>상품명</th>
                        <td>{product.productName}</td>
                    </tr>
                    <tr>
                        <th>판매자</th>
                        <td>{product.storeName}</td>
                    </tr>
                    <tr>
                        <th>분류</th>
                        <td>{product.categoryTitle}</td>
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
            </div>
        </div>

    )
}

export default ProductDetailItem;