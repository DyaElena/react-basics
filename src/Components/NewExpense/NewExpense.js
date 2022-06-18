import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(ExpenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  // in newExpense this form is rendered. We want to show this form conditionally:
  // we need to add button and when the button is clicked, form appears / when form is submitted or canceled, button appears back
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}> Add expenses</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
    /* stopEditingHandler function passed as a value to the onCancel prop on the ExpenseForm component */
  );
};

export default NewExpense;
