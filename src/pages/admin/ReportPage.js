import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'; // 신고 대상 사용자 ID를 가져오기 위해 useLocation 훅을 사용
import { ReportAPICalls } from '../../apis/ReportAPICalls';

const ReportPage = () => {
    const [reportReason, setReportDetails] = useState('');
    const [screenshots, setScreenshots] = useState([]);
    const dispatch = useDispatch();
    const location = useLocation();
    // const { memberId } = location.state;
    const memberCode = 4;

    const handleReportDetailsChange = (e) => {
        setReportDetails(e.target.value);
    };

    const handleFileUpload = (e) => {
        setScreenshots([...e.target.files]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 필요한 폼 데이터를 생성합니다.
        const formData = new FormData();
        formData.append('reportReason', reportReason);
        screenshots.forEach((file, index) => {
            formData.append(`screenshot${index}`, file);
        });

        // API 호출을 디스패치합니다.
        await dispatch(ReportAPICalls({ memberCode: memberCode }));

        // 신고 완료 후 사용자에게 알림을 주거나 다른 페이지로 이동할 수 있습니다.
        alert('신고가 접수되었습니다.');
    };

    return (
        <div className="report-page">
            <h2>신고하기</h2>
            <p>
                해당 사용자 또는 스토어를 신고하는 사유를 선택해주세요. (다중 선택 가능)
                신고 사유와 상세 사항을 남겨주시면 초록팀에서 확인 후 알맞은 조치를 취해요.
                동일인에 대한 중복신고는 한달에 최대 2회까지 가능하니 참고해주세요.
                자세한 신고 규정은 신고 규정과 정책을 확인 부탁드려요.
            </p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="reportDetails">신고 사유 관련 상세 사항을 남겨주세요.</label>
                    <textarea
                        id="reportDetails"
                        value={reportReason}
                        onChange={handleReportDetailsChange}
                        maxLength="50"
                        placeholder="최대 20~50글자"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="screenshots">스크린샷을 업로드 해주세요 (최대 50mb, 9개)</label>
                    <input
                        type="file"
                        id="screenshots"
                        multiple
                        accept="image/*"
                        onChange={handleFileUpload}
                    />
                </div>

                <div className="form-actions">
                    <button type="button" onClick={() => window.history.back()}>취소하기</button>
                    <button type="submit">신고하기</button>
                </div>
            </form>
        </div>
    );
};

export default ReportPage;
