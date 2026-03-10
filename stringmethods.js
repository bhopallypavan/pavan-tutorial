//there multiple methods in string 
//toupperCase()
//tolowerCase()
//trim()
//trimStart()
//trimEnd()
//replace()
//replaceAll()
//repeat()
//indexOf()find the index value or position in string

const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

const repeatedLove = "love ".repeat(3).trim()
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);
//for newline \n to next new line 
let message = "there are two men,\n and also women in the garden \n ";
console.log(message);

//indexOf()
let text = "the red quick brown fox jumps over the lazy dog. ";
console.log(text.indexOf("red"));
console.log(text.indexOf("ball"));


