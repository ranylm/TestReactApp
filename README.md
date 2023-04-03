# Instructions

## Installation:

1. Click the fork button on the top of this repo.
   ![image1](https://i.imgur.com/3782TsO.png)
2. Navigate to the forked repo in your repositories.
3. Click the green <>Code button.
4. Copy the link
   ![Step2](https://i.imgur.com/NNIETam.png)
5. Open Gitbash/Terminal. Navigate to the folder you want to store the repo on your local machine.

```
git clone [PASTE URL HERE NO SQUARE BRACKETS]
cd TestReactApp
npm install
```

-Finished! You now have a local copy of the repository, try 'signing' the CONTRIBUTORS.md file with your name.

## Running development server

Run this to load the website in your browser with live updates.

```
npm run dev
```

You can close the server with ctrl+c.
-Done! Open your browser, you can now view the website and any (local) changes to it in real time.

## Updating your Repo

Someone other than you has made changes to the repo, you'll need to download those changes. Open your Gitbash into the projects folder.
First 'link' your repository to the main one.

```
// You only need to run this once
git remote add upstream https://github.com/ranylm/TestReactApp.git
```

Now to download (or 'pull' from upstream) those changes into your (main) repository.

1. To update your repository just run the command below:

```
git pull upstream main
```

## Pushing your changes to the original repository

You've made some changes and want to share them with everybody lets push these changes to the original...except you don't own that repo, so you'll have to ask the owner(s) to pull your changes from your repo into theirs. Here's how.

Make sure you have staged(add), commited(commit), and pushed(push) your changes to your local repo. (Sign the CONTRIBUTORS.md)

1. First update your local repo with git pull as noted in [Updating your Repo](#updating-your-repo).
2. Go to the original repo (in this case https://github.com/ranylm/TestReactApp)
3. Click "Pull request"
   ![pull](https://i.imgur.com/Lxh3rK0.png)
4. Click compare across forks
   ![Compare](https://i.imgur.com/IuA1x9F.png)
5. Set the Base to the ranylm/TestApp repo and the Head to your own.
   ![basehead](https://i.imgur.com/a4Yaq1l.png)
6. Click "Create pull request"
   ![makerequest](https://i.imgur.com/1BA7Sn9.png)
7. Comment on what you did or are contributing/changing. Then click "Create Pull Request"
   ![makerequest](https://i.imgur.com/j6twh8d.png)
8. Done! All you have to do is wait. Your changes will have to be reviewed by the owner(s) of this repo who will either incorporate the change or provide feedback.
