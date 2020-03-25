---
title: Backups
authors: Daniel VG
left-header: Backups
right-header: \today
lang: en-GB
---

# Backup

> <https://wiki.ubuntuusers.de/Datensicherung/>

## Duplicity TODO

https://wiki.archlinux.org/index.php/Duplicity | ²Duplicity - ArchWiki
https://www.digitalocean.com/community/tutorials/how-to-use-duplicity-with-gpg-to-securely-automate-backups-on-ubuntu | ³How To Use Duplicity with GPG to Securely Automate Backups on Ubuntu | DigitalOcean
https://www.linux-magazin.de/ausgaben/2013/08/duplicity/3/ | ⁴Verschlüsselte Cloudbackups mit Duplicity - Seite 3 von 4
https://www.redpill-linpro.com/sysadvent/2016/12/23/encrypted-cloud-backups-with-duplicity.html | ⁵Encrypted cloud backups with Duplicity
https://superuser.com/questions/334124/why-does-duplicity-need-a-secret-key | ⁶gnupg - Why does duplicity need a secret key? - Super User
https://serverfault.com/questions/806505/why-does-duplicity-need-a-passphrase-for-openpgp-encryption | ⁷pgp - Why does duplicity need a passphrase for OpenPGP encryption? - Server Fault

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

