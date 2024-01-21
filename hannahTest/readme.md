# Simple test against android app

This test uses webdriverio, mocha, appium and uiautomator2.

## Setup

### Pre-requisites

1. Build and run the app in android studio: https://developer.android.com/studio 
1. Download and install JDK. Add to Path and JAVA_HOME
1. Node (recommend using nvm: https://github.com/nvm-sh/nvm)

### UI Tests

1. Run `npm install` in `QA-Automation-Android\hannahTest` 
1. Ensure a device emulator is running in android studio (the tests will run against this)
1. Run `npx wdio run ./wdio.conf.js` 

Note: Appium may not stop running correctly so the process may need to be killed on the port.

## Issues
Use release tags to swap between release v1.0 and v0.9
The issue noted is that the label value does not increment from 1 to 2, instead jumps straight to MAX.
This can be easily noted when comparing the release pull requests.