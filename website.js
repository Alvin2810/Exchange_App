function open_Expense(){
  var button1 = document.getElementById('open_expense');
  button1.addEventListener('click', openForm, false);

}

function openForm() {
  document.getElementById("add_expense").style.display = "block";
}

function close_Expense(){
  var button1 = document.getElementById('button1');
  button1.addEventListener('click', closeForm, false);

}

function closeForm() {
  document.getElementById("add_expense").style.display = "none";
}

function add_Expense(){
  var button1 = document.getElementById('button1');
  button1.addEventListener('click', addRecord, false);

}

category1 = [];
expense = []
function addRecord() {
  var inp = document.getElementById('category1');
  var blah = document.getElementById('expense')
  window.expense.push(blah.value);
  category1.push(inp.value);
  inp.value = "";
  blah.value="";
  window.total_expense = Number(expense.reduce(myFunc))
  document.getElementById("expense_added").innerHTML = category1.join("<br/> ");
  document.getElementById("expense_added2").innerHTML = "$" +expense.join("<br/>");
  document.getElementById("expense_total").innerHTML = "$"+expense.reduce(myFunc);
  if (window.total_income==null){
    document.getElementById("total").innerHTML = "Balance: $ -" +  window.total_expense;
  }
  else{
    var blah = Number(window.total_income) - Number(window.total_expense)
    document.getElementById("total").innerHTML ="Balance: $" + blah;
  }
  function myFunc(total, expense) {
  return Number(total) + Number(expense);
}

}

function open_Income(){
  var button2 = document.getElementById('open_income');
  button2.addEventListener('click', openForm2, false);

}

function openForm2() {
  document.getElementById("add_income").style.display = "block";
}

function close_Income(){
  var button2 = document.getElementById('button2');
  button2.addEventListener('click', closeForm2, false);

}

function closeForm2() {
  document.getElementById("add_income").style.display = "none";
}






function add_Income(){
  var button2 = document.getElementById('button2');
  button2.addEventListener('click', addIncome, false);

}
category2 = [];
income = []
function addIncome() {
  var input = document.getElementById('category2');
  var bah = document.getElementById('income')
  window.income.push(bah.value);
  category2.push(input.value);
  input.value = "";
  bah.value="";
  window.total_income= Number(income.reduce(myFunc))
  document.getElementById("income_added").innerHTML = category2.join("<br/> ");
  document.getElementById("income_added2").innerHTML = "$" + income.join("<br/>");
  document.getElementById("income_total").innerHTML = "$"+income.reduce(myFunc);
  if (window.total_expense ==null){
    document.getElementById("total").innerHTML ="Balance: $"+ window.total_income;
  }

  else{
    var blah = Number(window.total_income) - Number(window.total_expense)
    document.getElementById("total").innerHTML = "Balance: $" + blah;
  }
  console.log(Number(blah))
  function myFunc(total, income) {
  return Number(total) + Number(income);
    }
}
window.addEventListener('load', close_Income, false)
window.addEventListener('load', open_Income, false)
window.addEventListener('load', close_Expense, false)
window.addEventListener('load', open_Expense, false)
window.addEventListener('load', add_Expense, false)
window.addEventListener('load', add_Income, false)
