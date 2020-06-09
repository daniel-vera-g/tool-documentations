---
id: vim-built-in-docs
title: Vim built in features
---

## Go to definition

* gd will take you to the local declaration.
* gD will take you to the global declaration.
* g* search for the word under the cursor (like *, but g* on 'rain' will find words like 'rainbow').
* g# same as g* but in backward direction.
* gg goes to the first line in the buffer (or provide a count before the command for a specific line).
* G goes to the last line (or provide a count before the command for a specific line).

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


## General

* <Ctrl> + G To show status from file
* When typing a  :  command, press CTRL-D to see possible completions and press <TAB> to use one completion.

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


## Markers

> Set places to quickly get back

1. mk - mark current position (can use a-z)
1. 'k - move to mark k
1. d'k - delete from current position to mark k
1. 'a-z - same file
1. 'A-Z - between files

<https://www.cs.oberlin.edu/~kuperman/help/vim/markers.html>

## Folding

1. `zf{motion}` Fold(+motion)
2. `zd` Removing folding
3. `zo` Open folding
4. `zc` Close folding

[Docu](https://vim.fandom.com/wiki/Folding)

## Additional folding commands

* zr: reduces fold level throughout the buffer
* zR: opens all folds
* zm: increases fold level throughout the buffer
* zM: folds everything all the way
* za: open a fold your cursor is on
* zA: open a fold your cursor is on recursively
 zc: close a fold your cursor is on

## Change line

> `C` will delete everything from the cursor to the end of the line and put you in INSERT mode, then you write your replacement, leave INSERT mode, use . to repeat the process somewhere else.

<https://unix.stackexchange.com/questions/31924/vim-replace-all-character-till-end-of-line>

## Go last position

The quickest way is to hit either: two apostrophes two backticks

Note that the difference is that the backtick goes to the same location on the line, whereas the apostrophe goes to the start of the line. On a UK keyboard, the apostrophe is more accessible, so I tend to use that one. There are loads of useful marks like this, see :help mark-motions.

For some other motions (not 2j I think), there's also the jump-list that lets you navigate back and forth among a number of motions. CtrlO and CtrlI do this navigation, but see :help jump-motions for more information

<https://stackoverflow.com/questions/5052079/vim-move-cursor-to-its-last-position>

## Go to next error

1. '[l'
2. ']l'

<https://stackoverflow.com/questions/6361733/jump-to-next-error-code-highlighted-in-red>

## Go to...

1. gd will take you to the local declaration.
1. gD will take you to the global declaration.
1. g* search for the word under the cursor (like *, but g\* on 'rain' will find words like 'rainbow').
1. g## same as g\* but in backward direction.
1. gg goes to the first line in the buffer (or provide a count before the command for a specific line).
1. G goes to the last line (or provide a count before the command for a specific line).

## Search & replace

> Use vim substitute command(:s)

`%s/foo/bar/gc`

<https://vim.fandom.com/wiki/Search_and_replace>

* Autocomplete -> Ctrl + N
* Multicursor -> Ctrl + V => Select => I => Insert charcter => Esc

* <http://vim.wikia.com/wiki/Search_and_replace>

## Paste multiple times

For example: 30p

## Use Macros

1. Normal mode + qq(start)
2. Do pattern
3. Normal mode + q(stop)
4. Paste with .(Also multiple times)


# Multicursor editing

1. The `.` command
2. macros
3. visual block

<https://vi.stackexchange.com/questions/4307/multiple-cursors-at-desired-location>
<https://medium.com/@schtoeffel/you-don-t-need-more-than-one-cursor-in-vim-2c44117d51db>
<https://stackoverflow.com/questions/11784408/vim-multiline-editing-like-in-sublimetext>
<https://engagor.github.io/blog/2018/02/21/why-vim-doesnt-need-multiple-cursors/>


## Pattern searches

* `/{pattern}[/[offset]]<CR>`  search forward for the Nth occurrence of {pattern}
* `?{pattern}[?[offset]]<CR>` search backward for the Nth occurrence of {pattern}
* Search forward `/` & search backward `?`
* Go to next result forward `n`and backwards `N`
* Go to next same word `*` and `#` backwards
* <Ctrl> + O go back where you come from
* <Ctrl< + I go forward where you come from
* Type  %  to find a matching ),], or } -> Debugging

## Searching

