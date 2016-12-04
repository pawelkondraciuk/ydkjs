function mult(mul, num, ...args) {
	if (args.length == 0) return mul * num;
	return mul * mult(num, ...args);
}

mult(3,4,5);	// 60

mult(3,4,5,6);	// Oops!

