function AddBill(){
	var bill = prompt("Please enter a bill", "Bill");

	if (bill != null) {		
		var billsTable = document.getElementById("billTableId");
		var textBox = document.createElement("INPUT");
		textBox.setAttribute("type", "text");

		var row = billsTable.insertRow();
		row.setAttribute("id", bill.replace(/\s/g, '') + "TableId");

		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		cell1.innerHTML = bill;
		cell2.appendChild(textBox);
	}
}/*end AddBill */

function DeleteBill(element){
	var bool = confirm("Are you sure you want to delete this bill?");
	var billsTable = document.getElementById("billTableId");
	var index = element.parentNode.rowIndex;
	if(bool){
		billsTable.deleteRow(index);
	}
	else{
		return;
	}
	
}/*end DeleteBill */

function Calculate(){
	var inputElements = document.getElementsByTagName('input');
	var checkInt = 0;
	var totalCost = 0;
	var totalLeft = 0;
	var totalIncome = 0;

	for (var i = 0; i < inputElements.length; i++) {
		if (inputElements[i].id == "incomeInputId") {
			totalIncome = inputElements[i].value;
		}
		else{
			if(inputElements[i].value.length == 0){
				checkInt++;
			}
			else{
				totalCost += parseInt(inputElements[i].value, 10);
			}
		}
	}

	if(checkInt == 0){
		var outputLabel = document.getElementById("leftOverIncomeLabelId");
		totalLeft = totalIncome - totalCost;
		outputLabel.innerHTML = "Left Over Income:" + totalLeft;
	}
	else{
		alert("Please fill in all bill costs.")
	}
} /*end calculate */

function Reset(){
	var billsTable = document.getElementById("billTableId");
	var inputElements = document.getElementsByTagName('input');
	var outputLabel = document.getElementById("leftOverIncomeLabelId");

	for (var i = 0; i < inputElements.length; i++){
		inputElements[i].value = "";
	}
	outputLabel.innerHTML = "";

	for (var i = 0; i < billsTable.rows.length; i++){
		if(myTable != null){
			if(i>4){
				billsTable.deleteRow(i);
			}
		}
	}
}

function Save(){
	var billsTable = document.getElementById("billTableId");
}

function OnLoad(){
	var billsTable = document.getElementById("billTableId");	
}
