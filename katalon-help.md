## Version 7.8 (Beta) Highlights

### Time Capsule for Web UI

Katalon Studio **7.8** supports restoring the AUT to the state when the test fails due to locators not finding Web UI objects. This powerful capability allows you to open a "time capsule" for fixing broken objects, reducing reproduction effort, and cutting off time spent on troubleshooting and maintaining your test scripts. [Read more](https://docs.katalon.com/katalon-studio/docs/time-capsule.html)

<img alt="Capture Objects with Time Capsule" src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/time-capsule/click-help-78.png" width=100%>

### Coordinate-based Recording for Windows

With coordinates-based recording, Katalon Studio records an element's relative coordinates in addition to its selector. For instance, you want to click on the red X part to close a tab in Notepad. Katalon Recorder records the button's offsets (its relative coordinates to its top-left corner) as a set of parameters representing an X and Y offset, and save them in clickElementOffset. It uses them to identify the exact location to perform a click action during runtime.

In [Windows Recorder](https://docs.katalon.com/katalon-studio/docs/windows-recorder-tutorials.html), the two buttons, including **Click Element Offset** and **Right-click Element Offset** are added to **Possible Actions**.

In [Native Windows Recorder](https://docs.katalon.com/katalon-studio/docs/windows-recorder-tutorials.html), with the enabled **coordinate-based recording**, `click` and `rightClick` actions are recorded as `clickElementOffset` and `rightClickElementOffset` actions respectively. The following keywords are supported: 

* [[Windows] Click Element Offset](https://docs.katalon.com/katalon-studio/docs/windows-kw-click-element-offset.html)
* [[Windows] Right-click Element Offset](https://docs.katalon.com/katalon-studio/docs/windows-kw-rightclick-element-offset.html)

### Browser-based Video Recorder

With Screen Recorder, you can capture what's visible on the screen while with the [Browser-based Video Recorder](https://docs.katalon.com/katalon-studio/docs/screenshots-videos.html#browser-based-video-recorder), you can:

* **Record video of browser window only** (Even it's hidden behind another window)
* **Record video of Headless browser**: Headless Browser is a way to run browsers in a headless environment, popularly used for test automation and browser testing in CI/CD pipeline when you don't need a visible GUI. You can learn more about Headless Browser Execution in this [manual](https://docs.katalon.com/katalon-studio/docs/headless-browsers-execution.html).
* **Record videos of multiple browsers simultaneously**, for instance, parallel execution of Test Suite Collection.
