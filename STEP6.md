# Step 6: Set up a GitHub Action

## What's this all about?
GitHub Actions is a great [CI/CD](https://en.wikipedia.org/wiki/CI/CD) framework that uses simple [YAML](https://en.wikipedia.org/wiki/YAML) files to automate the your workflow. It is like Logic Apps for CI/CD ... but it uses YAML instead of a graphical user interface.

There is huge depth to [GitHub Actions](https://github.com/features/actions) and you can read more there should you choose. We are going to do the absolute minimum to get our Node.js Function automatically deployed to Azure when we push the code to our GitHub repository. We will remain focused on the Function and we will not be automatically deploying the Logic App.

## Known gotchas

1. To be able to deploy to Azure from GitHub actions in this way you will need to be able to set up a [Service Principal](https://docs.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals) in your Azure subscription relating to your Functions App. Make sure that you have the ability to do this.

2. We will be setting up a Service Principal using the Cloud Shell capability within Azure. We will be copying from that command line security keys and details to paste into GitHub. If you choose to copy these into an intermediate location (notepad, VSCode for example) be careful not to save this or release it into the public repository. This would represent a security attack vector!

## Create your Service Principal Secret

The first thing we need to do is to create the Service Principal as relates to our Function App. We need to paste this into GitHub so we can refer to it later.

In Azure click the Cloud Shell button in the top bar of the portal (next to the Search box right at the top of the window.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/17_1_cloud_shell.JPG" alt="Cloud SHell" width="50%">

Click this button and Cloud Shell will load at the bottom of the portal window. When this has finished you will end up with a cursor on a command line.

There are detailed instructions on the [GitHub](https://github.com/Azure/functions-action#using-azure-service-principle-for-rbac-as-deployment-credential) page relating to Service Principals. That you can read up on further should you wish to.

The template for the command you will be using is as follows

```
az ad sp create-for-rbac --name "myApp" --role contributor \
    --scopes /subscriptions/{subscription-id}/resourceGroups/{resource-group}/providers/Microsoft.Web/sites/{app-name} \
    --sdk-auth
```
This is a 'one line' command. But for ease it has been split over several lines with the \ character. What is going on in this command and what do you have to fill in?

`az` is the Azure Command Line administrative application. 

`ad` is the Active Directory command. Active Directory is the identity provider for Azure.

`sp` means Service Principal. This is the thing that we are creating. 

`create-for-rbac` lets the tool know we are creating the service principal for 'role based access control' (rbac).

Anything with '--' in front of it is a setting for the command.

`--name` What are you going to call this service principal? Fill in a sensible name between the "".

`--role contributor` This is the _role_ (see: rbac) that the service principal needs to be able to release the Function App on your behalf. This is the _role_ you are giving the GitHub action by providing it with this secret.

`--scopes` This setting gives the service specific access to a resource in azure. You will see here that there are sections between curley braces '{}'. These are the places you need to fill in the details of your app. 

In each case you need to replace the whole section including the '{}'.

`{subscription-id}` this is available from the Overview panel of your resource group.

`{resource-group}` this is the _name_ of your resource group. In my case this was the truncated, lowercase name of my app. 'nonsensegeneratorfunctio'

`{app-name}` this is the _name_ of your Function App. The easiest way to find this is on the Overview panel of the Function App in the URL. 

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/17_1_function_app_name.JPG" alt="URL name" width="75%">

The app name is the sub domain of this URL. The sub domain is the section between the '//' and the next '.'. In this case `nonsensegeneratorfunctionapp`. You will notice this is the name you gave for the Function App in lowercase and URL safe.

`--sdk-auth` means that the command line app is authenticated via SDK with the credentials you are logged into the portal with.

When you have filled in all those details (you may want to do this in Notepad or VSCode) you will need to copy this and paste it into the cloud shell. Pasting in the command should run it automatically. If it doesn't, hit return to execute. 

You will end up with a block of JSON that looks like this will the `<GUID>` sections filled in.

```JSON
  {
    "clientId": "<GUID>",
    "clientSecret": "<GUID>",
    "subscriptionId": "<GUID>",
    "tenantId": "<GUID>",
    (...)
  }
```

The `(...)` section represents some extral lines that provide various URLs and Endpoints. The block itself is about 12 lines long including '{}'. 

Copy the whole thing.

## Putting the Secret in GitHub

In your GitHub repository go to the Settings tab and Secrets section.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/17_2_where_to_put_secret.JPG" alt="Secret vault" width="75%">

Name your Secret `AZURE_CREDENTIALS_WIN` (you can name it anything, but this is the name we use later so keeping it the same is less work for you). Then paste your copied secret into the 'Value' box and click 'Add secret'

When you have done this, the secret is locked and you can only 'Remove' it. It's encrypted and no one can see it. Only Actions can use it. Very safe.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/17_4_secret_added.JPG" alt="Secret added" width="75%">

This was the most complicated bit of our whole process. If you have made it this far ... it's all plain sailing from here on in.