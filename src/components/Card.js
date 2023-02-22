import React from "react";
import { useSelector } from "react-redux";
import { options } from "./options";
import "../App.css";

function Card() {
  const selectedOption = useSelector((state) => state.selectedOption);

  const renderCardContent = () => {
    const selectedOptionObject = options.find(
      (option) => option.value === selectedOption
    );
    return selectedOptionObject ? (
      <p>{selectedOptionObject.content}</p>
    ) : (
      <p>Please select an option</p>
    );
  };

  return (
    <div className="card">
      <h3>Card component</h3>
      {renderCardContent()}
    </div>
  );
}

export default Card;
