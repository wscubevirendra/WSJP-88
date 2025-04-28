var generator = require('generate-password');


var password = generator.generate({
	length: 10,
	numbers: false
});


console.log(password);