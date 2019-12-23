# Step 4: Push the Function to Azure

## What's this all about?
What we are about to do in this step is not good practice, but it is possible. We are going to deploy directly from Visual Studio Code to Azure. This is something the Azure Functions Extension allows you to do. In [Step 6](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/STEP6.md) we will learn how to do this on push with a GitHub action.

## Known gotchas

1. It is hard to predict what issues you might have with your connection to Azure. In all cases I have met there have been no issues but if there are restrictions on what you can deploy you may become blocked at this point. 

## Deploy to Azure

On the Azure Functions panel click the Deploy To Azure button.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/10_0_deploy_to_azure.JPG" alt="Deploy to Azure" width="50%">

You will then be asked to choose your subscription. Choose the one you are using for this tutorial.

You will then be asked to choose a Function App or create a new one. Unless you know where you are deploying, choose 'Create new Function App in Azure'.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/10_3_choose_or_create_function_app.JPG" alt="Create function app" width="50%">

You will be prompted to give it a unique name. This name will also be used to create a resource group and other resources related to the function app. If the name is long (like the one I show here) it will be truncated. So make sure you don't use a word with rude truncation possibilities!

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/10_5_give_it_a_unique_name.JPG" alt="Name it" width="50%">

Choose Node.js version 10.x

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/10_6_node_version_10.JPG" alt="Version it" width="50%">

Choose a region

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/10_7_region.JPG" alt="Version it" width="50%">

The extension will set up all the stuff and tell you when it's done.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/10_9_finished.JPG" alt="Version it" width="50%">

