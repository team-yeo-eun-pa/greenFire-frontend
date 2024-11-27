import React from 'react';
import { useParams } from 'react-router-dom';

const VerifyPasswordReset = () => {
    const { result } = useParams();

    return (
        <div>
            {result === 'success' && <div>Password reset successful. You can now log in with your new password.</div>}
            {result === 'expired' && <div>The verification link has expired. Please request a new password reset.</div>}
            {result === 'verified' && <div>Your password has already been reset. Please log in with your new password.</div>}
            {result === 'error' && <div>An error occurred during password reset. Please try again.</div>}
        </div>
    );
};

export default VerifyPasswordReset;
