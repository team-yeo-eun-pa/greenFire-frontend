import {Modal, Tab, Tabs} from "react-bootstrap";
import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

function CustomComponents() {

    // for tab
    const [key, setKey] = useState('home');

    // for modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // for custom modal
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    // for return btn
    const navigate = useNavigate();
    const onClickHandler = () => navigate(-1);


    return (
        <>
            <Container className="mt-5 justify-content-md-center">

                <h1 className="pt-5 border-2 border-bottom">tab left</h1>
                <Tabs
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="home" title="상품정보">
                        내용 1
                    </Tab>
                    <Tab eventKey="profile" title="상세정보">
                        내용 2
                    </Tab>
                    <Tab eventKey="contact" title="상품후기">
                        내용 3
                    </Tab>
                </Tabs>

                <br/>

                <h1 className="pt-5 border-2 border-bottom">tab right</h1>
                <Tabs
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 justify-content-end"
                >
                    <Tab eventKey="home" title="상품정보">
                        내용 1
                    </Tab>
                    <Tab eventKey="profile" title="상세정보">
                        내용 2
                    </Tab>
                    <Tab eventKey="contact" title="상품후기">
                        내용 3
                    </Tab>
                </Tabs>

                <br/>

                <h1 className="pt-5 border-2 border-bottom">Modal</h1>
                <h4>모달 1 : 닫기 버튼 X버튼 중복</h4>
                <h4>모달 2 : 중앙 배치</h4>
                <Button variant="success" onClick={handleShow}>
                    모달버튼
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>수정하시겠습니까?</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>카테고리 이름을 어쩌구로 바꾸시겠습니까?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="success" className="text-white" onClick={handleClose}>
                            확인
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            취소
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Button variant="primary" onClick={handleShow}>
                    모달 열기
                </Button>


                <Modal show={show2} onHide={handleClose2} centered dialogClassName="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>수정하시겠습니까?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>카테고리 이름을 어쩌구로 바꾸시겠습니까?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" className="text-white" onClick={handleClose2}>
                            확인
                        </Button>
                        <Button variant="secondary" onClick={handleClose2}>
                            취소
                        </Button>
                    </Modal.Footer>
                </Modal>

                <h1 className="pt-5 border-2 border-bottom">이전 페이지로 이동 버튼</h1>
                <span onClick={onClickHandler} style={{cursor: 'pointer'}}>
                    〈 이전으로</span>{' '}
            </Container>
        </>
    );
}

export default CustomComponents;