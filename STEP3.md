# Step 3: Create function locally

## What's this all about?
Before we send our Functions to the cloud we are going to create them locally. In a normal 'production code' scenario there is a lot more testing and rigour needed than that we will do today. This tutorial will give you the overall idea and help you integrate these steps into your normal workflow.

## Known gotchas

1. If you haven't followed the prerequistes or [Step 2](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/STEP2.md) and don't have the Azure Functions Core Tools installed you won't be able to do some of the things written here.

2. You will need to log into Azure through Visual Studio Code in this section. If you do not have your identity set up on the machine you are using you will need to use which ever method of authentication is required by your organisation.

## Log into Azure

You should see <img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/Step3_azure.JPG" alt="extensions" width="30"> on your side pannel. Click this and you should see the 'FUNCTIONS' panel available to you. If you are logged in you should see a list of subscriptions available to you.

I have redacted the subscription names I can see in the following screen grab. 

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/Step3_functions.JPG" alt="Azure functions extension" width="50%">
