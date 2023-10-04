import React from "react";
import Button from "./Button";
import Link from "next/link";
import Container from "./Container";

const Nav = () => {
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
                <Link href="#timeline">Timeline</Link>
              </li>
              <li>
                <Link href="#overview">Overview</Link>
              </li>
              <li>
                <Link href="#faqs">FAQs</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
            <Button text="Register" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
