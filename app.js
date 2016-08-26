var num1 = parseInt(prompt("Ingresa un número"));
if (num1%2!=0) {
		window.alert("Odd!");	
	}
else if (num1 > 2 && num1 < 5) {
		window.alert("Good!");
	}
else if (num1 > 6 && num1 <= 20) {
		window.alert("Great!");
	}
else if (num1 > 20) {
		window.alert("Perfect!");
	}