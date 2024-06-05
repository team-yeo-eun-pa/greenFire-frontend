import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
// import './PagingBar.css'

function PagingBar({pageInfo, setCurrentPage}) {

    return (
        <div className="pagination-container">
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item >{1}</Pagination.Item>
                <Pagination.Item >{2}</Pagination.Item>
                <Pagination.Item >{3}</Pagination.Item>
                <Pagination.Item >{4}</Pagination.Item>
                <Pagination.Item >{5}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    );
}

export default PagingBar;