document.body.innerHTML="<h1>Inventory</h1>"

let h1 = document.querySelector("h1");
// let myDiv=document.createElement('div');
// document.body.append('myDiv');
const itemName = document.createElement("label");
h1.after(itemName);
itemName.innerHTML="<br>ITEM NAME: </br>";
let prodName = document.createElement("input");
prodName.id="prodName";
itemName.after(prodName);




const itemCategory = document.createElement("label");
prodName.after(itemCategory);
itemCategory.innerHTML= "<br>ITEM CATEGORY:</br>"
let prodCategory = document.createElement("input");
prodCategory.id="prodCategory";
itemCategory.after(prodCategory)

const itemQuantity = document.createElement("label");
prodCategory.after(itemQuantity);
itemQuantity.innerHTML="<br>QUANTITY:</br>";

let prodQuantity = document.createElement("input");
prodQuantity.id="prodQuantity";
itemQuantity.after(prodQuantity);

let rate = document.createElement("div");
prodQuantity.after(rate)
rate.innerHTML='Rating: <input type="number" id="rating" min="1" max="10" steps="10" placeholder="1-10" value=""onfocus="this.value="" style="margin-top:10px"><br><br>'

//add button
let btn = document.createElement("label");
rate.after(btn);
btn.innerHTML=' <input type="button" id="add" value="add" style="padding: 3px; margin-left: 20px; margin-top: 10px;">'

//remove button
let removeItem = document.createElement("label");
btn.after(removeItem);
removeItem.outerHTML='<input type="button" id="remove" value="remove" style="padding: 2px; margin-left: 20px; margin-top: 10px;">'


let mydiv = document.createElement("div");
document.body.after(mydiv);

mydiv.innerHTML="<br><table><tr><th>Product Name</th>"+
"<th>Category</th><th>Quantity</th></tr></table></br>"
mydiv.id="myTable";
btn.onclick=function(){
let itemName = document.getElementById("prodName");
let Cat  = document.getElementById("prodCategory");
let qte  = document.getElementById("prodQuantity");

let tablep = document.querySelector("table")
let newRow = document.createElement("tr");
tablep.append(newRow);
newRow.innerHTML = '<tr><td>'+itemName.value+'</td><td>'+Cat.value+'</td><td>'+qte.value+'</td></tr>';
newRow.style.color="red";
itemName.value="";
Cat.value ="";
qte.value ="";
}

removeItem.onclick = function(obj){
    
}


