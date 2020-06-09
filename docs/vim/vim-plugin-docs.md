---
id: vim-plugin-docs
title: Vim plugin features
---

## Use FZF

1. GFiles? = git status
2. Buffers = Open buffers
3. ag & rg = Use them to find text(Advanced grep)
4. Lines & BLines = Also find lines
5. Windows = Show windows
6. Commits & BCommits = See current commits in workspace/buffer

<https://jesseleite.com/posts/2/its-dangerous-to-vim-alone-take-fzf>

## Git plugins

### Vim fugitive(git)

1. Gstatus -> Press - to add/reset a file's changes, or = to expand an inline diff and operate on individual hunks
2. Gcommit % to commit the current file, editing the commit message inside the currently running Vim.
3. Gblame ->  Press enter on a line to edit the commit where the line changed, or o to open it in a split. When you're done, use :Gedit in the historic buffer to go back to the work tree version.
4. Gmove does a git mv on a file and simultaneously renames the buffer. :Gdelete does a git rm on a file and simultaneously deletes the buffer.
5. Use Ggrep to search the work tree (or any arbitrary commit) with git grep, skipping over that which is not tracked in the repository. Glog loads all previous revisions of a file into the quickfix list so you can iterate over them and watch the file evolve!
6. Use :Gbrowse to open the current file on the web front-end of your favorite hosting provider, with optional line range (try it in visual mode!). Plugins are available for popular providers such as GitHub, GitLab, Bitbucket, and Gitee. -> TODO setup further plugins

<https://vimways.org/2018/vim-and-git/>

### Vimagit

1. :Magit to show git buffer
2. <c-n> & <c-p> to jump between changes
3. S to stage
4. CC to commit

### vim-twiggi for commit msgs

1. :Twiggy to open branches
2. j/n navigate between branches
3. c to checkout
4. m/M to merge & r/R to rebase(u aborts rebase)
5. F fetch current branch

## Ultisnips

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

### Create snippets

1. Use dynamic snippets with backticks: `...`
2. Use Python code: `!p...`
3. Use options like `b` for expanding at the end of the line or `A` to auto expand
4. Use variables for custom content with: `$1, $2, ...` and `$0` for the last one
5. Use RegEx to trigger snippets(Use python code)
6. Use `${VISUAL}` to select text in visual mode and apply snippet

Syntax:

```
snippet keyword "description" option
content
endsnippet
```

## Use NERDtree

t: Open the selected file in a new tab
i: Open the selected file in a horizontal split window
s: Open the selected file in a vertical split window
I: Toggle hidden files
m: Show the NERD Tree menu
R: Refresh the tree, useful if files change outside of Vim
?: Toggle NERD Tree's quick help

https://medium.com/usevim/nerd-tree-guide-bb22c803dcd2
