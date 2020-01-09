# Step 7: Live Twitter Bot!

## What's this all about?
Now we have a unique tweet capability we need to reactivate the Logic App to make our Twitter bot live. 

## TL;DR
- Reactivate your Logic App in the Azure Portal.
- Write some more interesting Tweet generating code.

## Known gotchas

1. Writing code to generate interesting tweets is a rabbit hole. A really fun one... but still a rabbit hole.

## Reenable your Logic App

Navigate back to your Logic App in Azure and click 'Enable'. This won't run your Logic App unless you happen to do it _just_ before the recurrance trigger is due to run.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/20_1_enable.JPG" alt="Success" width="75%">

You will notice that the 'Run Trigger' button is now enabled. Click this, then click 'Recurrance' as that is the tigger you wish to run.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/20_2_run_trigger.JPG" alt="Success" width="75%">

When that has run (it should succeed) navigate to the Twitter account you are tweeting through and you should see a tweet that was just generated.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/20_3_the_tweet.JPG" alt="Success" width="75%">

SUCCESS! You now have a fully CI/CD Node.js based Twitter bot!

