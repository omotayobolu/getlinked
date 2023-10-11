"use client";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const currentRoute = usePathname();
  return (
    <section>
      <div className="relative lg:px-[8%] px-[4%] py-[2%] bg-dark-purple text-white">
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <h2>
              get<span className="text-secondary-purple">linked</span>
            </h2>
          </Link>
          <div className="flex lg:flex-row flex-col lg:items-center items-start gap-16">
            <ul className="flex lg:flex-row flex-col lg:items-center items-start gap-8">
              <li>
                <Link href="/#timeline">Timeline</Link>
              </li>
              <li>
                <Link href="/#overview">Overview</Link>
              </li>
              <li>
                <Link href="/#faqs">FAQs</Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={
                    currentRoute === "/contact"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-primary-pink"
                      : "text-white"
                  }
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
