# ServerlessTwitterBot
Code along instructions for building 'My first Twitter bot with Azure Serverless and GitHub Actions'.

## Who is this for?

### Main Audience 
Those with some development experience. You have an idea about what Serverless is and that Continuous Integration/Continuous Deployment is useful in the overall code workflow. You are interested in how modern low-code/no-code solutions can be set up in a cloud native way to accelerate the delivery of ideas to production. You would rather not write boilerplate code for auth and glue.

For this audience, this walk through will be 'straight forward' but will give you a thin slice through the full stack to a live result.

### Secondary Audience
Those who are early in the code/tech/cloud journey and want to stretch themselves on a project that allows them to experience cloud native low-code/no-code tools for the automation of tasks - such as posting on Social Media.

For this audience, this walk through will be 'hard' because there are a lot of concepts covered in a short space of time. However, if you want to stretch yourself I hope I have covered all the details for you to follow to actualy make it work!

## Prerequisites

To be able to build along with this tutorial you will need.

1. **An Azure account** ([find out more](https://azure.microsoft.com/)). This walk through expects some level of Azure experience. While I have given a lot of detail and screen grabs of the various stages your experience will help you move through much quicker. If you are setting up a Free Azure account for the first time you may wish to do some general tutorials first to understand how the portal works and some base terminology (for example, 'resource' and 'resource group').
2. **A GitHub account** ([find out more](https://github.com/)). It is very stragith forward to set up a Github account but the concepts of source control are only covered in passing in this walk through. I hope to have covered 'what you need' here but you may wish to explore other learning materials, like [First Day On GitHub](https://lab.github.com/githubtraining/paths/first-day-on-github) if you want more context.
3. **A Twitter account** ([find out more](https://twitter.com)). You can use your personal Twitter account if you want to. To create a new Twitter account will require it's own associated email address. If you don't have a second account you could look at signing up for one at [Outlook.com](https://outlook.com/)
4. **Visual Studio Code** ([find out more](https://code.visualstudio.com/)).
5. **Visual Studio Code Azure Functions Extension** ([find out more](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)).
6. **Azure Functions core tools** ([find out more](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local)).

## Steps

1. Set up GitHub Repo ([details](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/STEP1.md)). This is the repository for the project. It is where the code will be stored but also where the CI/CD GitHub actions will run. 
2. Install the Functions Extension for VSCode ([details](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/STEP2.md)). This extension allows you to easily work with Azure Functions from within VSCode.
3. Create the Function locally ([details](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/STEP3.md)). In this step we learn how we can test everything works without having to use the cloud. It shortens the development cycle feedback loop.
4. Push the Function to Azure ([details](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/STEP4.md)). In this step we make the function live so it can be used by the Logic App.
5. Build the Logic App ([details](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/STEP5.md)). In this step we learn how to use Logic App to automate the calling of our Function without code.
6. Set up a GitHub Action ([details](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/STEP6.md)). In this step we learn how to set up a GitHub action in our repo from step 1 to automate the release of our code.
7. Live Twitter Bot! (details)

## Architecture

We are looking to create this...

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/architecture.JPG" alt="architecture diagram">