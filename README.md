# Tool docs

[![Build Status](https://travis-ci.com/daniel-vera-g/tool-documentations.svg?branch=master)](https://travis-ci.com/daniel-vera-g/tool-documentations)

This is the home for the documentation about all the tools I use.
It is mainly a compilation of information gathered from all around the web(Stack Overflow, Blogs, ...).

I hope you find/learn something interesting here.

## Motivation

The motivation was not having to always look information up, but having a central source of truth.
Current topics documented are amongst other things:

1. Git related questions.
2. Latex editing workflows.
3. Linux cheat sheets, questions and hacks.
4. Vim principles, hacks and helpers.

If you think, that I've forgot to mention some source where I got the information, don't bother to hit me up on [Twitter](https://twitter.com/DVG3012).

## Additional resources

For additional resources, be sure to check out my [dotfiles](https://github.com/daniel-vera-g/dotfiles/)

## Build with

This site is build with [Gatsby](https://www.gatsbyjs.org) and based on the [Grundgesetz](https://grundgesetz-skeleton.kata-ai.now.sh/) template.

### Deploy

Currently this site uses simple a `travis.yml` script and the `npm deploy` command with `gh-pages` to automatically build the page from master.

## Roadmap/Issues

To see the current status or report some issues/feature requests use the repository issue tracker.
There you also can see the features/bug-fixes for the next release(Tagged with the next milestone).

1. `v1.0.0` will just be the static site with the working documentation.
2. For `v1.1.0` a full text search over the whole documentation and a dark theme is planned.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (8.0.0+)
- [Yarn](https://yarnpkg.com) (Optional. You can still use `npm` if you want, but this is for your own sanity.)

### Running the server

Now that we have the project set up, let's `cd` to the generated project. Here we'll have to install our node dependencies. To do so, run the following command.

```bash
# npm
npm install
# yarn
yarn
```

To start working on our documentation, we need to start a development server.

```bash
# npm
npm dev
# yarn
yarn dev
```

The command above will start a development server with hot-reloading capabilities on `localhost:8000`. From now on, you can start writing your documentation with ease.

## Frontmatters

The following Markdown frontmatters are provided in each documentation page.

- `id` - A unique identifier representing the markdown page. This will be referenced in `toc.json` when getting the links for the navigation sidebar, as well as the `prev` and `next` items of the pagination. **Note that the ID must be unique between pages, as this will also be used to look up the table of contents.**
- `permalink` - Optional. By default Grundgesetz will generate page paths relative to the path of the Markdown file. If you want to override the output path for a page, add this frontmatter with the **absolute** path of the output.
- `title` - The title of the page.
- `subtitle` - Optional. The subtitle of the page (if any)
- `prev` - Optional. This contains the `id` of the page that appears on the "Previous Page" navigation item.
- `next` - Optional. This contains the `id` of the page that appears on the "Next Page" navigation item.
