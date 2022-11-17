function roll(sides, dice, rolls) {
	let arr = [];
	for (let i = 0; i < rolls; i++) {
		let curTotal = 0
		for(let j = 0; j < dice; j++) {
			let curRoll = 1 + Math.floor(Math.random() * sides);
			curTotal += curRoll;
		}
		arr.push(curTotal);
	}
	return JSON.stringify({"sides": sides, "dice": dice, "rolls": rolls, "results": arr});
}

export { roll };
