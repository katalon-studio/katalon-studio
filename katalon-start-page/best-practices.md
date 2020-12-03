### Tackle Object Selector Flakiness with Self-Healing Mechanism

When the self-healing mode is activated (by default), and Katalon Studio fails to find an object with its default locator, Katalon tries other pre-configured locators associated with that object.

If Katalon Studio finds an object by any of the alternative selectors, the test continues running. Once the broken object is self-healed, the alternative locator finding the object is used for that particular broken Test Object for the remaining execution. This helps shorten execution time by preventing self-healing from taking place again and again with the same broken object.

When the test execution is over, Katalon Studio will propose replacing the broken locator with the locator having found the object. Unless Katalon Studio can find the target object, depending on the [failure handling option](https://docs.katalon.com/katalon-studio/docs/failure-handling.html) that you have designed, the test execution may stop or keep going.

> Read full document [here](https://docs.katalon.com/katalon-studio/docs/self-healing.html)
>
> A sample project is available [here](https://github.com/katalon-studio/self-healing-demo#self-healing-sample-project).

