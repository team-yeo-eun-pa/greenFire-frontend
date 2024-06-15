import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const location = useLocation();

    // URL 쿼리 파라미터로부터 멤버코드와 인증코드 추출
    const params = new URLSearchParams(location.search);
    const memberCode = params.get('memberCode');
    const verificationCode = params.get('verificationCode');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (newPassword !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.put('http://localhost:8001/members/reset-password', {
                memberCode,
                verificationCode,
                newPassword
            });

            if (response.status === 204) {
                alert('Password reset successful');
                // 리다이렉트 또는 다른 동작 수행
            }
        } catch (error) {
            console.error('Password reset failed', error);
            alert('Password reset failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>New Password:</label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Reset Password</button>
        </form>
    );
};

export default ResetPassword;
