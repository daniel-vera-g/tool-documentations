---
id: tmux
title: Tmux
---

## Change Window numbering

Change window numbering of window tmux

`move-window -s x -t y`

## tmux change default directory

attach -c /path/to/it/

<https://unix.stackexchange.com/questions/268386/how-to-change-default-new-window-directory-from-within-the-tmux>

## Copy text

> Use tmux buffer to copy text from terminal easily

1. Get into tmux `copy-mode`: `Prefix + [`.
2. Navigate beginning of text to select. Press `Space` or `Ctrl + Space`.
3. Press `Enter` when you're complete with your selection.
4. Get back into `insert` mode and paste selection: `Prefix + Enter`

- To copy to system clipboard press `Shift` before selecting and copying your selection.

References:

- <https://unix.stackexchange.com/questions/58763/copy-text-from-one-tmux-pane-to-another-using-vim>
- <https://superuser.com/questions/196060/selecting-text-in-tmux-copy-mode>
- <https://superuser.com/questions/1336762/how-do-i-copy-paste-from-the-system-clipboard-in-tmux-in-xterm-on-linux>
- Use other key bindings for copy mode and vim mode pasting: <https://unix.stackexchange.com/questions/450184/in-tmux-how-to-set-shortcut-for-copy-mode>
- Vim mode: <https://sanctum.geek.nz/arabesque/vi-mode-in-tmux/>
- <https://www.rushiagr.com/blog/2016/06/16/everything-you-need-to-know-about-tmux-copy-pasting-ubuntu/>

## Show time on tmux

> `Prefix + t`

# Scroll in Tmux

- Ctrl-b then `[` then you can use your normal navigation keys to scroll around (eg. Up Arrow or PgDn)
- Use vi-mode: `shift + k` or `shift + j`
- Back in insert through `enter`

<https://superuser.com/questions/209437/how-do-i-scroll-in-tmux>

<!-- # Copy and paste text Tmux

> Alternatively use vim keys outlined in tmux.conf file

1. Enter copy mode: Ctrl-b then `[`
2. Navigate to the text to be copied
3. Select by doing: `Space`
4. End selcting by doing: `Ctrl + W`
5. Press `Enter` or go to other tmux window
6. Paste with: `Ctrl+b, ]`

<https://unix.stackexchange.com/questions/58763/copy-text-from-one-tmux-pane-to-another-using-vim>
<http://www.rushiagr.com/blog/2016/06/16/everything-you-need-to-know-about-tmux-copy-pasting/> -->

<https://awhan.wordpress.com/2010/06/20/copy-paste-in-tmux/>

# Equally balance tmux split panes

1. select-layout even-vertical: `Ctrl+b, Alt+2`
2. select-layout even-horizontal: `Ctrl+b, Alt+1`

https://unix.stackexchange.com/questions/32986/how-do-i-equally-balance-tmux1-split-panes

# Jump to specific window

> `C-b q`

- <https://unix.stackexchange.com/questions/136631/how-to-switch-directly-to-a-pane-in-tmux>
