---
title: Tmux
authors: Daniel VG
left-header: Tmux
right-header: \today
lang: en-GB
---

# Change Window numbering

Change window numbering of window tmux

`move-window -s x -t y`

# TMUX change default directory

attach -c /path/to/it/

<https://unix.stackexchange.com/questions/268386/how-to-change-default-new-window-directory-from-within-the-tmux>

# TODO

start panes at 0 -> Done?

# Copy text

> Use tmux buffer to copy text from terminal easily

1. Get into tmux `copy-mode`: `Prefix + [`.
2. Navigate beginning of text to select. Press `Space` or  `Ctrl + Space`.
3. Press `Enter` when you're complete with your selection.
4. Get back into `insert` mode and paste selection: `Prefix + Enter`

References:

* <https://unix.stackexchange.com/questions/58763/copy-text-from-one-tmux-pane-to-another-using-vim>
* <https://superuser.com/questions/196060/selecting-text-in-tmux-copy-mode>
