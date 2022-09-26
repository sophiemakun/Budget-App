/** @format */

const budget = document.querySelector('.budget-input');
const expense = document.querySelector('.expense-input');
const amount = document.querySelector('.amount-input');
const budgetNumber = document.querySelector('.budgetnumber');
const expensesNumber = document.querySelector('.expensesnumber');
const balanceNumber = document.querySelector('.balancenumber');
const expensesItem = document.querySelector(".expenses");
const expenses = [];

function calculate() {
    const total = expenses.reduce((accumulator, object) => {
        return accumulator + object.amount
    }, 0)
    budgetNumber.innerHTML = `$ ` + budget.value;
    expensesNumber.innerHTML = `$ ` + total;
    const diff = budget.value - total;
    balanceNumber.innerHTML = `$ ` + diff;
} 

function addExpense() {
    const expenseItem = { expense: expense.value, amount: parseInt(amount.value) };
    expenses.push(expenseItem);
     expensesItem.innerHTML = `<div class="expensetitle">
            <p>Expense Title</p>
            ${expenses.map(
              (exp) => `<p class='expense-name'>-${exp.expense}</p>`
            ).join('')}
            
        </div>
        <div class="expensevalue">
            <p>Expense Value</p>
            ${expenses.map(
              (exp) => `<p class='expense-value'>$${exp.amount}</p>`
            ).join('')}
        </div>`;
}

window.addEventListener("DOMContentLoaded", () => {
    budgetNumber.innerHTML = `$ 0`;
    expensesNumber.innerHTML = `$ 0`;
    balanceNumber.innerHTML = `$ 0`;
})