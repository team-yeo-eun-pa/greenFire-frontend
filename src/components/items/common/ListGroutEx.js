import ListGroup from 'react-bootstrap/ListGroup';

function ListGroupEx() {
    return (
        <>
            {['xl'].map((breakpoint) => (
                <ListGroup key={breakpoint} horizontal={breakpoint} className="my-5 text-center">
                    <ListGroup.Item className="py-5 w-50 bg-body-tertiary fs-5">신규 입점 신청
                        <div className="pt-2">
                            <span className="fw-bolder fs-1">3</span>건
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="py-5 w-50 bg-body-tertiary fs-5">전체 입점 스토어
                        <div className="pt-2">
                            <span className="fw-bolder fs-1">120</span>업체
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            ))}
        </>
    );
}

export default ListGroupEx;