---
title: Latex writing workflow
authors: Daniel VG
left-header: Latex writing
right-header: \today
lang: en-GB
---

## Tools

1. Latex distribution: TexLive
2. Compiling: latexmk

### Vim plugins

1. Ale: Linting & Fixing
2. Coc: LSP
3. Deoplete: Autocomplete
4. Utlisnips: Snippets
5. Vimtex: Latex tools
6. ctags(Gutentags): tags
7. Vim Surround: Make easier to add brackets:

`cs + identifier`

## Vim workflow

1. Completion: Deoplete + Vimtex
2. Snippets:

> Quickly insert environements -> Vim snippets(f.ex fig + tab)

3. Auto close environment:

`press ]] in insert mode to auto-close an environment`

4. Mappings:

> :h vimtex-default-mappings

```
cse: change an environment
dse: delete an environment
tse：toggle stared env and no-star env, e.g., change from equation* to equation and vice versa.
]]: close an environment (only work in insert mode, in normal mode, it will bring cursor to next subsection instead). After you have typed begin{ENV}, use ]] to auto-close it with \end{ENV}
```

5. Jump between references + definitions:

> See ctags documentation

```
:VimtexInfo: show all relevant info about current LaTeX project.
:VimtexTocOpen: show table of contents window
:VimtexTocToggle: toggle table of contents window
:VimtexCompile: Compile the current LaTeX source file and opens the viewer after successful compilation.
:VimtexStop: Stop compilation for the current project.
:VimtexClean: clean auxiliary files generated in compliation process.
```

6. Live PDF preview with Okular & Vimtex

> :VimtexCompile

7. Linting + Syntax check with Ale

* lacheck
* chktex
* Proselint

8. Tex directives

> Compile latex with xelatex

`%!TeX program = xelatex`

9. Table of contents

> Show table of contents: `VimtexTocOpen`

10. Document compliation with vimtex & latexmk:

`:VimtexCompile`

11. Motions

```
Move between section boundaries with [[, [], ][, and ]]
Move between environment boundaries with [m, [M, ]m, and ]M
Move between comment boundaries with [* and ]*
Move between matching delimiters with %
```

## Snippets

1. Automate every repetitive keystroke using vim `snippets`(In vim use UltiSnips)
2. Create course specific snippets and load them on your `.vimrc` though a simlink: `set rtp+=~/current_course`

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

### Latex math snippets

1. `mk`: Inline math
2. `md`: Displayed math
3. Use subscript: `A1` -> `A_1`
4. Fractions:

```
// 	→ 	\frac{}{}
3/ 	→ 	\frac{3}{}
4\pi^2/ 	→ 	\frac{4\pi^2}{}
(1 + 2 + 3)/ 	→ 	\frac{1 + 2 + 3}{}
(1+(2+3)/) 	→ 	(1 + \frac{2+3}{})
(1 + (2+3))/ 	→ 	\frac{1 + (2+3)}{}
```

5. Postfix snippets: F.ex ` v,. → \vec{v}`

### Math specific

1. Use `Sympy` and `Mathematica` to evaluate mathematical expressions

## Compiling and see(Hot reload) document

> Use `latexmk` to compile latex document.

In vim use `vimtex` command: `:VimtexCompile` to automatically compile the latex document on save and hot reload document on the preferred PDF viewer(F.ex Zathura)

## Searching in notes

> Rg + RegEx

## Drawing figures

> Use Inkscape to draw figures and import them with latex into document

* See: [Draw figures Inkscape](https://castel.dev/post/lecture-notes-2/)

## Grammar and Vocabulary

> Use a key binding to automatically correct spelling mistakes without interrupting the flow

* Press `Ctrl + L` to correct the previous spelling mistake

See vim specific documentation file for further spelling and grammar related tools.

## Citations

> Use Zothero as citation manager.

* Zothero Browser extension for fast documentation.
* Export Zothero resources to desired format(F.ex BibTex) and use them in the Latex document.

## Resources

### Latex

* <https://castel.dev/post/lecture-notes-1/>
* <https://www.quora.com/Can-people-actually-keep-up-with-note-taking-in-Mathematics-lectures-with-LaTeX/answer/Gilles-Castel-1>
* <https://www.quora.com/Can-people-actually-keep-up-with-note-taking-in-Mathematics-lectures-with-LaTeX>
* <https://gist.github.com/gillescastel/8da990dbc83c1c86f8ca048bc83624f0>
* <https://www.youtube.com/watch?v=10wGMzYgnqM>
* <https://github.com/lervag/vimtex>

### Snippets

* <https://github.com/SirVer/ultisnips>
* Good Ultisnips tutorial: <https://yufanlu.net/2016/10/30/ultisnips/>
* <https://codefor.life/ultisnips/>
* <https://gist.githubusercontent.com/gillescastel/8da990dbc83c1c86f8ca048bc83624f0/raw/442ae72c3c92295bf9afc6d038ed76d79e655b7a/Ultisnip%2520snippets>

### Vim as latex editor

* <https://jdhao.github.io/2019/03/26/nvim_latex_write_preview/#fn:>
* <https://tex.stackexchange.com/questions/474765/are-there-any-alternatives-to-vim-latex>
* <https://github.com/w0rp/ale>
* <https://github.com/neoclide/coc.nvim>
* <https://github.com/Shougo/deoplete.nvim>
* <https://github.com/lervag/vimtex>
* <https://www.reddit.com/r/vim/comments/4fm7vo/vim_not_very_well_suited_for_latex/>
* <https://castel.dev/post/lecture-notes-1/>
* <https://octetz.com/posts/vim-as-go-ide>
