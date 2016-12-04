function bar(x, y, z) {
	foo(x);
	return [y, z];

	function foo(x) {
		y++;
		z = x * y;
	}
}

var y = 5, z;

bar(20);
z;		// 120

bar(25);
z;		// 175