1. `n` $\rightarrow$ Forward searching(/)
2. `N` $\rightarrow$ Opposite Direction(?)

```
type   :##,##s/old/new/g    where ##,## are the line numbers of the range
                               of lines where the substitution is to be done.
Type   :%s/old/new/g      to change every occurrence in the whole file.
Type   :%s/old/new/gc     to find every occurrence in the whole file,
                  with a prompt whether to substitute or not
```

## Registers & Macros

> Use registers logically to work flexible with code + macros to automate repetitive tipping

- To keep values in register use "hidden" register `"_d` or yank in other unused register

<https://www.brianstorti.com/vim-registers/>

## Registers

> `k` is the used register

* Copy the current line into register: `"kyy`
* Append to register `"Kyy`
* Paste from register `"kp"
* Access current registers: `:reg`
* Help: `:help registers`


## Use Operators and motions to edit more productively

> Operator + motion

- Motion = What operator will operate on
- Example: `de`

<https://www.systutorials.com/240159/vim-tutorial-beginners-vimtutor/##lesson-23-on-operators-and-motions-8734>

## Matching Parentheses

```
1. Place the cursor on any (, [, or { in the line below marked
2. Now type the  %  character.
3. The cursor will move to the matching parenthesis or bracket.
4. Type  %  to move the cursor to the other matching bracket.
5. Move the cursor to another (,),[,],{ or } and see what  %  does.
```

## Navigate more efficiently vim

```
 )
    Jump forward one sentence.

(
    Jump backward one sentence.

}
    Jump forward one paragraph.

{
    Jump backward one paragraph.

j
    Jump forward one line.

10j
    Jump forward 10 lines

k
    Jump backward one line.

10k
    Jump backward 10 lines.
```

## Use movement `t`

> Use `t` to execute command up to character

- Use dtc, where c is any character, e.g. for you, you want dt

## tags

> Use tags to jump to certain parts of program easier

Run ctags: `ctags -R .`

1. In normal mode and press `<C-]>` to go to definition & `<C-t>` to go back.
2. Go directly to the definition:

> Also use Regex

```
:tag function_name
:ta function_name
```

3. Open the function definition in a slit: `Ctrl + W Ctrl + ]`

Navigating through the tag list:

```
:ts or :tselect shows the list
:tn or :tnext goes to the next tag in that list
:tp or :tprev goes to the previous tag in that list
:tf or :tfirst goes to the first tag of the list
:tl or :tlast goes to the last tag of the list
```

```
^]	Jump to definition
^t	Jump back from definition
^W }	Preview definition
g]	See all definitions
```

- <https://andrew.stwrt.ca/posts/vim-ctags/>
- <https://oded.blog/2017/05/08/ctags-are-fun/>
- <https://dev.to/asamolion/comment/5a75>
- <https://medium.com/@galea/getting-started-with-ctags-vim-on-macos-87bcb07cf6d>
- <https://courses.cs.washington.edu/courses/cse451/10au/tutorials/tutorial_ctags.html>
- <https://ricostacruz.com/til/navigate-code-with-ctags>

### Useful tags Plugins

1. [Gutentags](http://github.com/ludovicchabant/vim-gutentags): Autogenerate ctags
2. [Tagbar](http://github.com/majutsushi/tagbar): Show tags overview
3. [FZF](http://github.com/junegunn/fzf.vim): Sort through tags

## Indentation

1. ctrl-t, ctrl-d - indent current line forward, backwards
   (insert mode)
1. visual > or < - indent block by sw (repeat with . )

## Reformating

1. V= - select text, then reformat with =
1. = - will correct alignment of code
1. == - one line;
1. gq - reformat paragraph

- <https://www.cs.swarthmore.edu/oldhelp/vim/reformatting.html>
- <https://vim.fandom.com/wiki/Fix_indentation>

## Mapping

- Difference mapping options: <https://stackoverflow.com/questions/3776117/what-is-the-difference-between-the-remap-noremap-nnoremap-and-vnoremap-mapping>

### Difference remap, noremap, nnoremap and vnoremap

1. `remap`: makes mappings work recursively
2. `:map` and `:noremap` are recursive and non-recursive versions of the various mapping commands for all modes
3. `:nmap` and `:nnoremap` are recursive and non-recursive versions of the various mapping commands for all normal mode.
4. `:vmap` and `:vnoremap` are recursive and non-recursive versions of the various mapping commands for all visual mode.

<https://stackoverflow.com/questions/3776117/what-is-the-difference-between-the-remap-noremap-nnoremap-and-vnoremap-mapping>
<https://medium.com/vim-drops/understand-vim-mappings-and-create-your-own-shortcuts-f52ee4a6b8ed>

### Debugging mappings

1. Check: `:verbose map <tab>`
2. Check for mappings: `:[in]map`

- :nmap for normal mode mappings
- :vmap for visual mode mappings
- :imap for insert mode mappings

<http://stackoverflow.com/questions/7642746/ddg##7642762>
<https://raddevon.com/articles/what-to-do-when-a-vim-keymap-doesnt-work/>
<https://superuser.com/questions/839451/mapping-from-vimrc-does-not-apply>

## Built in terminal

- <http://vid.bina.me/tools/nvim/terminal-in-nvim/>

## Go to begnning brackets

```
    [( ...(go to previous unmatched ( character)
    [{ ...(go to previous unmatched { character)

These two commands have matching forwards partners:

    ]) ...(go to next unmatched ) character)
    ]} ...(go to next unmatched } character)

