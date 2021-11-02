import { React, useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountisvalid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submithanlder = (event) => {
    event.preventDefault();

    const enterAmount = amountInputRef.current.value;
    const enterAmountNumber = +enterAmount;

    if (
      enterAmount.trim().length === 0 ||
      enterAmountNumber < 1 ||
      enterAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enterAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submithanlder}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountInputRef && <p> Please Enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
