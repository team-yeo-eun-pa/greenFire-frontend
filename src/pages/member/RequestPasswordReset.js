import React, { useState } from 'react';
import axios from 'axios';

const RequestPasswordReset = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8001/members/find-pwd', {
                memberEmail: email
            });

            if (response.status === 201) {
                alert('Password reset email sent. Please check your inbox.');
            }
        } catch (error) {
            console.error('Failed to request password reset', error);
            alert('Failed to request password reset');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Request Password Reset</button>
        </form>
    );
};

export default RequestPasswordReset;
