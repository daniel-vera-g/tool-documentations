---
title: Vim learnings
authors: Daniel VG
left-header: Vim
right-header: \today
lang: en
---

# Folding

1. `zf{motion}` Fold(+motion)
2. `zd` Removing folding
3. `zo` Open folding
4. `zc` Close folding

[Docu](https://vim.fandom.com/wiki/Folding)

## TODO folding

* <https://www.linux.com/learn/vim-tips-folding-fun>

# Change line

> `C` will delete everything from the cursor to the end of the line and put you in INSERT mode, then you write your replacement, leave INSERT mode, use . to repeat the process somewhere else.

<https://unix.stackexchange.com/questions/31924/vim-replace-all-character-till-end-of-line>

# Go last position

The quickest way is to hit either: two apostrophes  two backticks

 Note that the difference is that the backtick goes to the same location on the line, whereas the apostrophe goes to the start of the line. On a UK keyboard, the apostrophe is more accessible, so I tend to use that one. There are loads of useful marks like this, see :help mark-motions.

For some other motions (not 2j I think), there's also the jump-list that lets you navigate back and forth among a number of motions. CtrlO and CtrlI do this navigation, but see :help jump-motions for more information

<https://stackoverflow.com/questions/5052079/vim-move-cursor-to-its-last-position>

# Go to next error

1. '[l'
2. ']l'

<https://stackoverflow.com/questions/6361733/jump-to-next-error-code-highlighted-in-red>

# Go to...

1. gd will take you to the local declaration.
1. gD will take you to the global declaration.
1. g* search for the word under the cursor (like *, but g* on 'rain' will find words like 'rainbow').
1. g# same as g* but in backward direction.
1. gg goes to the first line in the buffer (or provide a count before the command for a specific line).
1. G goes to the last line (or provide a count before the command for a specific line). 

# Use FZF

1. GFiles? = git status
2. Buffers = Open buffers
3. ag & rg = Use them to find text(Advanced grep)
4. Lines & BLines = Also find lines
5. Windows = Show windows
6. Commits & BCommits = See current commits in workspace/buffer

<https://jesseleite.com/posts/2/its-dangerous-to-vim-alone-take-fzf>

# Vim fugitive(git)

1. Gstatus -> Press - to add/reset a file's changes, or = to expand an inline diff and operate on individual hunks
2. Gcommit % to commit the current file, editing the commit message inside the currently running Vim.
3. Gblame ->  Press enter on a line to edit the commit where the line changed, or o to open it in a split. When you're done, use :Gedit in the historic buffer to go back to the work tree version.
4. Gmove does a git mv on a file and simultaneously renames the buffer. :Gdelete does a git rm on a file and simultaneously deletes the buffer.
5. Use Ggrep to search the work tree (or any arbitrary commit) with git grep, skipping over that which is not tracked in the repository. Glog loads all previous revisions of a file into the quickfix list so you can iterate over them and watch the file evolve!
6. Use :Gbrowse to open the current file on the web front-end of your favorite hosting provider, with optional line range (try it in visual mode!). Plugins are available for popular providers such as GitHub, GitLab, Bitbucket, and Gitee. -> TODO setup further plugins

<https://vimways.org/2018/vim-and-git/>

# Vimagit

1. :Magit to show git buffer
2. <c-n> & <c-p> to jump between changes
3. S to stage
4. CC to commit

# vim-twiggi for commit msgs

1. :Twiggy to open branches
2. j/n navigate between branches
3. c to checkout
4. m/M to merge & r/R to rebase(u aborts rebase)
5. F fetch current branch

# Search & replace

> Use vim substitute command(:s)

`%s/foo/bar/gc`

<https://vim.fandom.com/wiki/Search_and_replace>

# Registers & Macros

> Use registers logically to work flexible with code + macros to automate repetitive tipping

* To keep values in register use "hidden" register `"_d` or yank in other unused register

<https://www.brianstorti.com/vim-registers/>

# Use Operators and motions to edit more productively

> Opeartor + motion

* Motion = What operator will operate on
* Example: `de`

<https://www.systutorials.com/240159/vim-tutorial-beginners-vimtutor/#lesson-23-on-operators-and-motions-8734>

# Searching

1. `n` $\rightarrow$ Forward searching(/)
2. `N` $\rightarrow$ Opposite Direction(?)

```
type   :#,#s/old/new/g    where #,# are the line numbers of the range
                               of lines where the substitution is to be done.
Type   :%s/old/new/g      to change every occurrence in the whole file.
Type   :%s/old/new/gc     to find every occurrence in the whole file,
     			       with a prompt whether to substitute or not
```

# Matching Parentheses

```
1. Place the cursor on any (, [, or { in the line below marked
2. Now type the  %  character.
3. The cursor will move to the matching parenthesis or bracket.
4. Type  %  to move the cursor to the other matching bracket.
5. Move the cursor to another (,),[,],{ or } and see what  %  does.
```


# Navigate more efficiently vim

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

# Use movement `t`

> Use `t` to execute command up to character

* Use dtc, where c is any character, e.g. for you, you want dt

# tags

> Use tags to jump to certain parts of program easier

Run ctags: `ctags -R .`

1. In normal mode and press `<C-]>` to go to definition & `<C-t>` to go back.
2. Go directly to the definition:

> Also use Regex

```
:tag function_name
:ta function_name
```
3. Open the function definition in a slit: `Ctrl + W  Ctrl + ]`


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

* <https://andrew.stwrt.ca/posts/vim-ctags/>
* <https://oded.blog/2017/05/08/ctags-are-fun/>
* <https://dev.to/asamolion/comment/5a75>
* <https://medium.com/@galea/getting-started-with-ctags-vim-on-macos-87bcb07cf6d>
* <https://courses.cs.washington.edu/courses/cse451/10au/tutorials/tutorial_ctags.html>
* <https://ricostacruz.com/til/navigate-code-with-ctags>

## Useful tags Plugins

1. [Gutentags](http://github.com/ludovicchabant/vim-gutentags): Autogenerate ctags
2. [Tagbar](http://github.com/majutsushi/tagbar): Show tags overview
3. [FZF](http://github.com/junegunn/fzf.vim): Sort through tags

# Markers

> Set places to quickly get back

1. mk      - mark current position (can use a-z)
1. 'k      - move to mark k
1. d'k     - delete from current position to mark k
1. 'a-z    - same file
1. 'A-Z    - between files

# Indentation

* ctrl-t, ctrl-d  - indent current line forward, backwards 
                  (insert mode)
* visual > or <   - indent block by sw (repeat with . )

# Reformating

1. V=  - select text, then reformat with =
1. =   - will correct alignment of code
1. ==  - one line; 
1. gq  - reformat paragraph

* <https://www.cs.swarthmore.edu/oldhelp/vim/reformatting.html>
* <https://vim.fandom.com/wiki/Fix_indentation>

# Mapping

* Difference mapping options: <https://stackoverflow.com/questions/3776117/what-is-the-difference-between-the-remap-noremap-nnoremap-and-vnoremap-mapping>

## Debuging mappings

1. Check: `:verbose map <tab>`
2. Check for mappings: `:[in]map`

* :nmap for normal mode mappings
* :vmap for visual mode mappings
* :imap for insert mode mappings

<http://stackoverflow.com/questions/7642746/ddg#7642762>
<https://raddevon.com/articles/what-to-do-when-a-vim-keymap-doesnt-work/>
<https://superuser.com/questions/839451/mapping-from-vimrc-does-not-apply>

# Built in terminal

* <http://vid.bina.me/tools/nvim/terminal-in-nvim/>

# Ultisnips

Syntax:

```
snippet keyword "description" option
content
endsnippet
```

* b — snippet can only be expanded if it’s the beginning of the line
* A — snippet will be expanded automatically
* w — snippet can be expanded if it’s a “word” to vim (check :help iskeyword). For example, a word can be “a sequence of other non-blank characters” according to help word.
* i — snippet can be expanded in the middle of a word.

<https://yufanlu.net/2016/10/30/ultisnips/>
<https://jdhao.github.io/2019/04/17/neovim_snippet_s1/>
<https://castel.dev/post/lecture-notes-1/?utm_source=hackernewsletter&utm_medium=email&utm_term=fav>

# Go to begnning brackets

```
    [( ...(go to previous unmatched ( character)
    [{ ...(go to previous unmatched { character)

These two commands have matching forwards partners:

    ]) ...(go to next unmatched ) character)
    ]} ...(go to next unmatched } character)

```

<https://unix.stackexchange.com/questions/30396/in-vim-search-backwards-for-matching-braces-parens>

# Difference remap, noremap, nnoremap and vnoremap

1. `remap`: makes mappings work recursively
2. `:map` and `:noremap` are recursive and non-recursive versions of the various mapping commands for all modes
3. `:nmap` and `:nnoremap` are recursive and non-recursive versions of the various mapping commands for all normal mode.
4. `:vmap` and `:vnoremap` are recursive and non-recursive versions of the various mapping commands for all visual mode.

<https://stackoverflow.com/questions/3776117/what-is-the-difference-between-the-remap-noremap-nnoremap-and-vnoremap-mapping>
<https://medium.com/vim-drops/understand-vim-mappings-and-create-your-own-shortcuts-f52ee4a6b8ed>

## TODO mapping

<https://www.google.com/search?client=ubuntu&channel=fs&q=map+command+vim&ie=utf-8&oe=utf-8>

# Rezising vim splits

> Count + Ctrl+W +/-

* Ctrl+W +/-: increase/decrease height (ex. 20<C-w>+)
* Ctrl+W >/<: increase/decrease width (ex. 30<C-w><)
* Ctrl+W _: set height (ex. 50<C-w>_)
* Ctrl+W |: set width (ex. 50<C-w>|)
* Ctrl+W =: equalize width and height of all windows

<https://vi.stackexchange.com/questions/tagged/split

# Grammar

1. Use `Vim Grammar checker` + `LanguageTool` for spell checking
2. Use system spell check + vim spell check for simple things

    * `:LanguageToolCheck` to check for Grammar
    * `:lne` & `:lopen` to navigate through errors
    * `:LanguageToolClear` to remove highlighting of grammar mistakes

* <https://www.vim.org/scripts/script.php?script_id=3223>
* <https://www.languagetool.org/>
* <https://ncona.com/2018/12/spell-and-grammar-checking-on-vim/>

* Alternative: <https://github.com/rhysd/vim-grammarous>
* Alternative 2: <https://github.com/dpelle/vim-LanguageTool>

# Spell

1. Global: `:set spell spelllang=en_us`
2. Local: `:setlocal spell spelllang=en_us`
3. Quit: `:set nospell`
4. Next misspelled word: `s]`
5. Previous misspelled word: `[s`
6. Suggest alternatives: `z=`
7. Add word to dictionary: `zg`
8. Mark word as incorrect: `zw`

* <https://www.linux.com/learn/using-spell-checking-vim>
* <https://linuxhint.com/vim_spell_check/>
* <http://thejakeharding.com/tutorial/2012/06/13/using-spell-check-in-vim.html>
* Spell file: <https://codeyarns.com/2015/09/30/how-to-make-spellfile-in-vim/>
* Alternative Linux build in `aspell`:
    * <https://www.computerhope.com/unix/aspell.htm>
    * <https://www.howtoforge.com/linux-aspell-command/>
    * <http://aspell.net/>                                                         

Alternative

* <https://www.linux-community.de/ausgaben/linuxuser/2016/05/auf-hochglanz-poliert/>
* <https://german.stackexchange.com/questions/5786/online-schreibstilkorrektur>

# Go to corresponding bracket

> `%`
