import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import headerLogo from "../public/assets/Tiedie-banner.webp";
import ads from "../public/assets/ads.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("rgb(212 212 216)");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-md shadow-yellow-100 z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className=" flex justify-between items-center w-full h-full px-2 2xl:px-16 md:mr-20 lg:mr-5">
        <Link href="/">
          <Image src={ads} alt="ADS" width="75" height="75" />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <div className="md:hidden lg:flex bg-current rounded-lg shadow-lg shadow-slate-200 pb-2 pr-2 lg:mr-0 2xl:mr-5 ml-10">
              <Image src={headerLogo} alt="ADS" width="1000" height="50" />
            </div>
            <Link href="/">
              <li className="  md:ml-5 lg:ml-20 text small uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/About">
              <li className="md:ml-2 lg:ml-5 text small uppercase hover:border-b">
                About
              </li>
            </Link>
            <Link href="/Contact">
              <li className="md:ml-2 lg:ml-5 text small uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : " "
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[75%] h-screen bg-slate-700 p-10 ease-in duration-500"
              : "fixed left-[-100%] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={ads} alt="ADS" width="45" height="45" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-black p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-600 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Get ready for a tie-die flyby. Follow the adventures of SV
                Cameo!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/About">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/Contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
