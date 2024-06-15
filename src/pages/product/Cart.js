import {Checkbox, Divider} from "antd";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import {Col, Table} from "react-bootstrap";
import MystoreProductItem from "../../components/items/MystoreProductItem";
import {callSellerProductListAPI} from "../../apis/ProductAPI";
import {callAddCartAPI, callCartAPI, callEditCartAPI, callRemoveCartAPI} from "../../apis/CartAPI";
import MyStoreCartItem from "../../components/items/MyStoreCartItem";

function Cart() {


    const CheckboxGroup = Checkbox.Group;
    const cartList = [];
    const defaultCheckedList = [];

    const dispatch = useDispatch();
    const {cart} = useSelector(state => state.cartReducer);

    const [cartQuantity, setCartQuantity] = useState();

    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    // const checkAll = lecartList.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < cartList.length;

    useEffect(() => {
        dispatch(callCartAPI());
    }, []);

    const onChangeCheck = (list) => {
        setCheckedList(list);
    };
    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? cartList : []);
    };

    const onClickRemoveHandler = (cartCode) => {
        dispatch(callRemoveCartAPI({cartCode}));
    };


    const onClickEditHandler = (optionCode, amount) => {
        const cartData = new FormData();

        cartData.append('cartItemRequest', optionCode);

        dispatch(callEditCartAPI({ cartItemRequest: cartData }));
    };

    return (
        <>
            {/*<Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>*/}
            {/*    전체선택*/}
            {/*</Checkbox>*/}
            <Divider/>
            <div className="cart-list-wrapper">
                <CheckboxGroup className="cart-checkbox" options={cartList} value={checkedList} onChange={onChangeCheck}>

                    <div className="mystore-cart-list">
                    {cart && cart.length > 0 ? (

                        <ListGroup>

                            <div className="cart-header">
                                <p>상품명</p>
                                <p style={{marginLeft: "17em"}}>옵션</p>
                                <p>가격</p>
                                <p>수량</p>
                            </div>

                            <div>
                                    {cart.map(cartittem => (
                                        <Col key={cartittem.cartCode} style={{marginTop: '5px', marginBottom: '10px'}}>
                                            <MyStoreCartItem cart={cartittem}
                                                             cartQuantity={cartQuantity}
                                                             setCartQuantity={setCartQuantity}
                                                             removeBtn={onClickRemoveHandler}
                                                             editBtn={onClickEditHandler}
                                            />
                                        </Col>
                                    ))}
                            </div>
                        </ListGroup>
                    ) : (
                        <p>장바구니에 담긴 상품이 없습니다.</p>
                    )}

                    </div>
                </CheckboxGroup>
            </div>
        </>
    )
}

export default Cart;