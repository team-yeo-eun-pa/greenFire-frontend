import * as pageNumber from "react-bootstrap/ElementChildren";

function PagingBar({pageInfo, setCurrentPage}) {

    const pageNumber = [];
    for(let i = pageInfo.startPage; 1<= pageInfo.endPage; i++) {
        pageNumber.push(i);
    }

    return (
        <ul>
            <li>
                <button

                    disabled={pageInfo.currentPage <= 1}
                    onClick={() => setCurrentPage(pageInfo.currentPage - 1)}
                >
                    &lt;
                </button>
            </li>
            {
                pageNumber.map(
                    num =>
                        <li key={num}>
                            <button

                                style={pageInfo.currentPage === num ? {backgroundColor: 'orange'} : null}
                                disabled={pageInfo.currentPage === num}
                                onClick={() => setCurrentPage(num)}
                            >
                                {num}
                            </button>
                        </li>
                )
            }
            <li>
                <button

                    disabled={pageInfo.currentPage >= pageInfo.maxPage}
                    onClick={() => setCurrentPage(pageInfo.currentPage + 1)}
                >
                    &gt;
                </button>
            </li>
        </ul>
    );
}

export default PagingBar;