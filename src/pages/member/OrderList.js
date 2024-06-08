import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callOrdersAPI} from "../../apis/OrderAPICalls";
import TableEx from "../../components/items/TableEx";
import Order from "../../components/items/Order";

function OrderList() {

    const dispatch = useDispatch();
    const [currentPage,setCurrentPage] = useState(1);
    const orders = useSelector(state => state.orderReducer.orders) || [];

    useEffect(() => {
        dispatch(callOrdersAPI({currentPage}));
    }, [currentPage]);

    const headers = [
        '주문 번호', '주문 번호', '주문 이름', '주문 날짜'
    ];

    const rows = orders.data.map((order, index) => [
        index + 1,
        order.orderCode,
        order.orderName,
        order.orderDate,
    ]);

    // const orderData = orders.data

    return(
        orders &&
        <>
            <h1>OrderListPage</h1>
            <TableEx headers={headers} rows={rows} />

                {/*<OrderList*/}
                {/*    orders={order.orders}*/}
                {/*    orderCode={order.orderCode}*/}
                {/*    orderDate={order.orderDate}*/}
                {/*/>*/}

            {/*<Order orderData={orderData} />*/}

        </>
    );
}

export default OrderList;