# Step 7: Live Twitter Bot!

## What's this all about?
Now we have a unique tweet capability we need to reactivate the Logic App to make our Twitter bot live. 

## TL;DR
- Reactivate your Logic App in the Azure Portal.
- Write some more interesting Tweet generating code.

## Known gotchas

1. Writing code to generate interesting tweets is a rabbit hole. A really fun one... but still a rabbit hole.

## Re-Enable your Logic App

Navigate back to your Logic App in Azure and click 'Enable'. This won't run your Logic App unless you happen to do it _just_ before the recurrance trigger is due to run.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/20_1_enable.JPG" alt="Enable" width="75%">

You will notice that the 'Run Trigger' button is now enabled. Click this, then click 'Recurrance' as that is the tigger you wish to run.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/20_2_run_trigger.JPG" alt="Run trigger" width="75%">

When that has run (it should succeed) navigate to the Twitter account you are tweeting through and you should see a tweet that was just generated.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/20_3_the_tweet.JPG" alt="Success" width="75%">

**SUCCESS!** You now have a fully CI/CD Node.js based Twitter bot!

## Generating content automatically.

_Be Warned, this is a rabbit hole of fun. Many hours can be spent working out what to do with automatically generated content. Especially when Machine Learning gets involved._

### Example 1

I have created an 'advanced' Twitter bot called [@maps_pixel](https://twitter.com/maps_pixel). This uses the [canvas](https://www.npmjs.com/package/canvas) package to create pixel-art images of maps that use [cellular automata](https://en.wikipedia.org/wiki/Cellular_automaton) type functions to generate the map data. This was inspired by the [Forest-Fire model](https://en.wikipedia.org/wiki/Forest-fire_model). Can find the repo of code [here](https://github.com/TheRealCodeBeard/gentown).

They look like this ...

<img src="https://github.com/TheRealCodeBeard/gentown/blob/master/images/map.png" alt="Map">

### Example 2

If you chose to explore the above twitter account you may notice that the bot also generates a description of the map. 

```
Welcome to Weatherpiddlepool (Population 60,456).
'Prince Zuna McKilama' died in 892 at the age of 85, since then this shocking place has seen far-reaching plague.
Forgotten for their theatre, the Klaoffosama elders are often described as revolting.
```

You will notice that this is high grade social media nonsense!

