/*
Welcome to a comments based tutorial of a simple markov model in JavaScript.
Does this count as Machine Learning? Yes it does.
*/

/////////////////////////////////
// READING THE DATA
/////////////////////////////////

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

/////////////////////////////////
// BUILDING THE MODEL
/////////////////////////////////

//initialise the model to an empty object. It's going to be a dictionary. JavaScript is magic.
let model = {};

//now loop the paragraphs
all_paragraphs.forEach(p=>{
    let lines = p.split(/[\.\!\?]/);//I am doing this to get rid of . and also, it works in sentences. 
    lines.forEach(l=>{//This is when things get exciting.
        //Split the line into words, get rid of pesky commas and brackets and semi-colons, 
        //trim the words, make them all lower case and filter out empty words
        let words = l.split(/\s/).map(w=>w.replace(/[\(,\);]/,'').trim().toLowerCase()).filter(w=>w!=='');
        words.forEach((w,i)=>{//There is a lot of looping here.
            //Because we take each word and it's NEXT word we make sure we don't fall off the end of the array. The last word doesn't have anything following it anyway.
            //If the model[w] has an array, then push the next word onto it. If not, create a new array with the next word in it.
            if(i<words.length-2)model[w]?model[w].push(words[i+1]):model[w]=[words[i+1]];
        });
    });
});

//This will write the model out to the terminal.
//What you will notice is that, because the text sample is short, there are a lot of words with only one word following. 
//console.log(model); //uncomment this to dump out the model
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

/////////////////////////////////
// SERIALISING THE MODEL
/////////////////////////////////

//let serialised_model = JSON.stringify(model,2);
//console.log(serialised_model);
//You can write this model out to a file if you want to use it later.
//fs.writeFileSync("model file path",serialised_model);
//You would load it back in with
//model = JSON.parse(fs.readFileSync("model file path"));

/////////////////////////////////
// USING THE MODEL
/////////////////////////////////

//We are going to take our trigger word from the model so it is 'definitly there'.
//If the word wasn't there, we wouldn't get a sentence.
//There are various techniques for getting the 'closest' word. But I am not going into that now.
let all_words = Object.getOwnPropertyNames(model);//Unique list of words in the text. Neat!
let random_word = () =>all_words[Math.floor(Math.random()*all_words.length)];
let trigger_word = random_word();//Or that choose_from function from before.
console.log(`Trigger word: ${trigger_word}`);

//How long do we want the sentence to be?
let sentence_length = 10;//10 words seems enough for now.
let sentence = [];
for(var i=0;i<sentence_length;i++){//OLD SCHOOL FOR LOOP 💕
    //Add the trigger word, the first one on the first loop.
    sentence.push(trigger_word);
    //Pick the next trigger word randomly from the following words in the model.
    //If there isn't a word following that trigger word (it came at the end of a sentence) then pick another one at random.
    trigger_word = model[trigger_word]?model[trigger_word][Math.floor(Math.random()*model[trigger_word].length)]:random_word();
}
//Join the parts of our sentence together with spaces.
let our_sentence = sentence.join(' '); 
//Write our sentence out with an initial capital and a full stop at the end.
console.log(`${our_sentence.slice(0,1).toUpperCase()}${our_sentence.slice(1)}.`,'\n');

/* Here are some examples of what I got...
Trigger word: heavy
Heavy shower upon them as inferior to a huge volcanic. 

Trigger word: Punch
Punch I sat on earth as I watched keenly and. 

Trigger word: plans
Plans against anything manlike on the light creeping zenithward towards. 

Trigger word: an
An enormous velocity towards midnight of the political immensely excited. 

*/