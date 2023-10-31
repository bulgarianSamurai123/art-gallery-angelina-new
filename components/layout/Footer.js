import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-20 xl:gap-80 bg-gray-820 py-16 px-10 md:px-32">
      <img src="/assets/logo.svg" alt="Logo" className="w-1/3 md:w-auto" />
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 xl:gap-40">
        <div>
          <h1 className="text-xl md:text-2xl text-gray-300">Полезни линкове</h1>
          <ul className="pt-4">
            <li className="text-gray-380">
              <Link href="/contact-us">Свържи се с нас</Link>
            </li>
            <li className="text-gray-380">
              <Link href="/contact-us">Поръчай картина</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl md:text-2xl text-gray-300">Социални мрежи</h1>
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
