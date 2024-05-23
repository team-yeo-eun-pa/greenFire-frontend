import {Checkbox, Divider} from "antd";
import {useState} from "react";


const CheckboxGroup = Checkbox.Group;
const plainOptions = ['상품1', '상품2', '상품3'];
const defaultCheckedList = ['상품1'];


function Cart() {

    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const checkAll = plainOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;
    const onChangeCheck = (list) => {
        setCheckedList(list);
    };
    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
    };

    return (
        <>

            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                전체선택
            </Checkbox>
            <Divider/>
            <div className="cart-list-wrapper">
                <CheckboxGroup className="cart-checkbox" options={plainOptions} value={checkedList} onChange={onChangeCheck}/>
            </div>
        </>
    )
}
export default Cart;