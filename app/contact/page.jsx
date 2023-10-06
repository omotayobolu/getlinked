import Image from "next/image";
import Container from "@components/Container";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "@components/Button";

const Contact = () => {
  return (
    <Container>
      <div className="relative w-full flex flex-row items-center justify-between">
        <Image
          src="/assets/star purple.png"
          alt="Star"
          width={20}
          height={25}
          className="absolute left-6 top-0"
        />
        <div className="w-[50%] flex flex-col gap-3">
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
        <div className="relative w-[50%]">
          <div className="relative bg-[rgba(255,255,255,3%)] rounded-xl p-12 w-full">
            <h5 className="text-secondary-purple font-semibold">
              Questions or need assistance?
              <br />
              Let us know about it!
            </h5>
            <form className="flex flex-col gap-6 mt-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-white text-white bg-[rgba(255,255,255,3%)] rounded-[4px] px-4 py-2 placeholder:text-white"
              />
              <input
                type="email"
                placeholder="Mail"
                className="border border-white text-white bg-[rgba(255,255,255,3%)] rounded-[4px] px-4 py-2 placeholder:text-white"
              />
              <textarea
                name="Message"
                id="Message"
                cols="10"
                rows="5"
                placeholder="Message"
                className="border border-white text-white bg-[rgba(255,255,255,3%)] rounded-[4px] px-4 py-2 placeholder:text-white resize-none"
              ></textarea>
              <div className="text-center">
                <Button text="Submit" />
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
