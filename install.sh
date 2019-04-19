#!/bin/sh

#  Katalon Studio



package=Katalon_Studio_Linux.tar.gz

lowercase(){
    echo "$1" | sed "y/ABCDEFGHIJKLMNOPQRSTUVWXYZ/abcdefghijklmnopqrstuvwxyz/"
}

OS=`lowercase \`uname\``
KERNEL=`uname -r`
MACH=`uname -m`

if [ "$OS" == "darwin" ]; then
    OS=mac
    wget -O Katalon_Studio.dmg https://backend.katalon.com/download-lastest-version?platform=mac_64
    sudo hdiutil attach Katalon_Studio.dmg
    sudo cp -R /Volumes/Katalon\ Studio /Applications
    sudo hdiutil unmount /Volumes/Katalon\ Studio
    rm Katalon_Studio.dmg
else
    OS=`uname`
    if [ "${OS}" = "Linux" ] ; then
        wget -O $package https://backend.katalon.com/download-lastest-version?platform=linux_64
	mkdir -p /opt/katalonstudio
        tar -zxvf $package -C /opt/katalonstudio/
        ls
        rm $package
    fi
fi
