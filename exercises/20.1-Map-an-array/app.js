let arrayOfCelsiusValues = [-2, 34, 56, -10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value) {
	return 9 * value / 5 + 32;
});

console.log(arrayOfFahrenheitValues);
