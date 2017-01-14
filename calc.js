function addition (){
	
	 a = document.getElementById("add_a").value; // Get first number to be added
	 b = document.getElementById("add_b").value; // Get second number to be added
	 output  = document.getElementById("addition_output"); // Get reference to the output area	


	 //output.value = a + b;  // Add a to b

	 output.value = Number(a) + Number(b);
}

function subtraction (){
	
	 a = document.getElementById("sub_a").value; // Get first number to be subtracted
	 b = document.getElementById("sub_b").value; // Get second number to be subtracted
	 output  = document.getElementById("subtraction_output"); // Get reference to the output area	


	 //output.value = a + b;  // Add a to b

	 output.value = Number(a) - Number(b);
}

function only_nums () {

	fields =  document.getElementsByClassName("field"); // Get all objects of class field
	
	for (index = 0; index < fields.length; index++) {
		fields[index].value = fields[index].value.replace(/[^0-9\.]+/g, '');  
	}

}

function clear_fields(){
	
	 fields =  document.getElementsByClassName("field"); // Get all objects of class field
	
	for (index = 0; index < fields.length; index++) {
		fields[index].value ="";  // Set contents of oject to empty string
	}
	


}

