# Step 1: Set up GitHub Repository
## What's this all about?
In this step you will create a GitHub repository (repo), open it in Visual Studio Code and commit a change to the README file to make sure everything is working as intended.

## Known gotchas

1. At certain points you may need to authenticate if you haven't done a particular linking step before. This will require you to remember your password and/or use the MFA system in GitHub.

2. I am showing screen grabs from the GitHub desktop app here. If you are more used to using the command line, please do as you see fit. The results will be the same. 

## Create the repo
In your GitHub account click 'New'. At the time of writing it looks like this. 

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/00_create_a_repo.JPG" alt="create new repository" width="50%">

You will then be presented with a form to fill out. I am initialising here with a Node .gitignore file as we will be writing in Node for this project. I have also asked for a README file. Everyone loves documentation!

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/01_create_a_repo.JPG" alt="create new repository" width="50%">

You will end up with a vanilla repo that looks like this

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/02_the_repo.JPG" alt="the repository" width="50%">

Clicking on the 'Clone or download' button will give you the various options for getting the repo linked locally.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/03_clone_local.JPG" alt="clone locally" width="30%">

You can clone local via the command line if you wish, I use GitHub Desktop because it's super easy. Clicking 'Open in Desktop' will make your browser try and open GitHub Desktop and this will result in this dialog.

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/04_github_desktop_clone.JPG" alt="GitHub Desktop Clone Local" width="50%">

Choose where you want to work and click 'Clone'. Once you have done this you can close GitHub Desktop we won't need that any more. Maybe it would have been easier to use the command line after all?

## Open the repo is VS Code

In Visual Studio Code choose Open Folder and navigate to the folder of the cloned repo. 

<img src="https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/05_open_in_vs_code.JPG" alt="GitHub Desktop Clone Local" width="30%">

## Testing everything is linked up

On the VS Code side pannel you will see this when you have changes to commit.

![random noise](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/05_Changes.JPG)

Clicking on it brings up the source control pannel

![random noise](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/05_2_Changes.JPG)

Use the command line if you like but you can also commit here

![random noise](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/05_3_Ready_to_commit.JPG)

On the bottom bar you will see the sync button showing how far you are ahead of the remote master

![random noise](https://github.com/TheRealCodeBeard/ServerlessTwitterBot/blob/master/screengrabs/04_VS_Code_Sync_Button.JPG)
