/*
    FIRST EXAMPLE
*/

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

/*
    SECOND EXAMPLE
    This is a little more advanced as it uses an asynchoronous https call.
*/
let https = require('https');//We need to make an HTTPS call
let my_app_id = "<your_app_id_from_openweathermap.org>";//This is a key to use the API

let describe_weather = function(where,appid){
    //This is the URL for the location search weather information
    let weather_api = `https://samples.openweathermap.org/data/2.5/weather?q=${where}&appid=${appid}`;

    //These are my libraries for the generated part
    let warm_things = ['a coat','your hat and gloves','something warm','scarf'];
    let cold = ['cold','freezing','nippy','wintery','chilly'];
    let liquid = ['water','liquids','fluids'];

    //This function uses the libraries and the kelvin temperature to generate a sentence.
    let describe_temp = function(kelvin){
        if(kelvin<273.15) return `it is ${choose_from(cold)} out there`;
        else if (kelvin<283.15) return `take ${choose_from(warm_things)}`;
        else if (kelvin<293.15) return 'layers would be a good idea';
        else if (kelvin<303.15) return 'it is quite pleasant';
        else if (kelvin<313.15) return `drink plenty of ${choose_from(liquid)}`;
        else return 'I would probably stay in side';
    };

    //This method takes the weather data and generates the full description.
    let process_weather = function(weather_results){
        let description = weather_results.weather[0].description;//Here I am reading what we got back from the API
        let temp = weather_results.main.temp;//And the temperature
        let temp_describe = describe_temp(temp);
        let generated_description = `Today in ${where} there is ${description}. It is ${temp} kelvin, ${temp_describe}.`;
        console.log(generated_description);
    };
    
    //This calls the API and constructs it's answer.
    https.get(weather_api,response=>{
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            process_weather(JSON.parse(body));
        });
    });
};

//If you are going to use this in an Azure Function you need to deal with it's asynchonous nature
//This would involve putting the RESPONSE construction in the process_weather function.
describe_weather('London',my_app_id);
