"use client";
import { useState } from "react";
import Image from "next/image";
import Container from "@components/Container";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "@components/Button";

const Contact = () => {
  const [contactData, setContactData] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitContact = async (e) => {
    e.preventDefault();

    try {
      let user = {
        first_name: contactData.firstName,
        email: contactData.email,
        message: contactData.message,
      };
      const response = await fetch(
        "https://backend.getlinked.ai/hackathon/contact-form",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (response.ok) {
        console.log("successful");
      } else {
        console.error("not working");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Container>
      <div className="relative w-full flex md:flex-row flex-col-reverse gap-8 items-center justify-between">
        <Image
          src="/assets/star purple.png"
          alt="Star"
          width={20}
          height={25}
          className="absolute left-6 top-0"
        />
        <div className="md:w-[50%] w-full flex flex-col gap-3">
          <h3 className="font-semibold text-secondary-purple">Get in touch</h3>
          <p className="text-base">
            Contact <br /> Information
          </p>
          <p className="text-base">
            27,Alara Street
            <br />
            Yaba 100012
            <br />
            Lagos State
            <br />
          </p>
          <p className="text-base">Call Us : 07067981819</p>
          <p className="text-base">
            We are open from Monday-Friday
            <br />
            08:00am - 05:00pm
          </p>
          <div className="flex flex-col gap-4">
            <span className="text-base text-secondary-purple">Share On</span>
            <div className="flex flex-row flex-nowrap items-center gap-4">
              <BsInstagram size={25} />
              <FaXTwitter size={25} />
              <BiLogoFacebook size={25} />
              <FaLinkedinIn size={25} />
            </div>
          </div>
        </div>
        <div className="relative md:w-[50%] w-full">
          <div className="relative bg-[rgba(255,255,255,3%)] rounded-xl p-12 w-full">
            <h5 className="text-secondary-purple font-semibold">
              Questions or need assistance?
              <br />
              Let us know about it!
            </h5>
            <form className="flex flex-col gap-8 mt-6" onSubmit={submitContact}>
              <div className="relative">
                <input
                  type="text"
                  id="FirstName"
                  name="firstName"
                  placeholder=""
                  value={contactData.firstName}
                  onChange={handleInputChange}
                  className="w-full border border-white text-white bg-[rgba(255,255,255,3%)] rounded-[4px] px-4 py-2 placeholder:text-white"
                />
                <label
                  htmlFor="FirstName"
                  className="absolute top-1 left-4 border border-transparent bg-none p-1"
                >
                  First Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="Email"
                  name="email"
                  placeholder=""
                  value={contactData.email}
                  onChange={handleInputChange}
                  className="border border-white text-white bg-[rgba(255,255,255,3%)] rounded-[4px] px-4 py-2 placeholder:text-white w-full"
                />
                <label
                  htmlFor="Email"
                  className="absolute top-1 left-4 border border-transparent bg-none p-1"
                >
                  Mail
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="Message"
                  name="message"
                  placeholder=""
                  value={contactData.message}
                  onChange={handleInputChange}
                  cols="10"
                  rows="5"
                  className="w-full border border-white text-white bg-[rgba(255,255,255,3%)] rounded-[4px] px-4 py-2 placeholder:text-white resize-none"
                ></textarea>
                <label
                  htmlFor="Message"
                  className="absolute top-1 left-4 border border-transparent bg-none p-1"
                >
                  Message
                </label>
              </div>
              <div className="text-center">
                <Button type="submit" text="Submit" />
              </div>
            </form>
          </div>
          <Image
            src="/assets/star.png"
            alt="star"
            width={20}
            height={25}
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
