---
title: Tmux
authors: Daniel VG
left-header: Tmux
right-header: \today
lang: en-GB
---

# Tmux

## Change Window numbering

Change window numbering of window tmux

`move-window -s x -t y`

## TMUX change default directory

attach -c /path/to/it/

<https://unix.stackexchange.com/questions/268386/how-to-change-default-new-window-directory-from-within-the-tmux>

## Copy text

> Use tmux buffer to copy text from terminal easily

1. Get into tmux `copy-mode`: `Prefix + [`.
2. Navigate beginning of text to select. Press `Space` or  `Ctrl + Space`.
3. Press `Enter` when you're complete with your selection.
4. Get back into `insert` mode and paste selection: `Prefix + Enter`

* To copy to system clipboard press `Shift` before selecting and copying your selection.

References:

* <https://unix.stackexchange.com/questions/58763/copy-text-from-one-tmux-pane-to-another-using-vim>
* <https://superuser.com/questions/196060/selecting-text-in-tmux-copy-mode>
* <https://superuser.com/questions/1336762/how-do-i-copy-paste-from-the-system-clipboard-in-tmux-in-xterm-on-linux>
* Use other key bindings for copy mode and vim mode pasting: <https://unix.stackexchange.com/questions/450184/in-tmux-how-to-set-shortcut-for-copy-mode>
* Vim mode: <https://sanctum.geek.nz/arabesque/vi-mode-in-tmux/>
* <https://www.rushiagr.com/blog/2016/06/16/everything-you-need-to-know-about-tmux-copy-pasting-ubuntu/>

## Show time on tmux

> `Prefix + t`
