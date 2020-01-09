/* 
These are our library arrays. They provide the content for the template.
This content could easily be stored externally in a file or database to be updated seperatly from the code file.
But we are going to keep it super basic for the moment.
*/
let adjectives = ['lovely','wonderful','fantastic','amazing','glorious','cromulent','awesome'];
let things = ['house','cat','dog','fish','hat','ideology','book'];
let verbs = ['caused','proved','symbolised','indicated','enabled','helped with'];
let state = ['joy','happiness','creativity','wonderment','amazement','fascination','surprise'];
/*
    This helper function chooses a word from our array randomly. It works on any array.
    It does that by generating a random number between 0 and 1 (for example 0.52861519357807616)
    This number is then multiplied by the length of the array. For example, our adjectives array above is 7 elements long.
    0.52861519357807616*7 = 3.7003063550465334
    3.7003063550465334 isn't an index to our array. We need one of 0,1,2,3,4,5,6
    Math.floor() is a funcation that takes the lowest whole number without any decimals.
    Math.floor(0.52861519357807616*7) = 3.
    Using floor also prevents us getting 7. While our array has 7 elements, we count from 0.
    adjectives[Math.floor(0.52861519357807616*7)] = 'amazing'.
*/
let choose_from = function(array){
    return array[Math.floor(Math.random()*array.length)];
};

/*
Using JavaScripts templating capability we can build our sentence from the arrays.
Using back-tick ` to create a string we can inject code with ${}. 
You will see here that I am injecting our 'choose_from' function with different arrays.
I am doing this in an oder that creates a sentence that has some kind of sense to it. 
*/
let generated = `This ${choose_from(adjectives)} ${choose_from(things)} ${choose_from(verbs)} ${choose_from(state)}.`;

//You would output this to whichever system you were using to present the generated text.
console.log(generated);