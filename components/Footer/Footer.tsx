"use client"
import React, { useEffect, useState } from 'react'
import jsonData from "../../app/jsonData.json";
import hi from "../../app/hi.json";
import { FooterTemplate } from './FooterTemplate';

export const Footer = () => {
  const [jsonDataFile, setJsonDataFile] = useState<typeof jsonData | typeof hi>(hi);
    useEffect(() => {
      const newLanguage = localStorage.getItem('language');
      if (newLanguage === 'ENG') {
        setJsonDataFile(jsonData);
      } else if (newLanguage === "हिन्दी") {
        setJsonDataFile(hi);
      }
    }, []);

  return (
    <FooterTemplate content={jsonDataFile.footer.content} location_icon={jsonDataFile.footer.props.location_icon}/>
  )
}
