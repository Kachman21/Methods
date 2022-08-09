// to-upper-case()
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());

// to-lower-case()
const sentenc = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());

// trim()
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());

// Slice()const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));


