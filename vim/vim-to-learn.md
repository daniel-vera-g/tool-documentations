---
title: Vim to learn
authors: Daniel VG
left-header: Vim
right-header: \today
lang: en-GB
---

# Vim to learn

> Create cheat sheet(Terminal, Vim...) & every week learn new commands & integrate it in workflow = Each week a lesson to integrate


## Find and replace

* Autocomplete -> Ctrl + N
* Multicursor -> Ctrl + V => Select => I => Insert charcter => Esc

* <http://vim.wikia.com/wiki/Search_and_replace>

## Registers

> `k` is the used register

* Copy the current line into register: `"kyy`
* Append to register `"Kyy`
* Paste from register `"kp"
* Access current registers: `:reg`
* Help: `:help registers`

## General

* <Ctrl> + G To show status from file 
* When typing a  :  command, press CTRL-D to see possible completions.               
 Press <TAB> to use one completion.                                                 

## Use the action + motions mindset

> operator   [number]   motion

where:
  operator - is what to do, such as  d  for delete
  [number] - is an optional count to repeat the motion
  motion   - moves over the text to operate on, such as  w (word),
             $ (to the end of line), etc.

* Use count to maximize commands like deleting

## Undo

* `U` to undo last line
* <Ctrl> + R to redo

## Multiline editing

1. Ctr + <v>
2. Select lines
3. Hit I"<Esc>

<https://stackoverflow.com/questions/11784408/vim-multiline-editing-like-in-sublimetext>

## Select blocks of text

1. press ma to place mark a
2. :<line> to go to line
3. <Shift> + v for visual mode
4. `a to select back to mark a 

<https://stackoverflow.com/questions/7406949/vim-faster-way-to-select-blocks-of-text-in-visual-mode>

## Custom commands Visual Studio

* gh - show the hover tooltip.
* gb - add an additional cursor at the next place that matches *
* Add numeric prefixes before commands
* gd - jump to definition.
* gq - on a visual selection reflow and wordwrap blocks of text, preserving commenting style. Great for formatting * documentation comments.
* gb - adds another cursor on the next word it finds which is the same as the word under the cursor.
* af - visual mode command which selects increasingly large blocks of text. For example, if you had "blah (foo [bar 'ba|z'])" then it would select 'baz' first. If you pressed af again, it'd then select [bar 'baz'], and if you did it a third time it would select "(foo [bar 'baz'])".
* gh - equivalent to hovering your mouse over wherever the cursor is. Handy for seeing types and error messages * without reaching for the mouse!

## Left-Right motions

* g0	to first character in screen line (differs from "0" when lines wrap)
* g$	to last character in screen line
* gm	to middle of the screen line

## Up-down motions

* G	goto line N (default: last line), on the first non-blank character
* %	goto line N percentage down in the file; N must be given, otherwise it is the % command
* H 	goto first line in file
* L 	goto last line in file
* M 	goto middle of the file
* gk	up N screen lines (differs from "k" when line wraps)
* gj	down N screen lines (differs from "j" when line wraps)

## Text object motions

* e N words forward to the end of the Nth word
* ) N sentences forward
* ( N sentences backward
* } N paragraphs forward
* { N paragraphs backward

## Pattern searches

* `/{pattern}[/[offset]]<CR>`  search forward for the Nth occurrence of {pattern}
* `?{pattern}[?[offset]]<CR>` search backward for the Nth occurrence of {pattern}
* Search forward `/` & search backward `?`
* Go to next result forward `n`and backwards `N`
* Go to next same word `*` and `#` backwards
* <Ctrl> + O go back where you come from
* <Ctrl< + I go forward where you come from
* Type  %  to find a matching ),], or } -> Debugging


## Scrolling

*  CTRL-E	window N lines downwards (default: 1)
*  CTRL-D	window N lines Downwards (default: 1/2 window)
*  CTRL-F	window N pages Forwards (downwards)
*  CTRL-Y	window N lines upwards (default: 1)
*  CTRL-U	window N lines Upwards (default: 1/2 window)
*  CTRL-B	window N pages Backwards (upwards)

## Inserting text

* A	append text at the end of the line (N times)
* O	open a new line above the current line, append text (N times)
* o 	open a new line below the current line(& go there)
* Ctrl-j/k deletes blank line below/above, and Alt-j/k inserts.

## Deleting text

* x	delete N characters under and after the cursor
* X	delete N characters before the cursor
* D	delete to the end of the line (and N-1 more lines)
* d$ delete until end of line
* db deletes current to beginning of current word
* dG Deletes all lines from current to last
* dgg Deletes all line from current to first
* dipO<Esc> on a blank line deletes it and all adjacent blank lines.+ opens a new empty line, then goes back to normal mode. 
	* OR: cip<Esc>
	* Without insert mode: vipJ

## Replace Text

The change operator works in the same way as delete.

    c    [number]   motion

