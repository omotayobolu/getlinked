"use client";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const currentRoute = usePathname();
  return (
    <section>
      <div className="md:px-[8%] px-[4%] py-[2%] bg-dark-purple text-white">
        <div className="flex flex-row items-center justify-between">
          <h2>
            get<span className="text-secondary-purple">linked</span>
          </h2>
          <div className="flex flex-row items-center gap-16">
            <ul className="flex flex-row items-center gap-8">
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
              <Button text="Register" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
