let A_x = prompt('a1', ''),
	A_y = prompt('a2', ''),
	B_x = prompt('b1', ''),
    B_y = prompt('b2', ''),
	C_x = prompt('c1', ''),
    C_y = prompt('c2', '');

if (B_x - C_x === C_x - A_x && B_y - C_y === C_y - A_y) {
	console.log(true)
} else {
	console.log(false);
}
