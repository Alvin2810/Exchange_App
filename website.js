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

function sum(){
    if(sessionStorage.length > 0){
        var sum = 0;
        for (var i=0, len=sessionStorage.length; i<len; i++){
            var key = sessionStorage.key(i);
            var val = sessionStorage.getItem(key);
            var valu = val.split("*");
            sum += parseInt(valu[0]);
            total.innerHTML="- $ "+sum;

          }
      }
};
total.innerHTML="- $ 0";


window.addEventListener('load', add_Expense, false)
