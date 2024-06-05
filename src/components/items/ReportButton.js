import { Button } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate를 import

function ReportButton() {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleReportClick = () => {
        // 신고하기 버튼을 클릭하면 ReportPage로 이동
        navigate("/members/mypage/report"); // 이동할 페이지 경로 지정
    };

    return(
        <>
            <Button variant="success" onClick={handleReportClick}>신고하기</Button>
        </>
    )
}

export default ReportButton;
