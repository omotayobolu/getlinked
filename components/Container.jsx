import React from "react";

const Container = ({ children }) => {
  return (
    <div className="md:px-[8%] px-[4%] py-[5%] bg-dark-purple text-white min-h-[90%]">
      {children}
    </div>
  );
};

export default Container;
