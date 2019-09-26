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



function display(){
  var expense_added=document.getElementById('expense_added');
  var total=document.getElementById('total')
  expense_added.innerHTML="";

  for(var x=0; x<sessionStorage.length; x++){
    var a = sessionStorage.key(x);
    var b = sessionStorage.getItem(a);
    if (a == ""){
      alert("Please Type in a Category");
    }
    else if (b == "") {
      alert("Please Type in the Amount Spent");
    }
    else{
      expense_added.innerHTML += a+"  -  "+"$"+b+"<br />";
      }

  }
}

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
