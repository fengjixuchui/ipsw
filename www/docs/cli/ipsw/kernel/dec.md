---
id: dec
title: dec
hide_title: true
hide_table_of_contents: true
sidebar_label: dec
description: Decompress a kernelcache
last_update:
  date: 2022-12-03T18:41:04-07:00
  author: blacktop
---
## ipsw kernel dec

Decompress a kernelcache

```
ipsw kernel dec <kernelcache> [flags]
```

### Options

```
  -h, --help            help for dec
  -m, --km              Decompress KernelManagement host file (found on macOS 13.x filesystem)
  -o, --output string   Output file
```

### Options inherited from parent commands

```
      --color           colorize output
      --config string   config file (default is $HOME/.ipsw.yaml)
  -V, --verbose         verbose output
```

### SEE ALSO

* [ipsw kernel](/docs/cli/ipsw/kernel)	 - Parse kernelcache
