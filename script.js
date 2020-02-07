function plus(){
	var angka1 = Number(document.getElementById("number1").value);
	var angka2 = Number(document.getElementById("number2").value);
	var angka3 = Number(document.getElementById("number3").value);
	var x = document.getElementById("number1");
	var y = document.getElementById("number2");
	var z = document.getElementById("number3");

	if (x.disabled && y.disabled && z.disabled) {
			result ="Pleast input at least 2 numbers";
		} else if (x.disabled && y.disabled) {
			result ="Pleast input at least 2 numbers";
		} else if (x.disabled && z.disabled) {
			result ="Pleast input at least 2 numbers";
		} else if (y.disabled && z.disabled) {
			result ="Pleast input at least 2 numbers";
		} else if (x.disabled) {
			result = angka2 + angka3;
		} else if (y.disabled) {
			result = angka1 + angka3;
		} else if (z.disabled){
			result = angka1 + angka2;
		} else {
			result = angka1 + angka2 + angka3;
		}
		alert(result);
}

function minus(){
	var angka1 = Number(document.getElementById("number1").value);
	var angka2 = Number(document.getElementById("number2").value);
	var angka3 = Number(document.getElementById("number3").value);
	var x = document.getElementById("number1");
	var y = document.getElementById("number2");
	var z = document.getElementById("number3");

	if (x.disabled && y.disabled && z.disabled) {
			result ="Pleast input at least 2 numbers";
		} else if (x.disabled && y.disabled) {
			result ="Pleast input at least 2 numbers";
		} else if (x.disabled && z.disabled) {
			result ="Pleast input at least 2 numbers";
		} else if (y.disabled && z.disabled) {
			result ="Pleast input at least 2 numbers";
		} else if (x.disabled) {
			result = angka2 - angka3;
		} else if (y.disabled) {
			result = angka1 - angka3;
		} else if (z.disabled){
			result = angka1 - angka2;
		} else {
			result = angka1 - angka2 - angka3;
		}
		alert(result);
}

function multiply(){
	var angka1 = Number(document.getElementById("number1").value);
	var angka2 = Number(document.getElementById("number2").value);
	var angka3 = Number(document.getElementById("number3").value);
	var x = document.getElementById("number1");
	var y = document.getElementById("number2");
	var z = document.getElementById("number3");

	if (x.disabled && y.disabled && z.disabled) {
			result ="Please input at least 2 numbers";
		} else if (x.disabled && y.disabled) {
			result ="Pleast input at least 2 numbers";
		} else if (x.disabled && z.disabled) {
			result ="Pleast input at least 2 numbers";
		} else if (y.disabled && z.disabled) {
			result ="Pleast input at least 2 numbers";
		} else if (x.disabled) {
			result = angka2 * angka3;
		} else if (y.disabled) {
			result = angka1 * angka3;
		} else if (z.disabled){
			result = angka1 * angka2;
		} else {
			result = angka1 * angka2 * angka3;
		}
		alert(result);
}

function divide(){
	var angka1 = Number(document.getElementById("number1").value);
	var angka2 = Number(document.getElementById("number2").value);
	var angka3 = Number(document.getElementById("number3").value);
	var x = document.getElementById("number1");
	var y = document.getElementById("number2");
	var z = document.getElementById("number3");

	if (x.disabled && y.disabled && z.disabled) {
			result ="Please input at least 2 numbers";
		} else if (x.disabled && y.disabled) {
			result ="Pleast input at least 2 numbers";
		} else if (x.disabled && z.disabled) {
			result ="Pleast input at least 2 numbers";
		} else if (y.disabled && z.disabled) {
			result ="Pleast input at least 2 numbers";
		} else if (x.disabled) {
			result = angka2 / angka3;
		} else if (y.disabled) {
			result = angka1 / angka3;
		} else if (z.disabled){
			result = angka1 / angka2;
		} else {
			result = angka1 / angka2 / angka3;
		}
		alert(result);
}

function clean(){
	document.getElementById("number1").value = '';
	document.getElementById("number2").value = '';
	document.getElementById("number3").value = '';
	document.getElementById("number1").disabled = false;
	document.getElementById("number2").disabled = false;
	document.getElementById("number3").disabled = false;
	document.getElementById("check1").checked = false;
	document.getElementById("check2").checked = false;
	document.getElementById("check3").checked = false;

}