* rx Replace character
* ce To change until the end of a word
* cw replace word
 
 To change every occurrence of a character string between two lines,
 type   :#,#s/old/new/g    where #,# are the line numbers of the range
                           of lines where the substitution is to be done.
 Type   :%s/old/new/g      to change every occurrence in the whole file.
 Type   :%s/old/new/gc     to find every occurrence in the whole file,
                           with a prompt whether to substitute or not.

* Type a capital  R  to replace more than one character.

## Undo/Redo commands

*  CTRL-R	redo last N undone changes	As above.

## Execute external command

* :! + external command

## Select all Text

1. gg
2. dG

https://codeyarns.com/2011/04/18/how-to-delete-all-lines-of-file-in-vim/

## Delete specific lines

100dd

:1,19d

https://unix.stackexchange.com/questions/88185/delete-100-lines-from-vi-editor-using-single-command

## Select range of lines

10GV12G
10GV2j

## Delete all lines

Type gg to move the cursor to the first line of the file, if it is not already there.
Type dG to delete all the lines.

## Go to definition

* gd will take you to the local declaration.
* gD will take you to the global declaration.
* g* search for the word under the cursor (like *, but g* on 'rain' will find words like 'rainbow').
* g# same as g* but in backward direction.
* gg goes to the first line in the buffer (or provide a count before the command for a specific line).
* G goes to the last line (or provide a count before the command for a specific line).

# Multicursor editing

1. The `.` command
2. macros
3. visual block

<https://vi.stackexchange.com/questions/4307/multiple-cursors-at-desired-location>
<https://medium.com/@schtoeffel/you-don-t-need-more-than-one-cursor-in-vim-2c44117d51db>
<https://stackoverflow.com/questions/11784408/vim-multiline-editing-like-in-sublimetext>
<https://engagor.github.io/blog/2018/02/21/why-vim-doesnt-need-multiple-cursors/>

## Paste multiple times

For example: 30p

## Use Macros

1. Normal mode + qq(start)
2. Do pattern
3. Normal mode + q(stop)
4. Paste with .(Also multiple times)

## Use NErdtree

t: Open the selected file in a new tab
i: Open the selected file in a horizontal split window
s: Open the selected file in a vertical split window
I: Toggle hidden files
m: Show the NERD Tree menu
R: Refresh the tree, useful if files change outside of Vim
?: Toggle NERD Tree's quick help

https://medium.com/usevim/nerd-tree-guide-bb22c803dcd2

## Folding

* zr: reduces fold level throughout the buffer
* zR: opens all folds
* zm: increases fold level throughout the buffer
* zM: folds everything all the way
* za: open a fold your cursor is on
* zA: open a fold your cursor is on recursively
 zc: close a fold your cursor is on

## Select all Text

1. gg
2. dG

https://codeyarns.com/2011/04/18/how-to-delete-all-lines-of-file-in-vim/

## Delete specific lines

100dd

:1,19d

https://unix.stackexchange.com/questions/88185/delete-100-lines-from-vi-editor-using-single-command

## Select range of lines

10GV12G
10GV2j

## Delete all lines

Type gg to move the cursor to the first line of the file, if it is not already there.
Type dG to delete all the lines.

## Go to definition

* gd will take you to the local declaration.
* gD will take you to the global declaration.
* g* search for the word under the cursor (like *, but g* on 'rain' will find words like 'rainbow').
* g# same as g* but in backward direction.
* gg goes to the first line in the buffer (or provide a count before the command for a specific line).
* G goes to the last line (or provide a count before the command for a specific line).

# Multicursor editing

1. The `.` command
2. macros
3. visual block

<https://vi.stackexchange.com/questions/4307/multiple-cursors-at-desired-location>
<https://medium.com/@schtoeffel/you-don-t-need-more-than-one-cursor-in-vim-2c44117d51db>
<https://stackoverflow.com/questions/11784408/vim-multiline-editing-like-in-sublimetext>
<https://engagor.github.io/blog/2018/02/21/why-vim-doesnt-need-multiple-cursors/>

## Paste multiple times

For example: 30p

## Use Macros

1. Normal mode + qq(start)
2. Do pattern
3. Normal mode + q(stop)
4. Paste with .(Also multiple times)

## Use NErdtree

t: Open the selected file in a new tab
i: Open the selected file in a horizontal split window
s: Open the selected file in a vertical split window
I: Toggle hidden files
m: Show the NERD Tree menu
R: Refresh the tree, useful if files change outside of Vim
?: Toggle NERD Tree's quick help

https://medium.com/usevim/nerd-tree-guide-bb22c803dcd2

## Folding

* zr: reduces fold level throughout the buffer
* zR: opens all folds
* zm: increases fold level throughout the buffer
* zM: folds everything all the way
* za: open a fold your cursor is on
* zA: open a fold your cursor is on recursively
* zc: close a fold your cursor is on
* zC: close a fold your cursor is on recursively
 zC: close a fold your cursor is on recursively

## Source

* <https://github.com/VSCodeVim/Vim/blob/master/ROADMAP.md>
* vimtutor
