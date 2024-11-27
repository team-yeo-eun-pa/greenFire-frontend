import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {callProductDetailAPI, callSellerProductRegistAPI} from "../../apis/ProductAPI";
import ProductDetailItem from "../../components/items/ProductDetailItem";
import {callAddCartAPI} from "../../apis/CartAPI";

function ProductDetail() {

    const dispatch = useDispatch();
    const { productCode} = useParams();
    const { product } = useSelector(state => state.productReducer);


    useEffect(() => {
        dispatch(callProductDetailAPI({productCode}));
    }, []);

    const [amount, setAmount] = useState(1);
    const [selectOption, setSelectOption] = useState('');



    const onClickCartBtnHandler = () => {
        const cartData = new FormData();

            // cartData.append('optionCode', new Blob([JSON.stringify(selectOption)], { type : 'application/json'}));
            // cartData.append('cartQuantity', new Blob([JSON.stringify(amount)], { type : 'application/json'}));

            cartData.append('optionCode', selectOption);
            cartData.append('cartQuantity', amount);

        dispatch(callAddCartAPI({ cartItemRequest: cartData }));
    }

    return (
        <>
            {
                product &&
                    <div>
                        <ProductDetailItem product={product.productInfo} option={product.productOptions}
                                           selectOption={selectOption} setSelectOption={setSelectOption}
                                           amount={amount} setAmount={setAmount} cartBtn={onClickCartBtnHandler}/>
                    </div>
            }
        </>
    );
}

export default ProductDetail;