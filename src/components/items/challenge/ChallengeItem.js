import Card from "react-bootstrap/Card";
import {FaRegHeart} from "react-icons/fa";
import {FaCartPlus} from "react-icons/fa6";
import React from "react";

function ChallengeItem () {

    return (
        <>
            <Card style={{width: '14rem', cursor: 'pointer'}}>
                <Card.Img variant="top" src="/p3.png"/>
                <Card.Body>
                    <Card.Title> 챌린지명
                    </Card.Title>
                    <Card.Text className="mb-0">
                        담당자
                    </Card.Text>
                    <Card.Text className="fs-6 fw-lighter" style={{letterSpacing: '0.1em'}}>
                        진행기간
                    </Card.Text>

                    <div className="card-btn-wrapper">
                        <button className="iconbtn">
                            <FaRegHeart/>
                        </button>
                        <button className="iconbtn">
                            <FaCartPlus/>
                        </button>
                    </div>

                </Card.Body>
            </Card>

        </>
    );
}

export default ChallengeItem;