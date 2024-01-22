# Simple test against android app

This test uses webdriverio, mocha, appium and uiautomator2.

## Setup

### Pre-requisites

1. Build and run the app in android studio: https://developer.android.com/studio 
1. Download and install JDK. Add to Path and JAVA_HOME
1. Node (recommend using nvm: https://github.com/nvm-sh/nvm)

### UI Tests

1. Run `npm install` in `QA-Automation-Android\hannahTest`
1. Add `C:\Users\[youruser]\AppData\Local\Android\Sdk` to environment variables Path and ANDROID_HOME
1. Ensure a device emulator is running in android studio (the tests will run against this)
1. Run `npx wdio run ./wdio.conf.js` 

Note: Appium may not stop running correctly so the process may need to be killed on the port.

## Issues
##### Bug found in v0.9
The label value does not increment from 1 to 2, instead jumps straight to MAX from 1 when the button is clicked.
##### MAX label value can be achieved from any label state
The acceptance criteria states that the label should be set to MAX when the button is clicked and the label is set to 2. However due to the else statement, the label could be in any state (for example 5) and be set to MAX upon button click. Currently the issue won't be surfaced due to the simplicity of the app however may become an issue as the app is expanded upon. 
