# Step 5: Build the Logic App

## What's this all about?
In this step we will create a Logic App. A Logic App is a low code / no code serverless solution that is similar to [Power Automate (Flow)](https://flow.microsoft.com/). This powerful automation tool can be used to quickly build the 'connective tissue' of Serverless solutions. We are using the Logic App to do the following things:

1. Create a recurrant schedule. Azure takes responsibility for running that schedule for you and keeps a log of sucess and failure. 

2. Call the function we created in [Step 4](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/STEP4.md) to generate some content.

3. Post that generated content to Twitter for all the world to see.

## Known gotchas

1. You will need to authorise access to Twitter so make sure you have the log in details handy if they are not already stored in your browser. 

2. As noted in the [README](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/README.md) if you are planning on setting up a new Twitter account for this project that will require a new email address.

## Create the Logic App

Go to your resource group (the one created in [Step 4](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/STEP4.md)) and click the '+ Add' button in the top bar of the Overview panel. 

In the 'Search the Marketplace' bar at the top of the 'New' panel type `Logic App` and click the matching search result. You will then be presented with a page with this at the top.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/13_1_create_logic_app.JPG" alt="Version it" width="75%">

Click 'Create' and you will get presented with the creation form.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/13_2_create_logic_app.JPG" alt="Version it" width="75%">

Give the Logic App a sensible name, make sure you are in the intended subscription, make sure to 'Use existing' Resource Group and select the one we created for this project. Choose the same region as you have been using all along and leave Log Analytics off for now. 

Then click 'Create' at the bottom. This will send Azure off to create that for you. When it is done you should see the Logic App in your resource group.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/13_3_in_resource_group.JPG" alt="Version it" width="75%">

Click on that and you will get presented with the 'First view' Logic Apps Designer panel. Click on 'Recurrence' in the 'Start with a common trigger' section.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/13_4_click_recurance.JPG" alt="Version it" width="75%">
