## Set up Mobile testing on Windows and macOS

Expand each section to view its details. 

<details><summary>On Windows machine</summary>

1. Supported Environments on Windows machine: 

* Appium: 1.12.1 onwards.
* Android: 6.x onwards (official releases).
* You can only test an **iOS** application using **macOS**. 

2. Install Appium, follow [these steps](http://appium.io/docs/en/about-appium/getting-started/#installing-appium).

* Make sure you install Node.js into a location where you have full **Read** and **Write** permissions.

3. Set up your devices

* Turn on the phone's developer mode. Go to **Settings** > **Developer options**, enable:

   - USB debugging – Debug mode when USB is connected 
   - Install via USB – Allow installing apps via USB
   - USB debugging (Security Setting) – Allow granting permissions and simulating input via USB debugging 

* Connect your Android phone to your computer via a USB cable.
* Confirm to accept/trust the device.

4. Install Android SDK: Katalon Studio will detect and ask you to install Android SDK automatically if your current machine doesn't have it.

See also: 

* [Set up Mobile testing on Windows](https://docs.katalon.com/katalon-studio/docs/mobile-on-windows.html)
* [Troubleshoot automated mobile testing](https://docs.katalon.com/katalon-studio/docs/troubleshooting-automated-mobile-testing.html)

</details>

<details><summary>On macOS machine</summary>

Supported environments on macOS machine

* Appium: 1.12.1 onwards
* Android: 6.x onwards
* iOS: 9.x onwards

> **Note**:
>
> Some emulators have already supported Appium through their installations. Thus, if you want to run an application on an emulator, check your emulators' settings before proceeding with the Appium installation.

### For Android applications

1. Install [Appium](http://appium.io):

* Install NodeJS
* `npm install -g appium`

2. Set up devices:

* Turn on the phone's developer mode (go to **Settings** > **Developer options**).
* Connect your Android Phone to your computer via a USB cable. Just confirm if prompted to accept/trust the device.
* Install Android SDK: Katalon Studio will detect and ask you to install Android SDK automatically if your current machine doesn't have it.

### For iOS applications

1. Install the following required components, including:

* Appium v1.12.1 or newer
* Xcode 10.2 or newer
* Command-line tool for Xcode
* Carthage 0.33 or newer
* ios-deploy 1.9.4 or newer
* ios-webkit-debug-proxy 1.8.4 or newer
* libimobiledevice 1.2.0 or newer
* usbmuxd 1.0.10 or newer
* WebDriverAgent

   Click [here](https://docs.katalon.com/katalon-studio/docs/mobile-on-macos.html#reference-installation-guide) for the installation guide.

2. Set up the devices

* Connect your iOS Devices to your computer via a USB cable. Confirm to accept/trust the phone.
* If you want to execute your tests using Safari on iOS (mobile browser), make sure Web Inspector is turned on for Safari (Settings > Safari > Advanced > Web Inspector)
* Enable the service UI automation on the device.
* Connect the iOS device to Xcode.
* On the iOS device, go to **Settings** > **Developer** > turn on **UIAutomation**

See also: 

* [Set up Mobile testing on macOS](https://docs.katalon.com/katalon-studio/docs/mobile-on-macos.html)
* [Troubleshoot automated mobile testing](https://docs.katalon.com/katalon-studio/docs/troubleshooting-automated-mobile-testing.html)
</details>