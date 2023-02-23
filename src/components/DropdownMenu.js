import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedOption } from "../redux/actions";
import { options } from "./options";
import "../App.css";

const DropdownMenu = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.selectedOption);

  const handleOptionSelect = (event) => {
    dispatch(setSelectedOption(event.target.value));
  };

  return (
    <div className="drop">
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionSelect}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
