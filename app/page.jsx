import Button from "@components/Button";
import Image from "next/image";
import frequent_questions from "@public/data/faqs";
import Accordion from "@components/Accordion";
import timeline from "@public/data/timeline";
import Container from "@components/Container";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook, BiSolidPhoneCall } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Home = () => {
  return (
    <section id="home">
      <Container>
        <div className="relative flex flex-row items-center w-full">
          <h3 className="absolute top-[-65px] right-0 italic text-white">
            Igniting a Revolution in HR Innovation
            <hr className="border-2 border-primary-pink w-64 absolute right-0" />
          </h3>
          <Image
            src="/assets/star.png"
            alt="star"
            width={25}
            height={35}
            className="absolute top-0 left-20"
          />

          <div className="w-[50%] relative">
            <h1 className="relative">
              getlinked Tech <br />
              Hackathon <span className="text-secondary-purple">1.0</span>
              <Image
                src="/assets/chain.png"
                alt="chain"
                width={60}
                height={60}
                className="absolute bottom-0 right-0"
              />
              <Image
                src="/assets/blow.png"
                alt="blow"
                width={50}
                height={50}
                className="absolute bottom-0 right-[-50px]"
              />
              <Image
                src="/assets/glow.png"
                alt="glow"
                width={50}
                height={60}
                className="absolute top-[-40px] right-12"
              />
            </h1>
            <p className="text-xl my-4">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Button text="Register" />
            <Image
              src="/assets/star.png"
              alt="star"
              width={25}
              height={35}
              className="absolute right-20"
            />
            <div className="flex flex-row items-center gap-4 mt-8">
              <div className="text-6xl">
                00<span className="uppercase text-base">h</span>
              </div>
              <div className="text-6xl">
                00<span className="uppercase text-base">m</span>
              </div>
              <div className="text-6xl">
                00<span className="uppercase text-base">s</span>
              </div>
            </div>
          </div>
          <div className="w-[50%] h-[400px] mt-6 relative">
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
          <div className="flex flex-row items-center gap-8 w-full">
            <div className="w-[50%] h-[400px] relative">
              <Image src="/assets/big idea.png" alt="big idea" fill />
            </div>
            <div className="w-[50%]">
              <h3 className="relative text-left">
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
              <p className="text-sm mt-4">
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
          <div className="w-full mt-4 flex flex-row items-center gap-8">
            <div className="w-[50%]">
              <h3 className="relative">
                Rules and
                <br />
                <span className="text-secondary-purple">Guidelines</span>
                <Image
                  src="/assets/star.png"
                  alt="star"
                  width={25}
                  height={30}
                  className="absolute top-0 left-[50%]"
                />
              </h3>
              <p className="relative text-sm mt-4">
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
            <div className="w-[50%] h-[400px] relative">
              <Image src="/assets/rules.png" alt="Rules and guidelines" fill />
            </div>
          </div>
          <div className="w-full flex flex-row items-center gap-8">
            <div className="relative w-[50%] h-[400px]">
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
            <div className="w-[50%]">
              <h3>
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
              <div className="mt-8">
                <Button text="Read More" />
              </div>
            </div>
          </div>
          <div
            id="faqs"
            className="w-full mt-[15%] flex flex-row items-center gap-8"
          >
            <div className="relative w-[50%]">
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
            <div className="w-[50%] h-[400px] relative">
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
            <p className="w-[300px] text-center text-sm mt-2">
              Here is the breakdown of the time we anticipate using for the
              upcoming event.
            </p>
          </div>

          {timeline.map((item) => (
            // mobile view not done
            <div
              key={item.id}
              className="mt-12 md:flex hidden even:flex-row odd:flex-row-reverse gap-20 justify-center"
            >
              <div className="w-[400px] flex flex-col justify-end even:ml-auto">
                <h4 className="text-secondary-purple ">{item.title}</h4>
                <p className="text-base ">{item.text} </p>
              </div>
              <div className="flex flex-col items-center gap-y-2">
                <div className="h-20 w-1 bg-secondary-purple"></div>
                <div>
                  <h4 className="px-4 py-2 rounded-[30px] bg-gradient-to-r from-primary-purple to-primary-pink">
                    {item.id}
                  </h4>
                </div>
              </div>
              <div className="flex items-end w-[400px]">
                <h4 className="text-secondary-purple">{item.date}</h4>
              </div>
            </div>
          ))}
          {/* mobile view */}
          <div></div>
        </div>
      </Container>
      <Container>
        <div className="w-full flex flex-row items-center gap-8">
          <div className="w-[45%] h-[400px] relative">
            <Image src="/assets/trophy.png" alt="trophy" fill />
          </div>
          <div className="w-[55%]">
            <div className="flex flex-col justify-start items-center">
              <h3>
                Prizes and <br />
                <span className="text-secondary-purple">Rewards</span>
              </h3>
              <p className="my-2">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
            <div className="mt-[30%] flex flex-row items-center gap-4">
              <div className="border border-secondary-purple bg-[rgba(212,52,254,0.12)] rounded-lg px-2 py-8 scale-90">
                <Image
                  src="/assets/second.png"
                  alt="second"
                  width={180}
                  height={180}
                  className="mt-[-70%]"
                />
                <div className="flex flex-col items-center mt-8">
                  <h2>2nd</h2>
                  <h4>Runner</h4>
                  <h2 className="text-secondary-purple">N300,000</h2>
                </div>
              </div>
              <div className="border border-primary-purple bg-[rgba(144,58,255,0.12)] rounded-lg px-2 py-8 scale-120">
                <Image
                  src="/assets/first.png"
                  alt="first"
                  width={295}
                  height={295}
                  className="mt-[-70%] scale-125"
                />
                <div className="flex flex-col items-center mt-8">
                  <h2>1st</h2>
                  <h4>Runner</h4>
                  <h2 className="text-primary-purple">N400,000</h2>
                </div>
              </div>
              <div className="border border-secondary-purple bg-[rgba(212,52,254,0.12)] rounded-lg px-2 py-8 scale-90">
                <Image
                  src="/assets/third.png"
                  alt="third"
                  width={180}
                  height={180}
                  className="mt-[-70%]"
                />
                <div className="flex flex-col items-center mt-8">
                  <h2>3rd</h2>
                  <h4>Runner</h4>
                  <h2 className="text-secondary-purple">N100,000</h2>
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
        <div className="border border-secondary-purple mt-12 h-[550px] w-full flex items-center justify-center relative">
          <div className="grid grid-cols-3 gap-6 place-items-center sponsors">
            <div>
              <Image
                priority
                src="/assets/LibertyAssured.svg"
                alt="Liberty Assured Logo"
                height={110}
                width={120}
              />
            </div>
            <div>
              <Image
                priority
                src="/assets/Liberty company.svg"
                alt="Liberty Company Logo"
                height={40}
                width={200}
                className="flex items-center"
              />
            </div>
            <div>
              <Image
                priority
                src="/assets/Winwise logo.svg"
                alt="Winwise Logo"
                height={110}
                width={130}
              />
            </div>
            <div>
              <Image
                priority
                src="/assets/wisper logo.svg"
                alt="Wisper Logo"
                height={110}
                width={140}
              />
            </div>
            <div>
              <Image
                priority
                src="/assets/Paybox.svg"
                alt="Paybox Logo"
                height={20}
                width={200}
              />
            </div>
            <div>
              <Image
                priority
                src="/assets/Vizual Plus.svg"
                alt="Vizual Plus Logo"
                height={45}
                width={230}
              />
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="w-full flex flex-row items-center gap-8">
          <div className="w-[50%]">
            <h3 className="relative">
              Privacy Policy and
              <br />
              <span className="text-secondary-purple">Terms</span>
              <Image
                src="/assets/star.png"
                alt="star"
                width={25}
                height={30}
                className="absolute top-0 right-40"
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
          <div className="w-[50%] relative h-[800px] max-w-full">
            <Image src="/assets/privacy.png" alt="Privacy" fill />
          </div>
        </div>
      </Container>
      <div className="md:px-[8%] px-[4%] py-[5%] bg-[#100B20] text-white">
        <div className="flex flex-row items-start justify-between">
          <div className="w-[40%]">
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
