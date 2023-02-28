import React from "react";
import { useSelector } from "react-redux";
import { options } from "./options";
import "../App.css";

const Card = () => {
  const selectedOption = useSelector((state) => state.selectedOption);
  const selectedOptionObject = options.find(
    (option) => option.value === selectedOption
  );

  return (
    <div className="card">
      <p>{selectedOptionObject.content}</p>
    </div>
  );
};

export default Card;
