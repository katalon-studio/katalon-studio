### Tackle Object Selector Flakiness with Self-Healing Mechanism

When the self-healing mode is activated (by default), and Katalon Studio fails to find an object with its default locator, Katalon tries other pre-configured locators associated with that object.

Once the broken object is self-healed, the alternative locator finding the object is used for that particular broken Test Object for the remaining execution. This helps shorten execution time by preventing self-healing from taking place again and again with the same broken object.

> Read full document [here](https://docs.katalon.com/katalon-studio/docs/self-healing.html)
>
> A sample project is available [here](https://github.com/katalon-studio/self-healing-demo#self-healing-sample-project).

