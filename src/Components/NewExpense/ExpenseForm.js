import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [shouldShowForm, setShouldShowForm] = useState(false);
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const submitHanlder = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const titleChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredTitle: event.target.value }); // not always reliable option
    // setUserInput((prevState) => { return { ...prevState, enteredTitle: event.target.value }}); // reliable option
    setEnteredTitle(event.target.value);
    // console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredDate: event.target.value });
    setEnteredDate(event.target.value);
  };

  const showFormHandler = () => {
    setShouldShowForm(!shouldShowForm);
  };

  // if (setShouldShowForm) {
  //   return <button onClick={showFormHandler}>Add new expense</button>;
  // }

  return (
    <>
      {!shouldShowForm && (
        <button onClick={showFormHandler}>Add new expense</button>
      )}

      {shouldShowForm && (
        <form onSubmit={submitHanlder}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                value={enteredAmount}
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                value={enteredDate}
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit" onClick={() => setShouldShowForm(false)}>
              Cancel
            </button>

            <button type="submit">Add new expense</button>
          </div>
        </form>
      )}
    </>
  );
};

export default ExpenseForm;
