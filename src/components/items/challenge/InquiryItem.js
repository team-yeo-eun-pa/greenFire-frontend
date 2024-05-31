import {useNavigate} from "react-router-dom";

function InquiryItem ({inquiry}) {

    const navigate = useNavigate();



    //문의 등록 버튼

    const onClickInquiryRegistHandeler = () => {
        navigate(`/member/inquiry/regist`);
    }

    //뒤로가기 버튼

    const onClickMoveMainHandler = () => {
        navigate(`/`);
    }

    return (
        <>
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th> 문의 코드</th>
                        <td> {inquiry.inquiryCode}</td>
                    </tr>
                    <tr>
                        <th> 문의 제목</th>
                        <td> {inquiry.inquiryTitle}</td>
                    </tr>
                    <tr>
                        <th> 문의 작성일</th>
                        <td> {inquiry.inquiryWriteDate}</td>
                    </tr>
                    <tr>
                        <th> 문의 진행 상태</th>
                        <td> {inquiry.inquiryStatus}</td>
                    </tr>

                    </tbody>
                </table>
                <button
                 onClick={onClickInquiryRegistHandeler}
                > 문의 등록</button>

                <button
                 onClick={onClickMoveMainHandler}
                > 메인으로 </button>

            </div>
        </>
    );

}

export default InquiryItem ;