import React, { useState, useEffect } from 'react';

export const MultiLanguage: React.FC = () => {
    const options: string[] = ["हि", "EN"];
    const defaultLanguage: string = "हि";

    const [language, setLanguage] = useState<string>(() => {
        if (typeof window !== "undefined" && localStorage.getItem('language')) {
            return localStorage.getItem('language') || defaultLanguage;
        }
        return defaultLanguage;
    });

    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('language', language);
        }
    }, [language]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        if (typeof window !== "undefined") {
            localStorage.setItem('language', lang);
            window.location.reload();
        }
    };

    return (
        <div className='MultiLanguage'>
            <ul className='flex items-center divide-x-[1px] border-[var(--primary-color)] border border-solid divide-[var(--primary-color)]'>
                {options.map((item, index) => (
                    <li
                        key={index}
                        className={`p-[6.5px] text-[var(--primary-color)] w-[35px] text-center cursor-pointer ${
                            isMounted && item === language ? 'bg-[var(--primary-color)] text-white' : ''
                        }`}
                        onClick={() => handleLanguageChange(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
