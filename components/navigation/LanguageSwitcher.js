import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

// Switches between /page (Bulgarian) and /en/page (English) on the same page
const LanguageSwitcher = ({ className = "", onSwitch }) => {
  const t = useTranslations("Nav");
  const { locale, locales, pathname, query, asPath } = useRouter();

  const rememberLocale = (newLocale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    if (onSwitch) onSwitch();
  };

  return (
    <div
      className={`flex flex-row gap-2 items-center ${className}`}
      aria-label={t("language")}
    >
      {locales.map((l, index) => (
        <React.Fragment key={l}>
          {index > 0 && <span className="text-gray-380">|</span>}
          <Link
            href={{ pathname, query }}
            as={asPath}
            locale={l}
            scroll={false}
            onClick={() => rememberLocale(l)}
            className={l === locale ? "font-bold" : "font-normal"}
            aria-current={l === locale ? "true" : undefined}
          >
            {l.toUpperCase()}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
