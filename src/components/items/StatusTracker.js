import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import './StatusTracker.css'; // 스타일을 위한 CSS 파일 import

function StatusTracker({ statuses }) {
    return (
        <Container className="status-tracker-container">
            <Row className="mt-2 mb-2 justify-content-center">
                {statuses.map((status, index) => (
                    <React.Fragment key={index}>
                        <Col className="text-center">
                            <div>{status.name}</div>
                            <div className="status-count">{status.count}</div>
                        </Col>
                        {index < statuses.length - 1 && (
                            <Col md="auto" className="text-center">
                                <div className="arrow">{'>'}</div>
                            </Col>
                        )}
                    </React.Fragment>
                ))}
            </Row>
        </Container>
    );
}

export default StatusTracker;