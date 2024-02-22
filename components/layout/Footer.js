import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

import localFont from "next/font/local";
const myFont = localFont({ src: "../../public/fonts/BrittanySignature.ttf" });

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-20 xl:gap-80 bg-gray-820 py-16 px-10 md:px-32">
      <Link
        className={`text-4xl w-[15rem] text-center ${myFont.className}`}
        href="/"
      >
        Angelina's Art Gallery
      </Link>

      <div className="flex flex-col md:flex-row gap-10 md:gap-20 xl:gap-40">
        <div>
          <h1 className="text-xl md:text-2xl text-gray-300">{t("footer.useful-links.title")}</h1>
          <ul className="pt-4">
            <li className="text-gray-380">
              <Link href="/gallery">{t("footer.useful-links.gallery")}</Link>
            </li>
            <li className="text-gray-380">
              <Link href="/contact-us">{t("footer.useful-links.order")}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl md:text-2xl text-gray-300">{t("footer.socials")}</h1>
          <div className="pt-4 flex flex-row gap-3">
            <Link
              href="https://www.facebook.com/profile.php?id=100076377284606"
              target="_blank"
            >
              <img src="/assets/facebook-icon.svg" alt="Facebook Icon" />
            </Link>
            <Link href="https://www.instagram.com/genapete1/" target="_blank">
              <img src="/assets/instagram-icon.svg" alt="Instagram Icon" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
