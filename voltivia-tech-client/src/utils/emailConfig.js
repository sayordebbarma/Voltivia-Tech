// EmailJS Configuration
export const EMAILJS_CONFIG = {
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Email template variables
export const DEFAULT_TEMPLATE_PARAMS = {
    from_name: '',
    from_email: '',
    message: '',
    to_name: 'Voltivia Tech',
}; 