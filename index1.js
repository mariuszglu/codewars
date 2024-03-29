// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

const createPhoneNumber = (numbers) => {
	const numberPhone = `(${numbers.slice(0, 3).join("")}) ${numbers
		.slice(3, 6)
		.join("")}-${numbers.slice(6).join("")}`;
	console.log(numberPhone);
};

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"

createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";

//     for(var i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }

//     return format;
//   }
