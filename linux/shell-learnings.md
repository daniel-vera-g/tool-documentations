---
title: Bash/Unix learnings
authors: Daniel Vera Gilliard
left-header: Bash
right-header: \today
lang: en
---

# When to use {}

> The `{}` in `${}` are useful if you want to expand the variable foo in the string

* <https://hacker-tools.github.io/shell/>
* <https://stackoverflow.com/questions/8748831/when-do-we-need-curly-braces-around-shell-variables>

# When to use [] and ()

1. `[]` : The opening bracket `([)` is an alias for the test command which performs all the tests and returns 0 for true or something else for false. The "if" reacts only to the return value of the test command. The closing bracket tells test where the expression ends. The double brackets `([[)` are a bash built in and can replace the external call to test.

<https://stackoverflow.com/questions/11796751/what-does-do-in-bash>

2. `()`: Calls subshell

<https://stackoverflow.com/questions/11796751/what-does-do-in-bash>

# Use fasd instead of cd

```
alias a='fasd -a'        # any
alias s='fasd -si'       # show / search / select
alias d='fasd -d'        # directory
alias f='fasd -f'        # file
alias sd='fasd -sid'     # interactive directory selection
alias sf='fasd -sif'     # interactive file selection
alias z='fasd_cd -d'     # cd, same functionality as j in autojump
alias zz='fasd_cd -d -i' # cd with interactive selection
j -> cd ...
```

# rsync vrs cp

> Use rsync, which skips already copied files

# fd instead of find

If the -x/--exec option is specified alongside a command template, a job pool will be created for executing commands in parallel for each discovered path as the input. The syntax for generating commands is similar to that of GNU Parallel:

