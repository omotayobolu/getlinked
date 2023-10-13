import React from "react";

const Button = ({ text, onClick, className, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
       ${className} bg-gradient-to-r from-primary-purple to-primary-pink rounded-md py-4 px-12 text-base hover:bg-gradient-to-l hover:opacity-80`}
    >
      {text}
    </button>
  );
};

export default Button;
