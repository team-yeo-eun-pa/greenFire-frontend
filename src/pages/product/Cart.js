import {Checkbox, Divider} from "antd";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import {Col} from "react-bootstrap";
import MystoreProductItem from "../../components/items/MystoreProductItem";
import {callSellerProductListAPI} from "../../apis/ProductAPI";
import {callCartAPI} from "../../apis/CartAPI";
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

    return (
        <>
            {/*<Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>*/}
            {/*    전체선택*/}
            {/*</Checkbox>*/}
            <Divider/>
            <div className="cart-list-wrapper">
                <CheckboxGroup className="cart-checkbox" options={cartList} value={checkedList} onChange={onChangeCheck}>

                    <div className="mystore-product-list">
                    {cart && cart.length > 0 ? (
                        <ListGroup>

                            {cart.map(cart => (
                                <Col key={cart.cartCode} style={{marginTop: '5px', marginBottom: '10px'}}>
                                    <MyStoreCartItem cart={cart} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity}/>
                                </Col>
                            ))}
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