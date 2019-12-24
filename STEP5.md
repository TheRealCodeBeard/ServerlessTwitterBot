# Step 5: Build the Logic App

## What's this all about?
In this step we will create a Logic App. A Logic App is a low code / no code serverless solution that is similar to [Power Automate (Flow)](https://flow.microsoft.com/). This powerful automation tool can be used to quickly build the 'connective tissue' of Serverless solutions. We are using the Logic App to do the following things:

1. Create a recurrant schedule. Azure takes responsibility for running that schedule for you and keeps a log of sucess and failure. 

2. Call the function we created in [Step 4](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/STEP4.md) to generate some content.

3. Post that generated content to Twitter for all the world to see.

## Known gotchas

1. You will need to authorise access to Twitter so make sure you have the log in details handy if they are not already stored in your browser. 

2. As noted in the [README](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/README.md) if you are planning on setting up a new Twitter account for this project that will require a new email address.