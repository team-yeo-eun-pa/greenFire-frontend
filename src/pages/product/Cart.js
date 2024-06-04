import {Checkbox, Divider} from "antd";
import {useState} from "react";


const CheckboxGroup = Checkbox.Group;
const cartList = ['상품1', '상품2', '상품3'];
const defaultCheckedList = ['상품1'];



function Cart() {

    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const checkAll = cartList.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < cartList.length;
    const onChangeCheck = (list) => {
        setCheckedList(list);
    };
    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? cartList : []);
    };

    return (
        <>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                전체선택
            </Checkbox>
            <Divider/>
            <div className="cart-list-wrapper">
                <CheckboxGroup className="cart-checkbox" options={cartList} value={checkedList} onChange={onChangeCheck}>

                </CheckboxGroup>
            </div>
        </>
    )
}
export default Cart;