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

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/13_1_create_logic_app.JPG" alt="Create logic app" width="30%">

Click 'Create' and you will get presented with the creation form.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/13_2_create_logic_app.JPG" alt="Fill in the form" width="30%">

Give the Logic App a sensible name, make sure you are in the intended subscription, make sure to 'Use existing' Resource Group and select the one we created for this project. Choose the same region as you have been using all along and leave Log Analytics off for now. 

Then click 'Create' at the bottom. This will send Azure off to create that for you. When it is done you should see the Logic App in your resource group.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/13_3_in_resource_group.JPG" alt="Find it in the resource group" width="75%">

Click on that and you will get presented with the 'First view' Logic Apps Designer panel. 

## Build the Logic App one block at a time

Click on 'Recurrence' in the 'Start with a common trigger' section.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/13_4_click_recurance.JPG" alt="Make it trigger with recurance" width="75%">

## Recurrence

This will take you to the full Designer view. With the Recurrence node open.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/14_1_recurance.JPG" alt="Recurrence settings" width="75%">

In this example I have set it to trigger once every hour. It's really up to you how often you trigger but you should think about two things:

1. Your audience on Twitter. Is you bot going to be so interesting that people want to see it's tweet more than once an hour?

2. Cost. If you are calling your Function on a consumption plan, how much are you going to spend calling it once every 30 seconds? Best to slow it down. We can always trigger the Logic App manually to test it.

## Call your Function

Click the '+ New step' button and search for an HTTP step.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/14_2_http.JPG" alt="HTTP" width="75%">

Click the green HTTP step and choose 'HTTP/HTTP' in Actions.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/14_3_http_again.JPG" alt="HTTP again" width="75%">

We now need to fill in the details.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/14_4_http_details.JPG" alt="Rename" width="75%">

First up 'Method'. We should set this to GET. GET is the most straight forward of HTTP calls. You _get_ whatever is behind the URL you give. Remember when we built the function we set the _body_ to be a piece of text? Well, that is what we are _getting_ in this case.

The URL is the URL of the Function we created. Don't ask me why the Functions App says 'Get Function URL' and Logic Apps says 'URI'. For our purposes, right now, they are the same thing.

Now, you will remember we talked about 'code' being included in the Function URL as the method of Authentication. You need to take that off the Function URL and add it to the 'Queries' section.

`https://nonsensegeneratorfunctionapp.azurewebsites.net/api/GenerateNonsense` my Function URL becomes this. (Note there is no ? or & or anything following 'GenerateNonsense').

I then take the section after the ? `code=aCollectionOfLettersAndNumbers==` and remove `code=` to leave me with the code itself `aCollectionOfLettersAndNumbers==`. I need to keep the `==` on the end as that is part of the code. Then, as in the screen grab, I put 'code' as the query left hand key box and the code (the things with == on the end) in to the right hand value box.

Leave the Body and Authentication box as they are.

Use the '...' menu to Rename it something useful (you will be glad you did later).

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/14_4_2_http_rename.JPG" alt="Rename" width="75%">

## Sending to the Twitters

Add a step and search for 'Twitter'

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/14_5_twitter.JPG" alt="Twitter" width="75%">

Choose the 'Post a twet' action.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/14_6_post_a_tweet.JPG" alt="Post a tweet" width="75%">

You will then be prompted to 'Sign in', do that

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/14_7_sign_in.JPG" alt="Sign in" width="75%">

This brings up a seperate browser window (depending on many things, this might appear behind your current browser window, keep an eye out for that).

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/14_8_twitter_auth.JPG" alt="Twitter auth" width="30%">

What you will notice here is that you are authorising 'Microsoft Azure Logic Apps' to access the Twitter account - not a custom app that belongs to the Twitter account. At the bottom you will see all the authorisations you are making. These relate to all the things Logic Apps can automate for you. Authorising Logic Apps is far easier than building and authorising your own app to access the Twitter API for you.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/14_9_twitter_ready.JPG" alt="Authorised Twitter" width="75%">

When you have successfully authorised, your 'Post a tweet' action will look like this. Notice that at the bottom it tells you which connection is being used. 

Click on 'Add new parameter' and choose 'Tweet text'. You could just type a message here, but we are going to use the text our Function generates.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/14_10_body_of_http.JPG" alt="Dynamic content" width="75%">

Add dynmaic content and select the 'body' of your HTTP action. Remember how we gave it a sensible name above? Well that is now the name you are looking for. Click 'show more' next to it and choose 'Body'. Remember how the _body_ is what we set in the Function and we _get_ that _body_ in the HTTP action.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/14_11_ready" alt="Dynamic content" width="75%">

We are now ready to Tweet!