```

<https://unix.stackexchange.com/questions/30396/in-vim-search-backwards-for-matching-braces-parens>

## Resizing vim splits

> Count + Ctrl+W +/-

- Ctrl+W +/-: increase/decrease height (ex. 20<C-w>+)
- Ctrl+W >/<: increase/decrease width (ex. 30<C-w><)
- Ctrl+W _: set height (ex. 50<C-w>_)
- Ctrl+W |: set width (ex. 50<C-w>|)
- Ctrl+W =: equalize width and height of all windows

<https://vi.stackexchange.com/questions/tagged/split

## Grammar

1. Use `Vim Grammar checker` + `LanguageTool` for spell checking
2. Use system spell check + vim spell check for simple things

   - `:LanguageToolCheck` to check for Grammar
   - `:lne` & `:lopen` to navigate through errors
   - `:LanguageToolClear` to remove highlighting of grammar mistakes

- <https://www.vim.org/scripts/script.php?script_id=3223>
- <https://www.languagetool.org/>
- <https://ncona.com/2018/12/spell-and-grammar-checking-on-vim/>

- Alternative: <https://github.com/rhysd/vim-grammarous>
- Alternative 2: <https://github.com/dpelle/vim-LanguageTool>

## Spell check

1. Global: `:set spell spelllang=en_us`
2. Local: `:setlocal spell spelllang=en_us`
3. Quit: `:set nospell`
4. Next misspelled word: `s]`
5. Previous misspelled word: `[s`
6. Suggest alternatives: `z=`
7. Add word to dictionary: `zg`
8. Mark word as incorrect: `zw`

- <https://www.linux.com/learn/using-spell-checking-vim>
- <https://linuxhint.com/vim_spell_check/>
- <http://thejakeharding.com/tutorial/2012/06/13/using-spell-check-in-vim.html>
- Spell file: <https://codeyarns.com/2015/09/30/how-to-make-spellfile-in-vim/>
- Alternative Linux build in `aspell`:
  - <https://www.computerhope.com/unix/aspell.htm>
  - <https://www.howtoforge.com/linux-aspell-command/>
  - <http://aspell.net/>

Alternative

- <https://www.linux-community.de/ausgaben/linuxuser/2016/05/auf-hochglanz-poliert/>
- <https://german.stackexchange.com/questions/5786/online-schreibstilkorrektur>

## Go to corresponding bracket

> `%`

## Copy/Paste/Cut

> Use the system clipboard to be able to use buffers system wide

```
" Copy/Paste/Cut
if has('unnamedplus')
  set clipboard=unnamed,unnamedplus
endif
noremap YY "+y<CR>
noremap <leader>p "+gP<CR>
noremap XX "+x<CR>
```

Use `set clipboard=unnamedplus` to use system clipboard.

References:

- <https://vi.stackexchange.com/questions/84/how-can-i-copy-text-to-the-system-clipboard-from-vim>
- <https://stackoverflow.com/questions/11489428/how-to-make-vim-paste-from-and-copy-to-systems-clipboard>

## Sources

* <https://github.com/VSCodeVim/Vim/blob/master/ROADMAP.md>
* vimtutor
