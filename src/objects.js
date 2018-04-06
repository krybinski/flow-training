/** @flow */

/** Car */
let car: {
	brand: string,
	model: string,
	year: number
} = {
	brand: "Audi",
	model: "A6",
	year: 2017,
};

car.year = 2018; // Works
// car.year = "2018"; // Error
// car.year = undefined; // Error
// car.year = null; // Error

/** Bike */
let bike: {
	brand: string,
	model: string,
	year: ?number
} = {
	brand: "Romet",
	model: "Rambler 3",
	year: 2016,
};

bike.year = 2018; // Works
// bike.year = "2018"; // Error
bike.year = undefined; // Works
bike.year = null; // Works
