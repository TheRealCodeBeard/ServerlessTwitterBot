# Step 6: Set up a GitHub Action

## What's this all about?
GitHub Actions is a great [CI/CD](https://en.wikipedia.org/wiki/CI/CD) framework that uses simple [YAML](https://en.wikipedia.org/wiki/YAML) files to automate the your workflow. It is like Logic Apps for CI/CD ... but it uses YAML instead of a graphical user interface.

There is huge depth to [GitHub Actions](https://github.com/features/actions) and you can read more there should you choose. We are going to do the absolute minimum to get our Node.js Function automatically deployed to Azure when we push the code to our GitHub repository. We will remain focused on the Function and we will not be automatically deploying the Logic App.

## Known gotchas

1. To be able to deploy to Azure from GitHub actions in this way you will need to be able to set up a [Service Principal](https://docs.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals) in your Azure subscription relating to your Functions App. Make sure that you have the ability to do this.

2. We will be setting up a Service Principal using the Cloud Shell capability within Azure. We will be copying from that command line security keys and details to paste into GitHub. If you choose to copy these into an intermediate location (notepad, VSCode for example) be careful not to save this or release it into the public repository. This would represent a security attack vector!

