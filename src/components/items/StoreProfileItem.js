import React from 'react';
import {Col, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {PiStorefrontLight} from "react-icons/pi";
import Image from "react-bootstrap/Image";

function StoreProfileItem({ store }) {
    return (
        <>
            {/*<Container className="mt-5" style={{marginBottom: "100px"}}>*/}
                    <Card
                        className=""
                        key={store.storeCode}>

                        <Card.Title
                            className="d-flex justify-content-center py-2 m-3"
                        >

                            {store.profilePicture ? (
                                <Image
                                    src={store.profilePicture}
                                    roundedCircle
                                    className="mx-auto d-block mb-3"
                                    style={{width: "130px", height: "130px"}}
                                />
                            ) : (
                                <PiStorefrontLight style={{width: "130px", height: "130px"}} />
                            )}</Card.Title>
                        <Card.Body className="text-center">
                            <Card.Title>{store.storeName}</Card.Title>
                            <Card.Text>
                                대표자: {store.storeRepresentativeName}<br/>
                                상태: {store.storeStatus}
                            </Card.Text>
                            <Button
                                variant="outline-success"
                                // onClick={() => navigate('/')}
                            >스토어 바로가기</Button>
                        </Card.Body>
                    </Card>

            {/*</Container>*/}
        </>
    );
}

export default StoreProfileItem;
