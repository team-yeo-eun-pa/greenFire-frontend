import React from 'react';
import { Button } from 'react-bootstrap';

const StatusButton = ({ buttonName, buttonVariant, showButton, onClick }) => {
    if (!showButton) {
        return null;
    } else {
        return (
            <Button variant={buttonVariant} className="btn-md mx-1" onClick={onClick}>
                {buttonName}
            </Button>
        );
    }
};

export default StatusButton;