import { Button } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";

function ReportButton({ memberCode }) {
    const navigate = useNavigate();

    const handleReportClick = () => {
        navigate("/members/mypage/report", { state: { memberCode } });
    };

    return (
        <>
            <Button variant="success" onClick={handleReportClick}>신고하기</Button>
        </>
    );
}

export default ReportButton;
