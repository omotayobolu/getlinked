"use client";
import React, { useState } from "react";

const Accordion = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="mb-2 border-b border-secondary-purple">
      <div
        className="flex flex-row items-center justify-between cursor-pointer "
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <p className="text-base py-2">{question.question}</p>
        <span className="text-secondary-purple text-2xl">
          {showAnswer ? "-" : "+"}
        </span>
      </div>
      {showAnswer && <p className="text-sm mb-3">{question.answer}</p>}
    </div>
  );
};

export default Accordion;
