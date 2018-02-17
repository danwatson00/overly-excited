// Create an array that contains the words in the sentence
let sentence = "The walrus danced through the trees in the light of the moon";
let theWordArray = sentence.split(" ");
console.log(theWordArray);

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray) {
    for (var i = 0; i < theWordArray.length; i++) {
        console.log(theWordArray);
       theWordArray[i] +=
    }
    /* for (var j = 0; j < theWordArray.length; j++) {
            result = str + theWordArray[i];
            console.log(result);
        } */

}

// Invoke the function and pass in the array
addExcitement(sentence);