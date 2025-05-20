import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, DEFAULT_TEMPLATE_PARAMS } from '../utils/emailConfig';

export const useEmail = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const sendEmail = async (formData) => {
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const templateParams = {
                ...DEFAULT_TEMPLATE_PARAMS,
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            };

            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            setSuccess(true);
        } catch (err) {
            setError(err.message || 'Failed to send email. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        sendEmail,
        isLoading,
        error,
        success,
    };
}; 