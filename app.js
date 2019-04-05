const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const btnCancel = document.querySelector('#cancel-btn');
const btnAdd = document.querySelector('#add-btn');
const expensesList = document.querySelector('#expenses_list');


btnAdd.addEventListener('click', () => {

	console.log(btnAdd);


	const enteredReason = reasonInput.value;
	const enteredAmount = amountInput.value;

	if(enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <=0)
	{
		return;
	}
	console.log(enteredReason);

});