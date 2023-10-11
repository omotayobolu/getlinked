import Container from "@components/Container";
import Image from "next/image";
import GraphicDesigner from "@public/assets/3d-graphic-designer.png";
import Input from "@components/Input";
import Button from "@components/Button";

async function getCategories() {
  const response = await fetch(
    "https://backend.getlinked.ai/hackathon/categories-list"
  );
  const categories = await response.json();
  return categories;
}

const Register = async () => {
  const categories = await getCategories();

  return (
    <Container>
      <div className="w-full flex md:flex-row flex-col items-center">
        <div className="lg:w-[50%] w-full lg:block hidden">
          <Image src={GraphicDesigner} alt="3d graphic designer" />
        </div>
        <div className="lg:w-[50%] w-full md:my-0 my-6">
          <div className="w-full flex flex-col md:gap-6 gap-4 md:bg-[rgba(255,255,255,3%)] md:p-12 rounded-xl">
            <h3 className="text-secondary-purple">Register</h3>
            <p className="md:text-2xl text-lg uppercase">Create Your Account</p>
            <form className="flex flex-col md:gap-6 gap-4">
              <div className="flex flex-col gap-8">
                <div className="flex md:flex-row flex-col items-center gap-6">
                  <Input
                    id="Team's Name"
                    htmlFor="Team's Name"
                    type="text"
                    label="Team's Name"
                    placeholder="Enter the name of your group"
                  />
                  <Input
                    id="Phone"
                    htmlFor="Phone"
                    type="tel"
                    label="Phone"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="flex md:flex-row flex-col items-center gap-6">
                  <Input
                    id="email"
                    htmlFor="Email"
                    type="email"
                    label="Email"
                    placeholder="Enter your email address"
                  />
                  <Input
                    id="Project topic"
                    htmlFor="Project topic"
                    type="text"
                    label="Project Topic"
                    placeholder="What is your project topic?"
                  />
                </div>
                <div className="flex md:flex-row flex-col items-center gap-6">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="categories" className="text-sm font-normal">
                      Category
                    </label>
                    <select
                      name="categories"
                      id="categories"
                      className="bg-[rgba(255,255,255,3%)] border border-white rounded py-2 px-4 text-sm"
                    >
                      <option value="">Select your categories</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="Group Size" className="text-sm font-normal">
                      Group Size
                    </label>
                    <select
                      name="group size"
                      id="group size"
                      className="bg-[rgba(255,255,255,3%)] border border-white rounded py-2 px-4 text-sm"
                    >
                      <option value="">Select</option>
                      <option value="4">4</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                </div>
                <span className="text-xs italic text-[#FF26B9]">
                  Please review your registration details before submitting
                </span>
                <div className="flex flex-row gap-2">
                  <input type="checkbox" name="agree" id="agree" />
                  <label htmlFor="agree" className="text-xs">
                    I agreed with the event terms and conditions and privacy
                    policy
                  </label>
                </div>
                <Button text="Register Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
