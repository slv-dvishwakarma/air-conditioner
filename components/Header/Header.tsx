"use client"
import React, { useEffect, useState } from 'react'
import { HeaderTemplate } from './HeaderTemplate'
import jsonData from "../../app/jsonData.json";
import hi from "../../app/hi.json";

export const Header = () => {
  const [jsonDataFile, setJsonDataFile] = useState<typeof jsonData | typeof hi>(hi);
    useEffect(() => {
      const newLanguage = localStorage.getItem('language');
      if (newLanguage === 'en') {
        setJsonDataFile(jsonData);
      } else if (newLanguage === null) {
        setJsonDataFile(hi);
      }
      else {
        setJsonDataFile(hi);
      }
    }, []);

  return (
    <HeaderTemplate main_header={jsonDataFile.header.content.main_header} top_bar={jsonDataFile.header.content.top_bar} />
  )
}
