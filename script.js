// setTimeout(function(){window.location.reload(1);}, 1000);

function hexToLightness(hex) {
	// Remove the hash at the start if it's there
	hex = hex.replace(/^#/, '');

	// Parse the r, g, b values
	let r = parseInt(hex.substring(0, 2), 16);
	let g = parseInt(hex.substring(2, 4), 16);
	let b = parseInt(hex.substring(4, 6), 16);

	// Convert r, g, b from [0, 255] to [0, 1]
	r /= 255;
	g /= 255;
	b /= 255;

	// Find the max and min values of r, g, b
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);

	// Calculate lightness
	const lightness = (max + min) / 2;

	// Return lightness as a percentage
	return lightness * 100;
}


let myIds = ['herobg', 'herotext', 'herobutton1', 'herobutton2', 'servicebg', 'servicetext', 'servicebutton1', 'servicebutton2'];
let myClasses = ['bgColor1', 'bgColor1', 'color1', 'color1', 'bgColor2', 'bgColor2', 'color2', 'color2']
let myAttributes = ['background-color', 'color', 'button', 'button-hover', 'background-color', 'color', 'button', 'button-hover']

function updateAll() {
	for (let i = 0; i < myIds.length; i++) {
		const x = document.getElementById(myIds[i]);
		let xClass = myClasses[i];
		let xAttribute = myAttributes[i];

		dropdown(x, xClass, xAttribute);
	}
}

window.onload = updateAll();

function changeValue(newValue, myClass, attribute) {
	
	

	
	
	if (attribute == "button") {

		let style1 = document.createElement('style');
		let style2 = document.createElement('style');

		style1.innerHTML = '.'+myClass+' { background-color: '+newValue+'; }';
		style2.innerHTML = '.'+myClass+':hover { color: '+newValue+'; }';

		document.head.appendChild(style1);
		document.head.appendChild(style2);
	}
	else if (attribute == "button-hover") {

		let style1 = document.createElement('style');
		let style2 = document.createElement('style');

		style1.innerHTML = '.'+myClass+' { color: '+newValue+'; }';
		style2.innerHTML = '.'+myClass+':hover { background-color: '+newValue+'; }';

		document.head.appendChild(style1);
		document.head.appendChild(style2);
	}
	else {
		let style = document.createElement('style');
		style.innerHTML = '.'+myClass+' { '+attribute+': '+newValue+'; }';
		document.head.appendChild(style);
	
	}
	
}


function dropdown(element, myClass, attribute) {

	let newValue = document.getElementById(element.value);
	let myColor = newValue.value
	changeValue(myColor, myClass, attribute);

	let mySquare = document.getElementById(element.id + "square");

	if (mySquare == null) {
		console.log("null: " + element.id)
	}
	mySquare.style.background = myColor;

	element.style.border = "2px solid " + myColor;

}