* {}: A placeholder token that will be replaced with the path of the search result (documents/images/party.jpg).
* {.}: Like {}, but without the file extension (documents/images/party).
* {/}: A placeholder that will be replaced by the basename of the search result (party.jpg).
* {//}: Uses the parent of the discovered path (documents/images).
* {/.}: Uses the basename, with the extension removed (party).

## Examples

```bash
# Convert all jpg files to png files:
fd -e jpg -x convert {} {.}.png

# Unpack all zip files (if no placeholder is given, the path is appended):
fd -e zip -x unzip

# Convert all flac files into opus files:
fd -e flac -x ffmpeg -i {} -c:a libopus {.}.opus

# Count the number of lines in Rust files (the command template can be terminated with ';'):
fd -x wc -l \; -e rs
```

# rg/fzf instead of grep

## `rg`

* <https://github.com/BurntSushi/ripgrep/blob/master/GUIDE.md>

## `fzf`

* fzf will launch interactive finder, read the list from STDIN, and write the selected item to STDOUT: `find * -type f | fzf > selected`
* Using the finder
	* CTRL-J / CTRL-K (or CTRL-N / CTRL-P) to move cursor up & down

# tldr instead of man

> Better explanation of commands + examples

# Use maker to find commands

1. `Ctrl + space` find command
2. `Ctrl + t` remove variable

# Improve at shell scripting

1. Apply existing tools to particular problems

* <https://www.johndcook.com/blog/2019/02/18/command-line-wizard/?utm_source=hackernewsletter&utm_medium=email&utm_term=fav>

# Use Hub for git

```
# clone your own project
$ hub clone dotfiles
→ git clone git://github.com/YOUR_USER/dotfiles.git

# clone another project
$ hub clone github/hub
→ git clone git://github.com/github/hub.git

# open the current project's issues page
$ hub browse -- issues
→ open https://github.com/github/hub/issues

# open another project's wiki
$ hub browse mojombo/jekyll wiki
→ open https://github.com/mojombo/jekyll/wiki
```

<https://hub.github.com/>

# Great articles

1. <https://hookrace.net/blog/linux-desktop-setup/?utm_source=hackernewsletter&utm_medium=email&utm_term=fav>
2. <http://richardmavis.info/so-long-macbook-hello-again-linux?utm_source=hackernewsletter&utm_medium=email&utm_term=fav#cmus>
3. <https://news.ycombinator.com/item?id=19253072>
4. <https://nickjanetakis.com/blog/i-tried-linux-as-my-main-dev-environment-but-was-forced-back-to-windows>

# Install .tar.* applications

## Install directory structure linux

1. By package manager -> `/usr/local` or `/opt`

<https://unix.stackexchange.com/questions/127076/into-which-directory-should-i-install-programs-in-linux>
<https://askubuntu.com/questions/25961/how-do-i-install-a-tar-gz-or-tar-bz2-file>
<https://askubuntu.com/questions/6897/where-to-install-programs>
<https://askubuntu.com/questions/1148/when-installing-user-applications-where-do-best-practices-suggest-they-be-loc?noredirect=1>
<https://superuser.com/questions/757269/where-to-install-programs-in-arch-linux>

Create .desktop files: <https://www.maketecheasier.com/create-desktop-file-linux/>

# Unplug USB command line

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

# Get Size directory or file

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

# Remove everything except one file

> Use `fd` search functionality

`fd -E [FILE-TO-EXCLUDE] [DIRECOTORY] -x rm {}`

See fd: <https://github.com/sharkdp/fd>

# npm list all global packages

`npm list -g --depth 0`

# Move everything except a file/directory

> Use bash extglob or use fd command to execute on files

`mv ~/Linux/Old/!(Tux.png) ~/Linux/New/`

<https://stackoverflow.com/questions/670460/move-all-files-except-one>
<https://unix.stackexchange.com/questions/63969/move-all-files-to-a-new-directory-excluding-that-directory>

# Add multiple lines to bash script

> Add \ at the end of the line

# Format drives

> Use `mkfs` tool

1. Identify volume: `df -h`
2. unmount device: `sudo umount /dev/sdc1`
3. Format with specified file system: `mkfs.vfat -F 32 /dev/sdb1`

<https://wiki.ubuntuusers.de/Formatieren/>
<https://tecadmin.net/format-usb-in-linux/>

# /media vrs \mnt

> /media is where the system mounts removable media, and /mnt is for you to mount things manually.

<https://askubuntu.com/questions/22215/why-have-both-mnt-and-media<Paste>

# Best format USB

```
https://www.maketecheasier.com/choose-filesystem-for-usb-drive/ | ²How to Choose a Filesystem for Your USB Drive - Make Tech Easierhttps://www.itechtics.com/fat32-exfat-ntfs-best-file-system/ | ³FAT32, exFA
T Or NTFS! Which Is The Best File System?https://www.howtogeek.com/731
78/what-file-system-should-i-use-for-my-usb-drive/ | ⁴What File System Should I Use for My USB Drive?https://askubuntu.com/questions/141013/xfs-or-ext4-on-
external-hard-drive | ⁵filesystem - XFS or ext4 on external hard drive - Ask Ubuntuhttps://shahidhussain.com/best-file-system-for-your-usb-external-drive/ | ⁶Best
 file system for your USB external drive – Shahid Hussainhttps://w
 ww.google.com/search?client=ubuntu&channel=fs&q=format+to+exfat+linux&ie=utf-8&oe=utf-8 | ⁷format to exfat linux - Google-Suchehttps://www.giga.de/do
 wnloads/windows-10/tipps/exfat-oder-ntfs-welches-format-wofuer/ | ⁸exFAT oder NTFS: Welches Format wofür?
```

# Marker

* Ctrl-space: search for commands that match the current written string in the command-line.
* Ctrl-k (or marker mark): Bookmark a command.
* Ctrl-t: place the cursor at the next placeholder, identified by '{{anything}}'
* marker remove: remove a bookmar

# Scroll in Tmux

* Ctrl-b then `[` then you can use your normal navigation keys to scroll around (eg. Up Arrow or PgDn)
* Use vi-mode: `shift + k` or `shift + j`
* Back in insert through `enter`

<https://superuser.com/questions/209437/how-do-i-scroll-in-tmux>

# Copy and paste text Tmux

> Alternatively use vim keys outlined in tmux.conf file

1. Enter copy mode: Ctrl-b then `[`
2. Navigate to the text to be copied
3. Select by doing: `Space`
4. End selcting by doing: `Ctrl + W`
5. Press `Enter` or go to other tmux window
6. Paste with: `Ctrl+b, ]`

<https://unix.stackexchange.com/questions/58763/copy-text-from-one-tmux-pane-to-another-using-vim>
<http://www.rushiagr.com/blog/2016/06/16/everything-you-need-to-know-about-tmux-copy-pasting/>
<https://awhan.wordpress.com/2010/06/20/copy-paste-in-tmux/>

# tmp folder

> Put files to be deleted after specific time

The default setting that tells your system to clear /tmp at reboot is held in the /etc/default/rcS file. The value we’ll look at is TMPTIME.

<https://askubuntu.com/questions/20783/how-is-the-tmp-directory-cleaned-up>

