---
title: Unix searching tools
authors: Daniel VG
left-header: Unix searching tools
right-header: \today
lang: en-GB
---

# Find stuff on Linux

## Search tools

### find

> Searches in the real system

Example:

```bash
find /home/username/ -name "*.err"
```

Find files and directories:

```bash
find -type f -or -type d
```

Syntax:

```bash
find options starting/path expression
```

* Slower than locate, but has more options
* Traverser all directories in search for the pattern

* The default configuration for find will ignore symbolic links (shortcut files). If you want find to follow and return symbolic links, you can add the -L option to the command, as shown in the example above.
* find optimizes its filtering strategy to increase performance. Three user-selectable optimization levels are specified as -O1, -O2, and -O3. 

#### Use find with grep

> Combine find file search with greps pattern search

Example:

```bash
find . -type f -exec grep "example" '{}' \; -print
```

### locate

> Faster but not as powerful as find

* locate simply looks its database and reports the file location

### grep

> Search for specific term in file

Example: `grep This test.txt` -> Every line containing the word 'This'

* Use regular expressions to get the most out of it!

## Text processors

> Ability to remove, add and modify the text as well

### awk

> Used for data extraction & reporting

Example:

```bash
$ sed -i 's/cat/dog/' file.txt
# this will replace any occurrence of the characters 'cat' by 'dog'
```

* Make changes to a file with the help of regular expressions

### sed

> Stream editor

Example:

```bash
$ awk '{print $2}' file.txt
# this will print the second column of file.txt
```

## Ressources

* <https://stackoverflow.com/questions/7727640/what-are-the-differences-among-grep-awk-sed>
* <https://superuser.com/questions/199472/what-is-the-difference-between-locate-and-find-in-linux>
* <https://www.thegeekdiary.com/whats-the-difference-between-locate-and-find-command-in-linux/>
* <https://www.linode.com/docs/tools-reference/tools/find-files-in-linux-using-the-command-line/>
* <https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/4/html/Step_by_Step_Guide/s1-managing-locating.html>
* <https://www.digitalocean.com/community/tutorials/how-to-use-find-and-locate-to-search-for-files-on-a-linux-vps>
* <https://unix.stackexchange.com/questions/53734/find-both-regular-files-and-directories>