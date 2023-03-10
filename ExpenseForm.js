//import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // document.addEventListener("onChange", ChangeTitleHandler);using vanila js for appearing on console whatever we type that's gonna appear
  // function ChangeTitleHandler(event) {
  //   // document.getElementById("tej").innerHTML = "";
  //   console.log(event.target.value);
  // }

  //   const ChangeTitleHandler =(event)=>{ using react to appear
  //  console.log(event.target.value)
  //     }
  const [UserInput, setUserInput] = useState({
    enteredTitle: "",
    enteredDate: "",
    enteredAmount: "",
  });
  const handleTitleChange = (event) => {
    setUserInput({
      ...UserInput,
      enteredTitle: event.target.value,
    });
  };
  const ChangeAmountHandler = (event) => {
    setUserInput({
      ...UserInput,
      enteredDate: event.target.value,
    });
  };
  const ChangeDateHandler = (event) => {
    setUserInput({
      ...UserInput,
      enteredAmount: event.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control label">
          <label id="tej">Title</label>
          <input type="text" onChange={handleTitleChange} />
        </div>
        <div className="new-expense__control label">
          <label>Amount</label>
          <input type="number" min="0" onChange={ChangeAmountHandler} />
        </div>
        <div className="new-expense__control label">
          <label>Date</label>
          <input type="date" min="2010-12-10" onChange={ChangeDateHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">AddExpenses</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
