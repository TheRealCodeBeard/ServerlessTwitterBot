/*
Welcome to a comments based tutorial of a simple markov model in JavaScript.
Does this count as Machine Learning? Yes it does.
*/

//This is Nodes file system handling. We _require_ it.
const fs = require('fs');

//this is actually some of 'war of the worlds' because it is now out of copyright!
let data_file = './some_text.txt'; 

// Wouldn't I normally need more data than this. Yes, you would. But you can do this with a small amount of data.
let all_text = fs.readFileSync(data_file,'utf8');

//This will dump it all out to the console if you run node simple_markov.js or the debug console if you press F5. But don't do that.
//console.log(all_text); //comment it out unless you want to see the text.

// Each of the lines in this file is a paragraph.
// So lets chop it up like that for looping
let all_paragraphs = all_text.split('\r\n');

//initialise the model to an empty object. It's going to be a dictionary. JavaScript is magic.
let model = {};

//now loop the paragraphs
all_paragraphs.forEach(p=>{
    let lines = p.split(/[\.\!\?]/);//I am doing this to get rid of . and also, it works in sentences. 
    lines.forEach(l=>{//This is when things get exciting.
        //Split the line into words, get rid of pesky commas and brackets and semi-colons, trim the word and filter out empty words
        let words = l.split(/\s/).map(w=>w.replace(/[\(,\);]/,'').trim()).filter(w=>w!=='');
        words.forEach((w,i)=>{//There is a lot of looping here.
            //Because we take each word and it's NEXT word we make sure we don't fall off the end of the array. The last word doesn't have anything following it anyway.
            //If the model[w] has an array, then push the next word onto it. If not, create a new array with the next word in it.
            if(i<words.length-2)model[w]?model[w].push(words[i+1]):model[w]=[words[i+1]];
        });
    });
});

//This will write the model out to the terminal.
//What you will notice is that, because the text sample is short, there are a lot of words with only one word following. 
console.log(model);
/* Here is a sample of what I get

{ ...
  fact: [ 'that' ],
  seventh: [ 'of' ],
  volume: [ 'of' ],
  accelerated: [ 'its' ],
  cooling: [ 'to', 'that', 'and' ],
  temperature: [ 'at', 'barely' ],
  which: [ 'life', 'to', 'their', 'he', 'the', 'so' ],
  air: [ 'and', 'is' ],
  water: [ 'and', 'with' ],
  all:
   [ 'that',
     'beyond',
     'had',
     'that',
     'around',
     'that',
     'their',
     'unsuspected' ]
... }

What you will notice is that 'all' has 'that' in it's array of following words 3 times.
"DEDUPLICATE" I hear you cry. But no. You don't want to deduplicate. Why?
Because the duplication means that the duplicated word is _more likely_ to be chosen from the array.
You will see this happening next. The arrays next to the keys represent an _implicit_ statistical model through duplication.
This is not memory efficient but it works. So... thats what we are doing. 

*/