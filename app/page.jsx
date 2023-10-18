"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@components/Button";
import Accordion from "@components/Accordion";
import Container from "@components/Container";

import frequent_questions from "@public/data/faqs";
import timeline from "@public/data/timeline";

// icons
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook, BiSolidPhoneCall } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

// images
import SecondMedal from "@public/assets/second.png";
import FirstMedal from "@public/assets/first.png";
import ThirdMedal from "@public/assets/third.png";
import LibertyAssured from "@public/assets/LibertyAssured.svg";
import LibertyCompany from "@public/assets/Liberty company.svg";
import Winwise from "@public/assets/Winwise logo.svg";
import Wisper from "@public/assets/wisper logo.svg";
import Paybox from "@public/assets/Paybox.svg";
import VizualPlus from "@public/assets/Vizual Plus.svg";

// import useCountdown from "@hooks/useCountdown";

const Home = () => {
  // const { timeLeft } = useCountdown();
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const timmerFunc = () => {
    const today = new Date().getTime();

    let tempDate = new Date();
    let tempYear = tempDate.getFullYear();
    let tempMonth = tempDate.getMonth();
    let tempDay = tempDate.getDate();

    const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
    const futureTime = futureDate.getTime();

    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  setInterval(timmerFunc, 1000);

  return (
    <section id="home">
      <Container>
        <div className="relative flex md:flex-row flex-col items-center w-full">
          <h3 className="absolute md:top-[-35px] md:right-0 right-4 italic md:text-3xl text-base text-white">
            Igniting a Revolution in HR Innovation
            <hr className="border-2 border-primary-pink md:w-64 w-32 absolute right-0" />
          </h3>
          <Image
            src="/assets/star.png"
            alt="star"
            width={25}
            height={35}
            className="absolute top-0 left-20"
          />

          <div className="md:w-[50%] w-full relative">
            <h1 className="relative md:text-left md:mt-0 mt-16 text-center ">
              getlinked Tech <br />
              Hackathon <span className="text-secondary-purple">1.0</span>
              <Image
                src="/assets/chain.png"
                alt="chain"
                width={60}
                height={60}
                className="absolute bottom-0 right-0 md:block hidden"
              />
              <Image
                src="/assets/blow.png"
                alt="blow"
                width={50}
                height={50}
                className="absolute bottom-0 right-[-50px] md:block hidden"
              />
              <Image
                src="/assets/glow.png"
                alt="glow"
                width={50}
                height={60}
                className="absolute top-[-40px] right-12 md:block hidden"
              />
            </h1>
            <p className="text-xl my-4 md:text-left text-center">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <div className="md:text-left text-center">
              <Button text="Register" />
            </div>
            <Image
              src="/assets/star.png"
              alt="star"
              width={25}
              height={35}
              className="absolute right-20"
            />
            <div>
              {hours === 0 && minutes === 0 && seconds === 0 ? (
                <div className="my-8 text-center text-2xl">
                  getLinked Hackathon is on!
                </div>
              ) : (
                <div className="flex flex-row items-center md:justify-start justify-center gap-4 mt-8">
                  <div className="md:text-6xl text-4xl">
                    {hours <= 9 ? "0" + hours : hours}
                    <span className="uppercase md:text-base text-sm">h</span>
                  </div>
                  <div className="md:text-6xl text-4xl">
                    {minutes <= 9 ? "0" + minutes : minutes}
                    <span className="uppercase md:text-base text-sm">m</span>
                  </div>
                  <div className="md:text-6xl text-4xl">
                    {seconds <= 9 ? "0" + seconds : seconds}
                    <span className="uppercase md:text-base text-sm">s</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="md:w-[50%] w-full h-[400px] mt-6 relative">
            <Image
              src="/assets/man-wearing-smart-glasses.png"
              alt="Man wearing smart glasses"
              fill
            />
            <Image
              src="/assets/virtual reality.png"
              alt="Virtual Reality"
              width={400}
              height={300}
              className="absolute bottom-0"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div id="overview" className="my-6">
          <div className="flex md:flex-row flex-col items-center md:gap-8 text-16 w-full">
            <div className="md:w-[50%] w-full md:h-[400px] relative">
              <Image src="/assets/big idea.png" alt="big idea" fill />
            </div>
            <div className="md:w-[50%] w-full">
              <h3 className="relative md:text-left text-center">
                Introduction to getlinked
                <br />
                <span className="text-secondary-purple">
                  tech Hackathon 1.0
                </span>
                <Image
                  src="/assets/star purple.png"
                  alt="star"
                  width={25}
                  height={20}
                  className="absolute right-0 top-5"
                />
              </h3>
              <p className="text-sm mt-4 md:text-left text-center">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
            </div>
          </div>
          <div className="w-full mt-4 flex md:flex-row flex-col-reverse items-center gap-8">
            <div className="md:w-[50%] w-full">
              <h3 className="relative md:text-left text-center">
                Rules and
                <br />
                <span className="text-secondary-purple">Guidelines</span>
                <Image
                  src="/assets/star.png"
                  alt="star"
                  width={25}
                  height={30}
                  className="absolute -top-6 left-[50%]"
                />
              </h3>
              <p className="relative text-sm mt-4 md:text-left text-center">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
                <Image
                  src="/assets/star.png"
                  alt="star"
                  width={25}
                  height={30}
                  className="absolute bottom-0 right-0"
                />
              </p>
            </div>
            <div className="md:w-[50%] w-full h-[400px] relative">
              <Image src="/assets/rules.png" alt="Rules and guidelines" fill />
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col items-center mt-8 gap-8">
            <div className="relative md:w-[50%] w-full h-[400px]">
              <Image
                src="/assets/key attributes.png"
                fill
                alt="Key attributes"
              />
              <Image
                src="/assets/star purple.png"
                alt="star"
                width={25}
                height={30}
                className="absolute top-0 left-0"
              />
              <Image
                src="/assets/star.png"
                alt="star"
                width={25}
                height={30}
                className="absolute bottom-0 right-8"
              />
            </div>
            <div className="md:w-[50%] w-full">
              <h3 className="md:text-left text-center">
                Judging Criteria <br />
                <span className="text-secondary-purple">Key attributes</span>
              </h3>
              <ul className="keys">
                <li>
                  <span>Innovation and Creativity: </span>Evaluate the
                  uniqueness and creativity of the solution. Consider whether it
                  addresses a real-world problem in a novel way or introduces
                  innovative features.
                </li>
                <li>
                  <span>Functionality: </span>Assess how well the solution
                  works. Does it perform its intended functions effectively and
                  without major issues? Judges would consider the completeness
                  and robustness of the solution.
                </li>
                <li>
                  <span>Impact and Relevance: </span>Determine the potential
                  impact of the solution in the real world. Does it address a
                  significant problem, and is it relevant to the target
                  audience? Judges would assess the potential social, economic,
                  or environmental benefits.
                </li>
                <li>
                  <span>Technical Complexity: </span>
                  Evaluate the technical sophistication of the solution. Judges
                  would consider the complexity of the code, the use of advanced
                  technologies or algorithms, and the scalability of the
                  solution.
                </li>
                <li>
                  <span>Adherence to Hackathon Rules: </span>
                  Judges will Ensure that the team adhered to the rules and
                  guidelines of the hackathon, including deadlines, use of
                  specific technologies or APIs, and any other
                  competition-specific requirements.
                </li>
              </ul>
              <div className="mt-8 md:text-left text-center">
                <Button text="Read More" />
              </div>
            </div>
          </div>
          <div
            id="faqs"
            className="w-full md:mt-[15%] mt-[30%] flex md:flex-row flex-col-reverse items-center gap-8"
          >
            <div className="relative md:w-[50%] w-full">
              <h3>
                Frequently Asked <br />
                <span className="text-secondary-purple">Questions</span>
              </h3>
              <p className="text-sm my-4">
                We got answers to the questions that you might want to ask about
                <strong> getlinked Hackathon 1.0</strong>
              </p>
              <div>
                {frequent_questions.map((question) => (
                  <Accordion key={question.id} question={question} />
                ))}
              </div>
              <Image
                src="/assets/star purple.png"
                alt="star"
                width={25}
                height={30}
                className="absolute -top-10 left-0"
              />
            </div>
            <div className="md:w-[50%] w-full h-[400px] relative">
              <Image src="/assets/think.png" alt="think" fill />
              <Image
                src="/assets/star.png"
                alt="star"
                width={25}
                height={30}
                className="absolute bottom-0 right-20"
              />
              <Image
                src="/assets/star.png"
                alt="star"
                width={25}
                height={30}
                className="absolute bottom-[50%] left-0"
              />
              <Image
                src="/assets/star purple.png"
                alt="star"
                width={20}
                height={25}
                className="absolute top-0 right-[50%]"
              />
              <Image
                src="/assets/star purple.png"
                alt="star"
                width={20}
                height={25}
                className="absolute top-[20%] left-[20%]"
              />
              <span className="text-8xl font-medium text-secondary-purple absolute top-4 left-[5%]">
                ?
              </span>
              <span className="text-9xl font-medium text-secondary-purple absolute -top-20 left-[30%]">
                ?
              </span>
              <span className="text-8xl font-medium text-secondary-purple absolute -top-10 right-[35%]">
                ?
              </span>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div id="timeline" className="my-12">
          <div className="flex flex-col justify-center items-center">
            <h3>Timeline</h3>
            <p className="w-[300px] text-center text-sm my-2">
              Here is the breakdown of the time we anticipate using for the
              upcoming event.
            </p>
          </div>

          {timeline.map((item) => (
            <div
              key={item.id}
              className="mt-12 md:flex hidden even:flex-row odd:flex-row-reverse lg:gap-20 gap-12 justify-center"
            >
              <div className="w-[400px] flex flex-col justify-end even:ml-auto">
                <h4 className="text-secondary-purple ">{item.title}</h4>
                <p className="text-base ">{item.text} </p>
              </div>
              <div className="flex flex-col items-center gap-y-2">
                <div className="h-20 w-1 bg-secondary-purple"></div>
                <div>
                  <h4 className="px-4 py-2 rounded-[30px] bg-gradient-to-r  from-primary-pink to-primary-purple">
                    {item.id}
                  </h4>
                </div>
              </div>
              <div className="flex items-end w-[400px]">
                <h4 className="text-secondary-purple">{item.date}</h4>
              </div>
            </div>
          ))}
          {timeline.map((item) => (
            <div
              className="md:hidden flex flex-row items-start gap-4 my-4 relative"
              key={item.id}
            >
              <div className="flex flex-col items-center gap-y-2">
                <div className="h-24 w-1 bg-secondary-purple"></div>
                <div>
                  <h4 className="md:px-4 px-1.5 md:py-2 py-[1px] rounded-[30px] bg-gradient-to-r text-xs from-primary-purple to-primary-pink">
                    {item.id}
                  </h4>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <h6 className="text-secondary-purple">{item.title}</h6>
                <p className="text-sm">{item.text}</p>
                <h6 className="text-secondary-purple">{item.date}</h6>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Container>
        <div className="w-full flex lg:flex-row flex-col items-center gap-8">
          <div className="lg:w-[45%] w-full md:h-[450px] h-[400px] relative">
            <Image src="/assets/trophy.png" alt="trophy" fill />
          </div>
          <div className="lg:w-[55%] w-full">
            <div className="flex flex-col lg:items-start items-center text-center lg:text-left">
              <h3>
                Prizes and <br />
                <span className="text-secondary-purple">Rewards</span>
              </h3>
              <p className="my-2">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
            <div className="mt-[30%] mb-[20%] flex flex-row justify-center items-center gap-6">
              <div className="relative border border-secondary-purple bg-[rgba(212,52,254,0.12)] rounded-lg px-2 py-8 scale-90">
                <Image
                  src={SecondMedal}
                  alt="second"
                  className="absolute md:-top-[50%] -top-[30%] left-[50%] translate-x-[-50%]"
                />
                <div className="flex flex-col items-center md:mt-12 mt-6">
                  <h2 className="text-xs md:text-3xl">2nd</h2>
                  <h4 className="text-xs md:text-2xl">Runner</h4>
                  <h2 className="text-secondary-purple text-sm md:text-3xl">
                    N300,000
                  </h2>
                </div>
              </div>
              <div className="relative border border-primary-purple bg-[rgba(144,58,255,0.12)] rounded-lg px-2 py-8 scale-125">
                <Image
                  src={FirstMedal}
                  alt="first"
                  className="absolute md:-top-[50%] -top-[30%] left-[50%] translate-x-[-50%]"
                />
                <div className="flex flex-col items-center md:mt-12 mt-6">
                  <h2 className="text-xs md:text-3xl">1st</h2>
                  <h4 className="text-xs md:text-2xl">Runner</h4>
                  <h2 className="text-primary-purple text-sm md:text-3xl">
                    N400,000
                  </h2>
                </div>
              </div>
              <div className="relative border border-secondary-purple bg-[rgba(212,52,254,0.12)] rounded-lg px-2 py-8 scale-90">
                <Image
                  src={ThirdMedal}
                  alt="third"
                  className="absolute md:-top-[50%] -top-[30%] left-[50%] translate-x-[-50%]"
                />
                <div className="flex flex-col items-center md:mt-12 mt-6">
                  <h2 className="text-xs md:text-3xl">3rd</h2>
                  <h4 className="text-xs md:text-2xl">Runner</h4>
                  <h2 className="text-secondary-purple text-sm md:text-3xl">
                    N100,000
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="grid place-items-center mt-12">
          <h3>Partners and Sponsors</h3>
          <p className="mt-2 text-sm w-[50%] text-center">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className="border border-secondary-purple mt-12 w-full">
          <div className="flex justify-center items-center p-12">
            <div className="grid grid-cols-3 child:flex child:items-center child:justify-center child:p-4">
              <div>
                <Image src={LibertyAssured} alt="Liberty Assured Logo" />
              </div>
              <div className="border-x-2 border-secondary-purple">
                <Image src={LibertyCompany} alt="Liberty Company Logo" />
              </div>
              <div>
                <Image src={Winwise} alt="Winwise Logo" />
              </div>
              <div className="border-t-2 border-secondary-purple">
                <Image src={Wisper} alt="Wisper Logo" />
              </div>
              <div className="border-x-2 border-t-2 border-secondary-purple">
                <Image src={Paybox} alt="Paybox Logo" />
              </div>
              <div className="border-t-2 border-secondary-purple">
                <Image src={VizualPlus} alt="Vizual Plus Logo" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="w-full flex md:flex-row flex-col items-center gap-8">
          <div className="md:w-[50%] w-full">
            <h3 className="relative">
              Privacy Policy and
              <br />
              <span className="text-secondary-purple">Terms</span>
              <Image
                src="/assets/star.png"
                alt="star"
                width={25}
                height={30}
                className="absolute top--4 right-40"
              />
            </h3>
            <p className="my-6 text-sm">Last updated on September 12, 2023</p>
            <p className="text-sm">
              Below are our privacy & policy, which outline a lot of goodies.
              <br />
              it’s our aim to always take of our participant
            </p>
            <div className="mt-8 border border-secondary-purple bg-secondary-purple bg-opacity-10 rounded-md p-8">
              <p className="text-sm">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <div className="my-4 ">
                <span className="font-bold text-base text-secondary-purple">
                  Licensing Policy
                </span>
                <p className="font-bold text-sm">
                  Here are terms of our Standard License:
                </p>
              </div>
              <ul className="list-image-checkmark">
                <li className="text-sm ml-8">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </li>
                <li className="text-sm my-4 ml-8">
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </li>
              </ul>
              <div className="text-center">
                <Button text="Read More" />
              </div>
            </div>
          </div>
          <div className="md:w-[50%] w-full relative lg:h-[800px] h-[450px] max-w-full">
            <Image src="/assets/privacy.png" alt="Privacy" fill />
          </div>
        </div>
      </Container>
      <div className="md:px-[8%] px-[4%] py-[5%] bg-[#100B20] text-white">
        <div className="flex md:flex-row flex-col md:gap-0 gap-6 items-start justify-between">
          <div className="md:w-[40%] w-full">
            <h2>
              get<span className="text-secondary-purple">linked</span>
            </h2>
            <p className="text-xs my-2">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <p className="text-xs mt-12">
              Terms of Use <span className="text-secondary-purple">|</span>{" "}
              Privacy Policy
            </p>
          </div>
          <div>
            <span className="text-sm text-secondary-purple font-semibold mb-6">
              Useful Links
            </span>
            <ul className="flex flex-col gap-4 mt-6">
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
              <li className="flex flex-row flex-nowrap items-center gap-4">
                <span className="text-xs text-secondary-purple">Follow Us</span>
                <BsInstagram size={25} />
                <FaXTwitter size={25} />
                <BiLogoFacebook size={25} />
                <FaLinkedinIn size={25} />
              </li>
            </ul>
          </div>
          <div>
            <span className="text-sm text-secondary-purple font-semibold mb-6">
              Contact Us
            </span>
            <div className="flex flex-row items-center gap-4 mt-6">
              <BiSolidPhoneCall />
              <span className="text-xs">+244 543 1321</span>
            </div>
            <div className="flex flex-row items-center gap-4 mt-4">
              <HiLocationMarker />
              <span className="text-xs">
                27,Alara Street Yaba 100012 Lagos State
              </span>
            </div>
          </div>
        </div>
        <div className="text-center mt-16 text-xs">
          <p>All rights reserved. © getlinked Ltd.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
