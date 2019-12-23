# Step 3: Create function locally

## What's this all about?
Before we send our Functions to the cloud we are going to create them locally. In a normal 'production code' scenario there is a lot more testing and rigour needed than that we will do today. This tutorial will give you the overall idea and help you integrate these steps into your normal workflow.

## Known gotchas

1. If you haven't followed the prerequistes or [Step 2](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/STEP2.md) and don't have the Azure Functions Core Tools installed you won't be able to do some of the things written here.

2. You will need to log into Azure through Visual Studio Code in this section. If you do not have your identity set up on the machine you are using you will need to use which ever method of authentication is required by your organisation.

## Log into Azure

You should see <img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/Step3_azure.JPG" alt="extensions" width="30"> on your side pannel. Click this and you should see the 'FUNCTIONS' panel available to you. If you are logged in you should see a list of subscriptions available to you.

I have redacted the subscription names I can see in the following screen grab. 

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/Step3_functions.JPG" alt="Functions panel" width="50%">

## Create a new project

Select the subscription you wish to use and Click the New Project button.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/06_create_function_project.JPG" alt="Create project" width="50%">

If you can't see this. Mouse over the 'FUNCTIONS' pannel and it should appear.

Next you will be taken through the steps to set up the projects. Remember this is being created locally so you won't be asked any Azure related questions yet.

The first step is to choose the repo folder that we set up in [Step 1](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/STEP1.md).

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/07_1_choose_your_repo_folder.JPG" alt="Choose repo folder" width="50%">

You will then be asked to select a language. You should choose the best language, JavaScript. We will be using this for the rest of the tutorial. If you wish to use a different language, carry on - but if it all goes wrong, I can't help you. The amount of code in this tutorial is _minimal_ so don't get hung up on this point.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/07_2_select_language.JPG" alt="Select JavaScript" width="50%">

The next choice is the type of trigger you want for your Function. If you want to go more indepth on triggers you can find documentation [here](https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings). For the purpose of this tutorial, a trigger is how the Azure Function is called. We are are going to use the HTTP trigger so we can call our Function over the web.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/07_3_choose_HTTP_trigger.JPG" alt="HTTP Trigger" width="50%">

You will now be asked to give your function a name. This will default to the type of trigger you used. It is at this point that you should give the function a sensible name that tells you something about what it does.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/07_4_give_sensible_name.JPG" alt="Sensible Name" width="50%">

Now, you will have to forgive me here, this isn't a detailed security tutorial. So I will ask you to select Function level authorisation at this time. You can look up the different levels another time.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/07_5_function_level_auth.JPG" alt="Auth" width="50%">

You may remember that in [Step 1](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/STEP1.md) we chose to add a .gitignore to our repo. Because of that the functions tooling will ask if you want to overwrite it. Hit yes. The functions tooling will add a whole bunch of files and things to ignore for you. Most of it you don't need to worry about now.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/07_6_overwrite_gitignore.JPG" alt="Overwrite ignore" width="50%">

## The local Function project

What will now appear in your Azure pannel is a local function project. The tooling will also open the index.js file for you.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/08_1_LocalFunctionProject.JPG" alt="Local Project" width="50%">

The folder structure should look something like this.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/08_2_FolderStructure.JPG" alt="Folder Structure" width="50%">

You will see how many .json settings files have been generated along with the package.json file, the overwritten .gitignore. The only file you really need to worry about is index.js that is where our minimal code will go. The default file expects name=foo in the GET parameters or POST body. Remember that when testing.

You can now run in Debug mode (as long as you have the Core Tools installed). This can be done with F5 or the Debug menu. A load of stuff will be spewed out on to the command line in the Terminal window when you do that. The line you are looking for is this...

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/09_2_f5_debug_run.JPG" alt="Web address" width="50%">

This is the URL of the locally running function. You don't need authentication, stick that URL in your browser and hit go. 

It will tell you you should add ?name=yourname on to the end like I mentioned above. You have a locally running function. Congratulations.

## Check point

Before we make any further changes we are going to check in the code to the repo.

Go to the source control <img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/05_Changes.JPG" alt="Changes made" width="30"> panel and check in your changes.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/10_1_check_in" alt="Changes" width="50%">

