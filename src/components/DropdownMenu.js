import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedOption } from "../redux/actions";

function DropdownMenu() {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.selectedOption);

  const handleOptionSelect = (event) => {
    dispatch(setSelectedOption(event.target.value));
  };

  return (
    <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleOptionSelect}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}

export default DropdownMenu;
