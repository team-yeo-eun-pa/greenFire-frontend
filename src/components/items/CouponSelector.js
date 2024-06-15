import React from 'react';
import { Form, Card } from 'react-bootstrap';

function CouponSelector() {
    return (
        <Card className=" border-0">
            <div className="mt-4 fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">쿠폰</div>
            <Card.Body>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control as="select" className="custom-select">
                        <option value="">사용하실 수 있는 쿠폰이 없습니다.</option>
                        {/*<option value="coupon1">쿠폰1</option>*/}
                        {/*<option value="coupon2">쿠폰2</option>*/}
                    </Form.Control>
                </Form.Group>
            </Card.Body>
        </Card>
    );
}

export default CouponSelector;