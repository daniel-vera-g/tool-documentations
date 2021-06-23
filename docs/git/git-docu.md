---
id: git
title: Git docs
---

## Head

> HEAD points to your current branch (or current commit), so all that git reset --hard HEAD will do is to throw away any uncommitted changes you have.

<https://stackoverflow.com/questions/2304087/what-is-head-in-git>

## Revert commit back

1. Change your current branch to point to the older commit instead. You could do that with git reset --hard f414f31. However, this is rewriting the history of your branch, so you should avoid it if you've shared this branch with anyone. Also, the commits you did after f414f31 will no longer be in the history of your master branch.
2. Create a new commit that represents exactly the same state of the project as f414f31, but just adds that on to the history, so you don't lose any history:

```
git reset --hard f414f31
git reset --soft HEAD@{1}
git commit -m "Reverting to the state of the project at f414f31"
```

<https://stackoverflow.com/questions/9529078/how-do-i-use-git-reset-hard-head-to-revert-to-a-previous-commit>
<https://stackoverflow.com/questions/1895059/revert-to-a-commit-by-a-sha-hash-in-git/1895095##1895095>
<https://docs.gitlab.com/ee/topics/git/numerous_undo_possibilities_in_git/>

## Reset branch to HEAD

```
git fetch origin
git reset --hard origin/master
```

<https://stackoverflow.com/questions/1628088/reset-local-repository-branch-to-be-just-like-remote-repository-head>

## Delete branch local and remote

```
$ git push --delete <remote_name> <branch_name>
$ git branch -d <branch_name>
```

<https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely>

## Git stash

```bash
git stash
# save stash with message
git stash save "MESSAGE"
# Pop changes into the file
git stash pop
# Apply changes in stash but keep stash(F.ex for multiple branches)
git stash apply
```

<https://de.atlassian.com/git/tutorials/saving-changes/git-stash>

### Stash single folder

> `git stash push -- path/to/folder`

- <https://stackoverflow.com/questions/16434267/how-to-stash-changes-in-current-folder>

## Clean up branches

1. Check branches to be removed: `git remote prune origin --dry-run`
2. Prune local references: `git remote prune origin`

Further information: <https://erikaybar.name/git-deleting-old-local-branches/>

## Update fork

1. Add the remote, call it "upstream":

`git remote add upstream https://github.com/whoever/whatever.git`

2.  Fetch all the branches of that remote into remote-tracking branches, such as upstream/master:

`git fetch upstream`

3. Make sure that you're on your master branch:

`git checkout master`

4. Rewrite your master branch so that any commits of yours that aren't already in upstream/master are replayed on top of that other branch:

`git rebase upstream/master`

<https://stackoverflow.com/questions/7244321/how-do-i-update-a-github-forked-repository>

## Copy file from another branch

```bash
git checkout <commit_hash> <relative_path_to_file_or_dir>
git checkout <remote_name>/<branch_name> <file_or_dir>
```

<https://stackoverflow.com/questions/307579/how-do-i-copy-a-version-of-a-single-file-from-one-git-branch-to-another>
