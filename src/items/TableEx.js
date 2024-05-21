import {Table} from "react-bootstrap";

function TableEx() {
    return (
        <Table hover className="table px-5 mt-4">
            <thead className="border-2 border-bottom border-top border-secondary-subtle border-start-0 border-end-0">
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>신청일</th>
            </tr>
            </thead>

            {/*tbody 안 내용은 각자 조회 기능에 맞게 재작성*/}
            <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
            </tr>
            </tbody>
            {/*tbody 안 내용은 각자 조회 기능에 맞게 재작성*/}
        </Table>
    );
}

export default TableEx;