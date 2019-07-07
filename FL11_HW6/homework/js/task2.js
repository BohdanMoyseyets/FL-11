let a = prompt('a', ''),
	b = prompt('b', ''),
    c = prompt('c', '');

if ( +c >= + a + +b || +b >= + a + +c || +a >= + b + +c || a <= 0 || b <= 0 || c <= 0) {
	console.log('Triangle doesn’t exist');
} else 
	if ( a === b && a === c ) {
		console.log('Eequivalent triangle'); 
	} else 
		if ( a === b || a === c || b === c ) {
			console.log('Isosceles triangle'); 
		} else {
	console.log('Normal triangle')
}