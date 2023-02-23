import React from "react";
import { useSelector } from "react-redux";
import { options } from "./options";
import "../App.css";

const Card = () => {
  const selectedOption = useSelector((state) => state.selectedOption);

  const RenderCardContent = () => {
    const selectedOptionObject = options.find(
      (option) => option.value === selectedOption
    );
    return <p>{selectedOptionObject.content}</p>;
  };

  return (
    <div className="card">
      <RenderCardContent />
    </div>
  );
};

export default Card;
