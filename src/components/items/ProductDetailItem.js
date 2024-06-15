import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {Form, Tab, Tabs} from "react-bootstrap";
import Reviews from "../../pages/Reviews";

function ProductDetailItem(props) {

    const navigate = useNavigate();
    const [amount, setAmount] = useState(1);
    const imageUrl = props.product.productImg ? props.product.productImg : '/defaultimg.png';

    const onClickOrderBtnHandler = () => {
        // 주문 기능 작성
    }

    const onChangeHandler = e => {
        props.setSelectOption && props.setSelectOption({
            ...props.selectOption,
            [e.target.name] : e.target.value

        })
    }

    const [activeTab, setActiveTab] = useState('description'); // 초기값으로 description 탭을 활성화


    return (


        <div className="product-detail-page">


            <div className="product-detail-info-wrapper">
                <div className="product-img-wrapper">
                    <img className="product-detail-img" src={imageUrl} alt={props.product.productName}/>
                </div>

                <div className="product-info-wrapper">
                    <table>
                        <tbody className="product-info-table">
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
                            <th>수량</th>
                            <td>
                                <input
                                    type="number"
                                    min="1"
                                    value={amount}
                                    onChange={e => setAmount(e.target.value)}
                                    style={{width: '90px'}}
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <Form.Group style={{marginTop: '5px'}}>
                        <Form.Label>옵션</Form.Label>
                        <Form.Select name="optionCode" value={props.option.optionCode} onChange={onChangeHandler}
                                     style={{width: '250px'}}>
                            {props.option.map(op => (
                                <option key={op.optionCode} value={op.optionCode}>
                                    {op.optionName} | 가격: {op.optionPrice}
                                </option>
                            ))
                            }
                        </Form.Select>
                    </Form.Group>


                    <div className="product-detail-btn-wrapper">
                        <button className="submit-btn" onClick={onClickOrderBtnHandler}>구매하기</button>
                        <button className="submit-btn" onClick={onClickOrderBtnHandler}>장바구니</button>
                    </div>

                </div>
            </div>




            <Tabs className="product-detail-tabs" defaultActiveKey="description">
                <Tab title="상품 설명" eventKey="description">
                    {props.product.productDescription}
                </Tab>
                <Tab title="상품 리뷰" eventKey="review">
                    <Reviews productCode={props.product.productCode} />
                </Tab>
            </Tabs>



        </div>

    )
}

export default ProductDetailItem;