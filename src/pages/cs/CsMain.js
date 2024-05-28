import UserPageNavBar from "../../components/common/UserPageNavBar";
import ListGroup from "react-bootstrap/ListGroup";
import {Col, Row, Table} from "react-bootstrap";
import CsList from "./CsList";


function CsMain({cs}) {

    return(
        <>
            <Row>



                <Col xs={3} >
                <UserPageNavBar/>
                </Col>

                <Col xs={9}>
            {['xl'].map((breakpoint) => (
                <ListGroup key={breakpoint} horizontal={breakpoint} className="my-5 text-center">
                    <ListGroup.Item className="py-5 w-50 bg-body-tertiary fs-5">등록된 나의 문의
                        <div className="pt-2">
                            <span className="fw-bolder fs-1">0</span>건
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="py-5 w-50 bg-body-tertiary fs-5">답변 등록된 문의
                        <div className="pt-2">
                            <span className="fw-bolder fs-1">0</span>건
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            ))}


                {/* 등록된 문의가 없을 시, "등록된 문의가 없습니다."라는 문구 보여주기*/}


                    <>
                    <CsList cs={cs}/>
                    </>

                </Col>

            </Row>

        </>
    );
}

export default CsMain;