"use client"
import React, { useEffect, useState } from 'react'
import jsonData from "../../app/jsonData.json";
import hi from "../../app/hi.json";
import { FooterTemplate } from './FooterTemplate';

export const Footer = () => {
  const [jsonDataFile, setJsonDataFile] = useState<typeof jsonData | typeof hi>(jsonData);
  useEffect(() => {
    const newLanguage = localStorage.getItem('language');
    if (newLanguage === 'en') {
      setJsonDataFile(jsonData);
    } else if (newLanguage === null) {
      setJsonDataFile(jsonData);
    }
    else {
      setJsonDataFile(hi);
    }
  }, []);

  return (
    <FooterTemplate social_platform={jsonDataFile.footer.content.social_platform} />
  )
}
