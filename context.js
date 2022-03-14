import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":1000,"category":"Travel","type":"Expense","date":"2022-03-18","id":"6257f81d-56cf-405a-a6a8-8f9d792f9023"}];


export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id});
    
    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction});
    //console.log(transactions);
    const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0);
    
    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
            }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )

}