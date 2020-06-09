---
id: tabs-buffers-windows
title: Vim buffer,tabs & windows
---

## Buffers

> buffer in Vim is an open instance of a file.

* Saved somewhere in Memory
* List all Buffers in current screen: `:ls`
* Open buffer: `:buffers`
	* The first column is the unique number identifying the buffer.
	* The second is the set of attributes.

Buffer commands:

1. Switch between buffers: `:bnext`
2. Open next buffer in list: `:bnext` & `:bprevious`
3. Open all avalaible buffers: `:ball`
4. Execute operation on all open buffers: `:bufdo %s/search_tearm/replace_term/g | update`
5. Close buffer: `:bdelete`

Useful commands:

1. zz - Center the current line within the window
1. zt - Bring the current line to the top of the window
1. zb - Bring the current line to the bottom of the window

## Windows

> viewport onto a single buffer

Open new window:

* `:split { + filename}` -> `:sp`
* `:vsplit { + filename}` -> `:vsp`


Useful commands:

1. :new [filename] - Open a new window above the current windowG
1. :vnew [filename] - Open a new window beside the current window
1. :split <filename> - Edit the specified file in new window above the current window
1. :vsplit <filename> - Edit the specified file in a new window beside the current window
1. <Ctrl-w>h,j,k,l - Navigate to the window in the given direction

## Tab

> collection of one or more windows(Group windows in useful way)

Useful commands:

1. :tabnew - Open a new tab
1. :tabedit <filename> - Edit the file with the provided name in a new tab
1. gt - Go to next tab open
1. gT - Go to previous tab
1. <Ctrl-w>T - Break the current window out to a new tab

## Sources

* <http://www.miriamtocino.com/articles/vim-buffers-tabs-windows-and-modes>
