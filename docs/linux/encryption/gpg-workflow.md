---
title: Git docuementation
authors: Daniel VG
left-header: Git
right-header: \today
lang: en-GB
---

# GPG workflow

1. Necessary software: `sha256`, `md5sum` & `gpg`
2. Download checksums & signatures:
3. Get correct signature key: `gpg --keyid-format long --verify SHA256SUMS.gpg SHA256SUMS`(Optionally import gpg keys to keychain)
4. Verify the SHA256 checksum `gpg --keyid-format long --verify SHA256SUMS.gpg SHA256SUMS`
5. Verify download: `sha256sum -c SHA256SUMS 2>&1 | grep OK`

* <https://tutorials.ubuntu.com/tutorial/tutorial-how-to-verify-ubuntu#6>
* <https://help.ubuntu.com/community/GnuPrivacyGuardHowto>

## Encrypt

### Asymmetric

1. Encrypt: `gpg --output doc.gpg --encrypt --recipient blake@cyb.org doc`
2. Decrypt: `gpg --output doc --decrypt doc.gpg`

### Symmetric

1. `gpg --output doc.gpg --symmetric doc`

<https://www.gnupg.org/gph/en/manual/x110.html>

### Multiple files

> For directories first use `tar`(In combination with `xz` compression)

1. `gpg --multifile --encrypt tobeencrypted/*`
2. `tar -cf - dir/ | gpg -r 0x0123456 --encrypt -o dir.tar.gpg`

<https://lists.gnupg.org/pipermail/gnupg-users/2005-February/024617.html>
<https://www.tutonics.com/2012/11/gpg-encryption-guide-part-1.html>
