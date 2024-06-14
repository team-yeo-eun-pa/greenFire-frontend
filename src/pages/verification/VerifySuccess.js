import {useNavigate, useParams} from 'react-router-dom';
import SuccessPage from "../../components/items/SuccessPage";
import LoginModal from "../../components/items/LoginModal";
import {useState} from "react";

function VerifySuccess() {
    const { result } = useParams();
    const navigate = useNavigate();
    const [showLoginModal, setShowLoginModal] = useState(false); // 모달 상태 추가

    const handleMainClick = () => {
        navigate('/');
    };

    const handleLoginClick = () => {
        setShowLoginModal(true); // 로그인 버튼 클릭 시 모달 표시
    };

    const handleLoginModalClose = () => {
        setShowLoginModal(false); // 모달 닫기 함수
    };

    if (result === 'success') {
        return (
            <SuccessPage
                title="이메일 인증이 완료되었습니다."
                subtitle="이제 로그인하실 수 있습니다."
                btnText1="로그인"
                btnText2="메인으로"
                onBtnClick1={handleLoginClick}
                onBtnClick2={handleMainClick}
            />
        );
    }

    if (result === 'expired') {
        return (
            <SuccessPage
                title="인증코드가 만료되었습니다."
                subtitle="다시 시도해 주세요."
                btnText2="메인으로"
                onBtnClick2={handleMainClick}
            />
        );
    }

    if (result === 'verified') {
        return (
            <>
            <SuccessPage
                title="이미 인증이 완료된 코드입니다."
                subtitle="로그인 페이지로 이동해 주세요."
                btnText1="로그인"
                onBtnClick1={handleLoginClick}
            />
            <LoginModal show={showLoginModal} handleClose={handleLoginModalClose} />
            </>
        );
    }

    if (result === 'error') {
        return (
            <SuccessPage
                title="인증 실패"
                subtitle="인증코드가 다르거나 만료되었습니다."
                btnText2="메인으로"
                onBtnClick2={handleMainClick}
            />
        );
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            로딩 중...
        </div>
    );
}

export default VerifySuccess;
