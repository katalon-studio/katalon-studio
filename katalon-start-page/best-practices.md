## Understand Self-healing mechanism

When the self-healing mode is activated (by default), and Katalon Studio fails to find an object with its default locator, Katalon tries other pre-configured locators associated with that object.

If Katalon Studio finds an object by any of the alternative selectors, the test continues running. Once the broken object is self-healed, the alternative locator finding the object is used for that particular broken Test Object for the remaining execution. This helps shorten execution time by preventing self-healing from taking place again and again with the same broken object.

When the test execution is over, Katalon Studio will propose replacing the broken locator with the locator having found the object. Unless Katalon Studio can find the target object, depending on the [failure handling option](https://docs.katalon.com/katalon-studio/docs/failure-handling.html) that you have designed, the test execution may stop or keep going.

> Read full document [here](https://docs.katalon.com/katalon-studio/docs/self-healing.html)

**Requirements**

* Katalon Studio version 7.6 onwards
* An active Katalon Studio Enterprise license

> A sample project is available [here](https://github.com/katalon-studio/self-healing-demo#self-healing-sample-project).

### Capture objects with Recording/Spying

1. Since Self-healing is active by default, go to **Project/Settings/Test Design/Web UI** to choose the default selection method during spying/recording.
2. Capture objects and change the locators as your wish

### Execute the test case

1. Go to **Project/Settings/Self-Healing/Web UI** to choose selection methods for self-healing execution and their order.
2. Run your test case

### Approve the replacement

1. Have a look at **Self-Healing Insights** and discover if there is any broken locator that has been recovered by Self-healing at runtime.
2. Verify if the found object is the one you expect
3. Approve the replacement to make it permanent
