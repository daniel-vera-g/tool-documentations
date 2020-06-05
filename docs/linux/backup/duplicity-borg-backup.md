---
title: Backups
authors: Daniel VG
left-header: Backups
right-header: \today
lang: en-GB
---

# Backup

> <https://wiki.ubuntuusers.de/Datensicherung/>

Tools:

1. Duplicity
2. Borg

## Borg

> <https://borgbackup.readthedocs.io/en/stable/>

Encryption through:

1. Passphrase only
2. Passphrase + key local

Backup is stored in repositories in archives.

## Init repository

> With keyfile and blake2 algorithm(Key stored in ~/.config/blake/)

`borg init -e keyfile-blake2 REPO`

## Create archive

`borg create --stats --progress -C zlib,9 /path/to/repo::{hostname}-{user}-{now:%Y-%m-%dT%H:%M:%S} [PATH...]`

## Extract archive

1. Go to the path to restore
2. `borg extract --list /path/to/repo::my-files`

## Other example commands

* `borg create --stats --progress -C auto,zlib,6 [BACKUP-FOLDER]::usb-full-backup-{now:%Y-%m-%dT%H:%M:%S} [FOLDER-TO-BE-BACKED-UP]`
* `borg init --encryption=none .`
* `borg init --compression=none .`

In combination with `deja-vu`:

* `borg create --stats --progress -C auto,zlib,6 [BACKUP-FOLDER]::{hostname}-{user}-{now:%Y-%m-%dT%H:%M:%S} [FOLDER-TO-BE-BACKED-UP] && deja-dup --backup && notify-send -t 1000 "Backup ready"`

without `-C` compression option the lowest default is used.

## Other Borg resources

1. <https://asciinema.org/a/133292>
2. <https://github.com/borgbackup/borg>
3. <https://wiki.ubuntuusers.de/BorgBackup/>
4. <https://wiki.hetzner.de/index.php/BorgBackup>
5. <https://stackoverflow.com/questions/1401482/yyyy-mm-dd-format-date-in-shell-script>
