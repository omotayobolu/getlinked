import React from "react";

const Container = ({ children }) => {
  return (
    <div className="lg:px-[8%] px-[4%] py-[5%] bg-dark-purple text-white min-h-screen relative">
      {children}
    </div>
  );
};

export default Container;
