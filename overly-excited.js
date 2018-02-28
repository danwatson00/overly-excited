// Create an array that contains the words in the sentence
let sentence = "The walrus danced through the trees in the light of the moon";
let theWordArray = sentence.split(" ");
let newSentance = "Here is my new sentence for the overly exited exercise";
let newWordArray = newSentance.split(" ");


/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
let addExcitement = (theWordArray, punc) =>  {
    var output = "";
    for (var i = 0; i < theWordArray.length; i++) {
        if ((i + 1) % 3 === 0) {
            output += theWordArray[i] + punc + " ";
    } else {
        output += theWordArray[i] + " ";
    } 
        console.log("output", output);
    }
}
// Invoke the function and pass in the array
addExcitement(theWordArray, "?");

addExcitement(newWordArray, ";");

