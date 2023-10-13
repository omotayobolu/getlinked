"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Menu from "@public/assets/menu.png";
import CloseMenu from "@public/assets/close-menu.png";

const Nav = () => {
  const currentRoute = usePathname();

  const [navOpened, setNavOpened] = useState(false);

  const toggleNav = () => {
    setNavOpened(!navOpened);
  };

  const closeNav = () => {
    setNavOpened(false);
  };

  return (
    <section>
      <div className="relative lg:px-[8%] px-[4%] md:py-[2%] py-[4%] bg-dark-purple text-white">
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <h2>
              get<span className="text-secondary-purple">linked</span>
            </h2>
          </Link>
          <div className="lg:hidden block mr-4">
            <Image
              src={navOpened ? CloseMenu : Menu}
              onClick={toggleNav}
              alt="menu"
              className="cursor-pointer"
            />
          </div>
          <div
            className={`lg:flex lg:flex-row lg:items-center gap-8
          ${
            navOpened
              ? "absolute bg-fixed w-full h-screen bg-dark-purple top-16 left-0 z-10 flex items-start flex-col p-10"
              : "hidden"
          }`}
          >
            <ul className="flex lg:flex-row flex-col lg:items-center items-start gap-8">
              <li>
                <Link href="/#timeline" onClick={closeNav}>
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="/#overview" onClick={closeNav}>
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/#faqs" onClick={closeNav}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={
                    currentRoute === "/contact"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-primary-pink"
                      : "text-white"
                  }
                  onClick={closeNav}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link href="/register">
              <div
                className={
                  currentRoute === "/register"
                    ? "rounded-sm bg-gradient-to-b from-[#9A39FF] to-[#FF29B9] p-[2px]"
                    : ""
                }
              >
                <button
                  className={
                    currentRoute === "/register"
                      ? "bg-dark-purple py-4 px-12"
                      : "bg-gradient-to-r from-primary-purple to-primary-pink rounded-md py-4 px-12 text-base hover:bg-gradient-to-l hover:opacity-80"
                  }
                  onClick={closeNav}
                >
                  Register
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
