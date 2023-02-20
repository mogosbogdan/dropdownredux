import React from "react";
import { useSelector } from "react-redux";

function Card() {
  const selectedOption = useSelector((state) => state.selectedOption);

  const renderCardContent = () => {
    switch (selectedOption) {
      case "option1":
        return <p>Option 1 selected: Display some information here</p>;
      case "option2":
        return <p>Option 2 selected: Display some information here</p>;
      case "option3":
        return <p>Option 3 selected: Display some information here</p>;
      default:
        return <p>Please select an option</p>;
    }
  };

  return (
    <div>
      <h3>Card component</h3>
      {renderCardContent()}
    </div>
  );
}

export default Card;
