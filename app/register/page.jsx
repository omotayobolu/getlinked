"use client";

import { useState, useEffect } from "react";
import Container from "@components/Container";
import Image from "next/image";
import GraphicDesigner from "@public/assets/3d-graphic-designer.png";
import Input from "@components/Input";
import Button from "@components/Button";

const Register = () => {
  const [category, setCategory] = useState([]);
  const [teamData, setTeamData] = useState({
    email: "",
    teamName: "",
    phoneNumber: "",
    projectTopic: "",
    groupSize: 0,
    agreement: false,
    category: 0,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const numericValue =
      name === "groupSize" || name === "category" ? parseInt(value, 10) : value;
    setTeamData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : numericValue,
    }));
  };

  const registerTeam = async (e) => {
    e.preventDefault();

    try {
      const userDetails = {
        email: teamData.email,
        team_name: teamData.teamName,
        project_topic: teamData.projectTopic,
        phone_number: teamData.phoneNumber,
        group_size: teamData.groupSize,
        privacy_poclicy_accepted: teamData.agreement,
        category: teamData.category,
      };
      console.log("user:", userDetails);
      const response = await fetch(
        "https://backend.getlinked.ai/hackathon/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDetails),
        }
      );
      console.log(response);

      if (response.ok) {
        console.log("data sent");
      } else {
        console.error("wahala dey");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(
          "https://backend.getlinked.ai/hackathon/categories-list"
        );
        const categories = await response.json();
        setCategory(categories);
      } catch (err) {
        console.log(err.message);
      }
    };
    getCategories();
  }, []);

  return (
    <Container>
      <div className="w-full flex md:flex-row flex-col items-center">
        <div className="lg:w-[50%] w-full lg:block hidden">
          <Image src={GraphicDesigner} alt="3d graphic designer" priority />
        </div>
        <div className="lg:w-[50%] w-full md:my-0 my-6">
          <div className="w-full flex flex-col md:gap-6 gap-4 md:bg-[rgba(255,255,255,3%)] md:p-12 rounded-xl">
            <h3 className="text-secondary-purple">Register</h3>
            <p className="md:text-2xl text-lg uppercase">Create Your Account</p>
            <form
              onSubmit={registerTeam}
              className="flex flex-col md:gap-6 gap-4"
            >
              <div className="flex flex-col gap-8">
                <div className="flex md:flex-row flex-col items-center gap-6">
                  <Input
                    id="Team's Name"
                    htmlFor="Team's Name"
                    type="text"
                    label="Team's Name"
                    placeholder="Enter the name of your group"
                    value={teamData.teamName}
                    name="teamName"
                    onChange={handleInputChange}
                  />
                  <Input
                    id="Phone"
                    htmlFor="Phone"
                    type="tel"
                    label="Phone"
                    placeholder="Enter your phone number"
                    value={teamData.phoneNumber}
                    name="phoneNumber"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex md:flex-row flex-col items-center gap-6">
                  <Input
                    id="email"
                    htmlFor="Email"
                    type="email"
                    label="Email"
                    placeholder="Enter your email address"
                    value={teamData.email}
                    name="email"
                    onChange={handleInputChange}
                  />
                  <Input
                    id="Project topic"
                    htmlFor="Project topic"
                    type="text"
                    label="Project Topic"
                    placeholder="What is your project topic?"
                    value={teamData.projectTopic}
                    name="projectTopic"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex md:flex-row flex-col items-center gap-6">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="categories" className="text-sm font-normal">
                      Category
                    </label>
                    <select
                      name="category"
                      id="categories"
                      value={teamData.category}
                      onChange={handleInputChange}
                      className="bg-[rgba(255,255,255,3%)] border border-white rounded py-2 px-4 text-sm"
                    >
                      <option value={0}>Select your categories</option>
                      {category.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="Group Size" className="text-sm font-normal">
                      Group Size
                    </label>
                    <select
                      name="groupSize"
                      id="group size"
                      value={teamData.groupSize}
                      onChange={handleInputChange}
                      className="bg-[rgba(255,255,255,3%)] border border-white rounded py-2 px-4 text-sm"
                    >
                      <option value={0}>Select Group Size</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                    </select>
                  </div>
                </div>
                <span className="text-xs italic text-[#FF26B9]">
                  Please review your registration details before submitting
                </span>
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    name="agreement"
                    checked={teamData.agreement}
                    onChange={handleInputChange}
                    id="agreement"
                  />
                  <label htmlFor="agree" className="text-xs">
                    I agreed with the event terms and conditions and privacy
                    policy
                  </label>
                </div>
                <Button type="submit" text="Register Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
