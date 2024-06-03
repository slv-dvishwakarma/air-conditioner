import React, { useState, useEffect } from 'react';

export const Language: React.FC = () => {
    const hindiLanguage: string = "हि";
    const englishLanguage: string = "EN";

    const [language, setLanguage] = useState<string>(hindiLanguage);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedLanguage = localStorage.getItem('language');
            if (storedLanguage) {
                setLanguage(storedLanguage);
            }
        }
    }, []);

    const handleLanguageChange = () => {
        const newLanguage = language === hindiLanguage ? englishLanguage : hindiLanguage;
        setLanguage(newLanguage);
        if (typeof window !== "undefined") {
            localStorage.setItem('language', newLanguage);
            window.location.reload();
        }
    };

    const buttonLabel = language === hindiLanguage ? englishLanguage : hindiLanguage;

    return (
        <div className='Language'>
            <button 
                onClick={handleLanguageChange} 
                className='border w-[35px] h-[35px] rounded-[50%] border-solid border-[var(--primary-color)] text-[var(--primary-color)]'>
                {buttonLabel}
            </button>
        </div>
    );
};
