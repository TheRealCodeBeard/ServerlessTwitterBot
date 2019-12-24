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

## What gets created on Azure?

If you log into the [Azure Portal](https://portal.azure.com) and you select your resource groups list <img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/azure_resource_groups.JPG" alt="Version it" width="50"> you will find one with a similar name to your Function App. You will see in the screen grab below that mine is called 'nonsensegeneratorfunctio' it has been made all lower case and truncated in length.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/11_1_what_is_in_azure_rg.JPG" alt="Version it" width="75d%">

You should see a list similar to the above in your resource group. An instance of Application Insights and a Storage account with a similar name to the resource group. An App Service containing your Function App and an App Service Plan related to the region you picked. 

For this tutorial you will only need to worry about the App Service containing your Function App. So go ahead and click on this now.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/11_2_function_app.JPG" alt="Version it" width="75%">

It should look something like this. In the Overview pannel you will see various control buttons, a status (that should be 'Running') some subscription and resource group details and the URL. This URL is important for two reasons. 

- Firstly it is why you needed to choose a globally unique name. If you visit this URL you will see a message relating to your Function App being up and running. 

- Secondly the sub domain name is the 'official' name of your function app. You will need this for creating the GitHub Action YAML workflow file later. So it's good to know where this is.

On the left hand pannel, expand the Function App and list of functions and click on the name of your actual Function you will see the boiler plate code. 

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/11_2_function_app_expand.jpg" alt="Version it" width="30%">

You will also see a message that tells you your app is read only.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/11_2_function_app_readonly.JPG" alt="Version it" width="75%">

This is due to the method of release we have used. We have released from Visual Studio Code. It is possible to write the Function directly in the Azure Portal. I wouldn't recomend this for anything other than testing or noodling about.

Click the Get function URL button that is next to the Run button on the code page.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/11_2_function_app_url_button.JPG" alt="Version it" width="50%">

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/11_2_function_app_url.JPG" alt="Version it" width="50%">

This gives you a choice of key (leave this as 'default (Function Key)' for now) and the URL. The box is small so you can't see the full extent of the URL here. It includes the authorisation key in a url parameter called 'code'. Click the copy button and open a new tab in your browser.

