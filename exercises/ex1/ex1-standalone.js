function bar(x, y1, z1) {
	var yOldState = y, zOldState = z;
	var yNewState, zNewState;
	y = y1; z = z1; 
	foo(x);
	zNewState = z, yNewState = y;
	y = yOldState, z = zOldState;
	return [yNewState, zNewState];
}

function foo(x) {
	y++;
	z = x * y;
}

var y = 5, z;

bar(20);
z;		// 120

bar(25);
z;		// 175
