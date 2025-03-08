# How to Install `script.js` on Safari Using Stay for Safari

## Introduction
TDX creates a new window whenever you click a new Ticket/User/etc. This script, paired with "Stay" will block the new window from appearing and will instead open it within the current window in a container.

## Prerequisites
- macOS with Safari installed
- Stay for Safari extension installed from the [App Store](https://apps.apple.com/us/app/stay-for-safari/id1591620171)
- `script.js` file ready for installation

## Steps

### 1. Install Stay for Safari
1. Open the [Stay for Safari](https://apps.apple.com/us/app/stay-for-safari/id1591620171) page on the App Store.
2. Click on the "Get" button to download and install the extension.
3. Once installed, open Safari and go to `Preferences` > `Extensions`.
4. Enable the Stay for Safari extension.

### 2. Open Stay for Safari
1. Click on the Stay for Safari icon in the Safari toolbar.
2. Select "Manage Scripts" from the dropdown menu.

### 3. Add `script.js`
1. In the Stay for Safari interface, click on the "+" button to add a new script.
2. Enter a name for your script (e.g., `My Custom Script`).
3. Copy the contents of your `script.js` file and paste it into the script editor.
4. Specify the URL patterns where you want the script to run (e.g., `*://*/*` for all websites).

### 4. Save and Activate the Script
1. Click the "Save" button to save your script.
2. Ensure that the script is enabled by checking the toggle switch next to the script name.

### 5. Verify the Script
1. Navigate to a website where your script should run.
2. Open the browser console (Option + Command + C) to verify that the script is executing correctly.

## Conclusion
You have successfully installed and activated `script.js` on Safari using the Stay for Safari extension. You can now enjoy the custom functionality provided by your script on the specified websites.

For more information and advanced usage, refer to the Stay for Safari [documentation](https://apps.apple.com/us/app/stay-for-safari/id1591620171).
