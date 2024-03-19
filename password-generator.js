// Require the generate-password module
import generator from "generate-password";

const password = generator.generate({
	length: 10,
	numbers: true,
    symbols: true, 
    uppercase: true,
    lowercase: true, 
    exclude: '',
    excludeSimilarCharacters: true,
});

console.log(password);