---
id: bash
title: Bash docs
---

## When to use {}

> The `{}` in `${}` are useful if you want to expand the variable foo in the string

* <https://hacker-tools.github.io/shell/>
* <https://stackoverflow.com/questions/8748831/when-do-we-need-curly-braces-around-shell-variables>

## When to use [] and ()

1. `[]` : The opening bracket `([)` is an alias for the test command which performs all the tests and returns 0 for true or something else for false. The "if" reacts only to the return value of the test command. The closing bracket tells test where the expression ends. The double brackets `([[)` are a bash built in and can replace the external call to test.

<https://stackoverflow.com/questions/11796751/what-does-do-in-bash>

2. `()`: Calls sub shell

<https://stackoverflow.com/questions/11796751/what-does-do-in-bash>

## Improve at shell scripting

1. Apply existing tools to particular problems

* <https://www.johndcook.com/blog/2019/02/18/command-line-wizard/?utm_source=hackernewsletter&utm_medium=email&utm_term=fav>
