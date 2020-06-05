---
title: Bash/Unix learnings
authors: Daniel VG
left-header: Bash
right-header: \today
lang: en
---

# General linux questions

## Install .tar.* applications

### Install directory structure linux

1. By package manager -> `/usr/local` or `/opt`

<https://unix.stackexchange.com/questions/127076/into-which-directory-should-i-install-programs-in-linux>
<https://askubuntu.com/questions/25961/how-do-i-install-a-tar-gz-or-tar-bz2-file>
<https://askubuntu.com/questions/6897/where-to-install-programs>
<https://askubuntu.com/questions/1148/when-installing-user-applications-where-do-best-practices-suggest-they-be-loc?noredirect=1>
<https://superuser.com/questions/757269/where-to-install-programs-in-arch-linux>

Create .desktop files: <https://www.maketecheasier.com/create-desktop-file-linux/>

## Unplug USB command line

> Umount & eject

1. Get Usb device name: `lsblk`
2. Umount device: `sudo umount [device-id]`
3. Eject device: `sudo eject [device-id]`

<https://unix.stackexchange.com/questions/35508/eject-usb-drives-eject-command>
<https://www.tecmint.com/find-usb-device-name-in-linux/>
<https://unix.stackexchange.com/questions/178638/eject-safely-remove-vs-umount>
<https://www.linuxquestions.org/questions/linux-newbie-8/is-there-a-linux-eqivalent-to-safely-remove-usb-4175604332/>
<https://unix.stackexchange.com/questions/290336/safely-remove-usb-from-linux-device>
<https://unix.stackexchange.com/questions/35508/eject-usb-drives-eject-command>

## Get Size directory or file

> Use `-h` to use human readable format

1. `ls` for files:

```
ls -l filename /* Size of the file*/
ls -l *        /* Size of All the files in the current directory */
ls -al *       /* Size of All the files including hidden files in the current directory */
ls -al dir/    /* Size of All the files including hidden files in the 'dir' directory */
```

2. `du` for directories:

```
du -sh directory_name    /* Gives you the summarized(-s) size of the directory in human readable(-h) format*/
du -bsh *                /* Gives you the apparent(-b) summarized(-s) size of all the files and directories in the current directory in human readable(-h) format*/
```

<https://stackoverflow.com/questions/11720079/how-can-i-see-the-size-of-files-and-directories-in-linux>
<https://superuser.com/questions/94217/why-ls-and-du-show-different-size>
<https://unix.stackexchange.com/questions/371238/what-is-the-difference-between-file-size-in-ls-l-and-du-sh>

## Remove everything except one file

> Use `fd` search functionality

`fd -E [FILE-TO-EXCLUDE] [DIRECOTORY] -x rm {}`

See fd: <https://github.com/sharkdp/fd>

## Move everything except a file/directory

> Use bash extglob or use fd command to execute on files

`mv ~/Linux/Old/!(Tux.png) ~/Linux/New/`

<https://stackoverflow.com/questions/670460/move-all-files-except-one>
<https://unix.stackexchange.com/questions/63969/move-all-files-to-a-new-directory-excluding-that-directory>

## npm list all global packages

`npm list -g --depth 0`

## Add multiple lines to bash scripts in terminal

> Add \ at the end of the line

## Format drives

> Use `mkfs` tool

1. Identify volume: `df -h`
2. unmount device: `sudo umount /dev/sdc1`
3. Format with specified file system: `mkfs.vfat -F 32 /dev/sdb1`

<https://wiki.ubuntuusers.de/Formatieren/>
<https://tecadmin.net/format-usb-in-linux/>

## /media vrs \mnt

> /media is where the system mounts removable media, and /mnt is for you to mount things manually.

<https://askubuntu.com/questions/22215/why-have-both-mnt-and-media<Paste>

## tmp folder

> Put files to be deleted after specific time

The default setting that tells your system to clear /tmp at reboot is held in the /etc/default/rcS file. The value we’ll look at is TMPTIME.

<https://askubuntu.com/questions/20783/how-is-the-tmp-directory-cleaned-up>

##  Battery management

> Use TLP and PowerTOP

### PowerTOP

> Manage TLP settings

1. `sudo Powertop --auto-optimize` -> If good, change in `/etc/default/tlp` config file.

### Sources

* <https://www.2daygeek.com/tlp-increase-optimize-linux-laptop-battery-life/ | TLP - An Advanced Power Management Tool That Improve Battery Life On Linux Laptop | 2daygeek.com>
* <http://tipsonubuntu.com/2018/11/18/quick-tip-improve-battery-life-ubuntu-18-04-higher/ | [Quick Tip] Improve Battery Life in Ubuntu 18.04 / Higher - Tips on Ubuntu>
* <https://vitux.com/improving-battery-life-in-ubuntu-with-tlp/ | Improving Battery Life in Ubuntu with TLP>
* <https://askubuntu.com/questions/1078939/ubuntu-18-04-battery-life | power management - Ubuntu 18.04 battery life - Ask Ubuntu>
* <https://medium.com/@tomwwright/better-battery-life-on-ubuntu-17-10-4588b7f72def | Better Battery Life on Ubuntu 17.10 - Tom Wright - Medium>
* <https://www.2daygeek.com/powertop-monitors-laptop-battery-usage-linux/ | PowerTOP - Monitors Power Usage and Improve Laptop Battery Life in Linux | 2daygeek.com>
* <https://www.omgubuntu.co.uk/2019/05/slimbook-battery-optimizer-ubuntu | A Handy Battery Optimizer App for Ubuntu Laptops - OMG! Ubuntu!>
