import React, { useState, useEffect } from 'react';

export const Language: React.FC = () => {
    const hindiLanguage: string = "हिन्दी";
    const englishLanguage: string = "ENG";

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
        <div className='Language' id='Language'>
            <button 
                onClick={handleLanguageChange} 
                className='w-[50px] h-[39px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] border border-solid border-[#FF3430] text-[var(--primary-color)]'>
                {buttonLabel}
            </button>
        </div>
    );
};
