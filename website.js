function add_Expense(){
  var button1 = document.getElementById('button1');
  button1.addEventListener('click', saveExpense, false);
  display();
  sum();

}

function saveExpense(){
  var category1=document.getElementById('category1').value;
  var expense= document.getElementById('expense').value;
  sessionStorage.setItem(category1,expense);
  display();
  document.getElementById('category1').value="";
   document.getElementById('expense').value="";

}



category = [];
expense = []
function addRecord() {
  var inp = document.getElementById('category1');
  var blah = document.getElementById('expense')
  expense.push(blah.value);
  category.push(inp.value);
  inp.value = "";
  blah.value="";
  document.getElementById("expense_added").innerHTML = category.join("<br/> ");
  document.getElementById("expense_added2").innerHTML = "$"+expense.join("<br/>")
  console.log(expense)
  document.getElementById("total").innerHTML = "Total: - $"+expense.reduce(myFunc);
  document.getElementById("expense_total").innerHTML = "$"+expense.reduce(myFunc);
  function myFunc(total, expense) {
  return Number(total) + Number(expense);
  }
  }


window.addEventListener('load', add_Expense, false)
