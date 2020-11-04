First, you need to install WinAppDriver. Refer to [Installing and Running Windows Application Driver](https://github.com/microsoft/WinAppDriver#installing-and-running-windows-application-driver) to install a WinAppDriver.

>Remember to enable **Developer Mode** on the testing machine. Refer to the [official guide](https://docs.microsoft.com/en-us/windows/uwp/get-started/enable-your-device-for-development) from Microsoft for instructions.

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/introduction-desktop-app-testing/dev-mode.png" width="305.5" height="">

## Set up Windows Application Driver on a local Windows 10 machine

There are two ways of installing the WinAppDriver on a local Windows 10 machine.

1. Open this folder `C:\Program Files (x86)\Windows Application Driver`, then double-click on **WinAppDriver.exe** file.

2. From the Katalon Studio toolbar, select **Tools > Windows > Install WinAppDrivers**. The **Windows Application Driver Setup** window will pop up. Follow the instructions to install the Windows Application Driver.

## Set up Windows Application Driver on a remote machine

* Open **Task Manager** -> Select **File** -> Create a new task
* Check `Create this task with administrative privileges` and enter `cmd` in the **Open** text box, then click the **OK** button.

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/introduction-desktop-app-testing/Set-up-1.png" width="476" height="171">

* Enter `cd` to folder `C:\Program Files (x86)\Windows Application Driver`.
* Enter `WinAppDriver.exe IP_Adress Port` \
    where: \
    *IP_Adress* is the public IP address of the remote machine \
    *Port* is the public port of the remote machine. By default, it should be 4723.

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/introduction-desktop-app-testing/Set-up-2.png" width="690" height="146">