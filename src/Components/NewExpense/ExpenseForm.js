import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
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

  return (
    <form onSubmit={submitHandler}>
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
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add new expense</button>
      </div>
    </form>
  );
  /* we point at props.onCancel for a click on this button. So, this
      function which we receive on onCancel prop is forwarded to the onClick
      prop of the button. So, when we click on the button, onCancel function
      is executed Cancel*/
};

export default ExpenseForm;
