# Clockify extension for Chrome and Firefox

Insert Clockify's "Start timer" button to any web page. 

[About Clockify →](https://clockify.me)

[List of integrations →](https://clockify.me/integrations)

## Add your own integration

Want to create an integration or improve an existing one? Awesome! Adding an integration is super easy. You need basic web programming skills (HTML, Javascript, Git) and can be done in a couple of hours.

Just fork the repo, make your changes, and send us a pull request. 

## Something needs fixing?

[Create an issue](https://github.com/SuperStar0718/Clockify-Browser-extension/issues) here on Github and our team will take a look the first change we get (which may take a few days, depending on our workload).

If you need the fix quicker, feel free to update the integration yourself and send us a pull request. We typically take care of them within a few days.

## Building and testing

### Chrome extension

1. Make sure you have Node and NPM installed on your system (see setup instructions below)
2. Clone the repository
3. Run `npm install --legacy-peer-deps`
4. Build Chrome extension and watch for changes by running: `npm run compile.dev.chrome`
5. Navigate to `chrome://extensions/`
6. Enable "Developer mode" (located in the top right corner)
7. Click "Load unpacked" and select the `chrome.dev/` folder that you've built


### Firefox extension

1. Make sure you have Node and NPM installed on your system (see setup instructions below)
2. Clone the repository
3. Run `npm install --legacy-peer-deps`
4. Build Firefox add-on and watch for changes by running: `npm run compile.dev.firefox`
5. Open a second terminal window and run `npm run run.dev.firefox` to load the extension into a temporary Firefox browser profile. This uses [`web-ext run`](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#web-ext-run) to open a new Firefox window with the extension loaded as a temporary addon and reloads the extension when changes are made to the compiled extension files.

You can also load the compiled extension into any Firefox profile by following these steps:

1. Navigate to `about:debugging`
2. Click "Load Temporary Add-on"
3. Select the `firefox.dev/manifest.json` file

### How adding an integration works

Add the url of the new tool in `/src/integrations/integrations.json`. Then, create a `/src/integrations/myapp.js` file. It in, define where the button appears and from which element it needs to pick up the description field. 

When the extension recognizes that you're on that url, it will load the necessary script. 

If you need an example, you can see how [Trello](/src/integrations/trello.js) is implemented.

Use `createButton()` so both the icon and "Start timer" is displayed. If there's not enough space, you can use `createSmallButton` (so only the icon is displayed).

Before sending us a pull request, make sure you test the integration in both Chrome and Firefox.
 


## Setup (Ubuntu)
```
sudo apt-get install nodejs
sudo npm install --legacy-peer-deps
```
## Setup (Windows)

- Install/Update Node.js to Latest: https://nodejs.org/en/download/
```
> npm install --legacy-peer-deps
```

## Setup (Mac)
```
sudo npm install --legacy-peer-deps
npm install @popperjs/core
```

## Compile
```
npm run compile.dev.chrome
npm run compile.dev.firefox
```
