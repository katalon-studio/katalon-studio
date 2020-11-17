
## Create your first test case

<details><summary>with Windows Recorder</summary>

1. To start recording a Windows action, Click the **Record Windows Action** icon on the main toolbar of Katalon Studio.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/introduction-desktop-app-testing/Windows_Record_Action.png" width="600.5" height="65">

2. The Windows Recorder dialog box is displayed. Specify the information at the **CONFIGURATIONS** section.

* **Configuration**: where you can view and edit the `WinAppDriver URL` and `Desired Capabilities`.

* **Application File**: the absolute path to the `Windows Executable File (*.exe)` of the testing machine. For Windows users, click **Browse...** button to locate the application file.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/record-windows-actions/Record-step2.png" width="402" height="144">

    The **Start** button is enabled after the Application File text box is filled.

    Click **Start** when you're done with the settings.

3. The specified Windows application is deployed and opened on a testing machine.

4. The **Screen View** dialog box is displayed to show the current screenshot of your application on the testing machine.

    All the Windows objects in that screenshot are analyzed and organized in a tree at the **Screen Objects** section.

    Click on any object in that tree and it's highlighted in the Screen View accordingly.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/record-windows-actions/highlighted.png">

5. Select an element, then specify an action to perform at the **Possible Actions** section.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/record-windows-actions/actions.png" width="299" height="147">

6. All of the specified actions above are recorded at the **Recorded Actions** section.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/record-windows-actions/step-6.png" width="424" height="193">

   In **Captured Objects**, you can view all elements captured during the recording session. Here you can customize the locator of a captured object by modifying it in the Locator tab of **Object Properties** and clicking **Highlight** to verify if the new locator correctly identifies the intended object.

7. You can stop the application or start another application if needed. To reload the **Screen View** as well as **Screen Objects**, simply click on the **Refresh Screen** button.\
    When you’re done with recording, click **OK** to save the recorded actions in Katalon Studio.

8. You will be prompted to save the captured objects in the Object Repository of Katalon Studio. Choose an existing folder or create a new one, then click **OK** to continue.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/record-windows-actions/Step9.png" width="267" height="258">

9. When you finish your recording session, export the  recorded steps to a new test case.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/record-windows-actions/Export-new-TC.png" width="494" height="197">

10. Recorded objects and actions are saved in the test case.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/record-windows-actions/test-case.png" width="609" height="191">

</details>

<details><summary>with Native Windows Recorder (available for Katalon Studio Enterprise users)</summary>

* You need an active **Katalon Studio Enterprise** license
* This feature is supported on **Windows only**

1. Right-click on the Windows Recorder icon and select **Native Windows Recorder** to open the Native Windows Recorder windows.

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/native-windows-recorder/open.png">

2. The **Native Windows Recorder** dialog box is displayed. Specify the information at the CONFIGURATIONS section.

   **Application File**: the absolute path to the Windows Executable File (*.exe) on the testing machine. Click the **Browse...** button to locate the application file.

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/native-windows-recorder/app-file.png">

   To start a UWP application, the application's execute file should be:

   * *ApplicationID* if your app is published on Microsoft store
   * *PackageFamilyName!Application ID* if your app is still in development.

3. Click **Start** deploy and open the specified Windows application.
   
   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/native-windows-recorder/action-bar.png">

4. When you hover over an element of the AUT, Katalon Studio highlights the identified object with a red rectangle.

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/native-windows-recorder/hover-highlight.png">

5. When you perform an action on the AUT, the action is recorded in the **Recorded Actions** section. The list of available actions is the same as Katalon Studio's built-in keywords. You can add any action, call another test case, and/or use Custom Keywords.

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/native-windows-recorder/recorded-actions.png">

6. All of the specified actions above are recorded at the **Recorded Actions** section.

   In **Captured Objects**, you can view all elements captured during the recording session. Here you can customize the locator of a captured object by modifying it in the **Locator** tab of **Object Properties**. The captured objects’ locators are their absolute XPaths.

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/native-windows-recorder/captured-objects.png">

7. When you’re done with recording, click **OK** to save the recorded actions in Katalon Studio.
8. You will be prompted to save the captured objects in the Object Repository of Katalon Studio. Choose an existing folder or create a new one, then click **OK** to continue.

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/record-windows-actions/Step9.png" width="267" height="258">

9. When you finish your recording session, export the recorded steps to a new test case.

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/record-windows-actions/Export-new-TC.png" width="494" height="197">

10. Recorded objects and actions are saved in the test case.

    <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/record-windows-actions/test-case.png" width="609" height="191">

</details>