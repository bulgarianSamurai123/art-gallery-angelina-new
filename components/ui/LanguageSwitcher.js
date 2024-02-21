import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { i18n as i18nConfig } from "../../next-i18next.config";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(i18nConfig.defaultLocale);
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguageHandler = (e) => {
    router.push(router.pathname, router.asPath, { locale: e.target.value });
    setLanguage(e.target.value);
  };

  useEffect(() => {
    setLanguage(i18n.language);
  }, []);

  return (
    <select onChange={changeLanguageHandler} value={language}>
      <option value="bg">BG</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LanguageSwitcher;
