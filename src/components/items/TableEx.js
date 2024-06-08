import React from 'react';
import { Table } from 'react-bootstrap';
import '../../style.css'; // CSS 파일 임포트

function TableEx({ headers, rows, onRowClick }) {
    return (
        <Table hover className="table text-center px-5 mt-4">
            <thead className="border-2 border-bottom border-top border-secondary-subtle border-start-0 border-end-0">
            <tr>
                {headers.map((header, index) => (
                    <th key={index} className="text-center">{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {rows.map((row, index) => (
                <tr key={index} onClick={() => onRowClick && onRowClick(index)}>
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="text-center">{cell}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default TableEx;
