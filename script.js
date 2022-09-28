/** @format */

const budget = document.querySelector('.budget-input');
const expense = document.querySelector('.expense-input');
const amount = document.querySelector('.amount-input');
const budgetNumber = document.querySelector('.budgetnumber');
const expensesNumber = document.querySelector('.expensesnumber');
const balanceNumber = document.querySelector('.balancenumber');
const expensesItem = document.querySelector(".expenses");
let expenses = [];
const filters = [];
let i = 0;

function calculate() {
  const total = expenses.reduce((accumulator, object) => {
    return accumulator + object.amount;
  }, 0);
  budgetNumber.innerHTML = `$ ` + budget.value;
  expensesNumber.innerHTML = `$ ` + total;
  const diff = budget.value - total;
  balanceNumber.innerHTML = `$ ` + diff;
}

function deleteItem(item) {
  expenses = expenses.filter((exp) => exp.id !== item);
  displayExpenses();
}

function displayExpenses() {
  let display;
  display = `
        <div class="parent-shell">
        <div class="expense-value">
        
            <h3 class="expense-title">EXPENSE TITLE</h3>
            <h3>EXPENSE VALUE</h3>
            
        </div>
            ${expenses
              .map((item) => {
                return `<div class="amount-budget">
            <p class="center">- ${item.expense}</p>
         <p  class="center">$${item.amount}</p>
         <p class="center" onclick="deleteItem('${item.id}')"><i class="fa-solid fa-trash"></i></p>
             </div>`;
              })
              .join('')}  
        <div>`;
  expensesItem.innerHTML = display;
}

function addExpense() {
  const expenseItem = {
    id: Math.random().toString(36).substring(2, 7),
    expense: expense.value,
    amount: parseInt(amount.value),
  };
  expenses.push(expenseItem);
  displayExpenses();
}

window.addEventListener("DOMContentLoaded", () => {
    budgetNumber.innerHTML = `$ 0`;
    expensesNumber.innerHTML = `$ 0`;
    balanceNumber.innerHTML = `$ 0`;
})