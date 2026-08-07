---
title: FAQ
sidebar_position: 4
---

# FAQ

**Is FREE-WILi 2 open hardware?**
Yes. Hardware documentation, board support packages (like
[WiliBSP](https://github.com/freewili/wilibsp)), and firmware are published
so the device is a platform for running your own code, not just the
in-box firmware.

**Do I need the Raspberry Pi CM0 module for the device to work?**
No. The CM0 gives you onboard headless Linux, but the device works well with it asleep. Power it up via the Linux terminal and do some heavy Linux only processing or library work.

**What scripting options does the device have?**
Four: rTHON (a Python-like on-device language), WASM (sandboxed guest
programs via the on-device WiliWasm engine), ZoomIO (nanosecond-precision
RISC-V bit-banging on the main processor's second core), and WiliBLOCKS
(point-and-click block automation).

**Is FreeWili 1 software/firmware compatible with FREE-WILi 2?**
FreeWili 1 OG is the new fimrware for Free Wili 1. It supports the new menu system for FreeWili2. This is compatiblile and works with OneWili API. Also, C++ wasm and rthon are supported (one script at a time). 

**Where do I get the developer API / SDK docs?**
[freewili.com/onewili](https://freewili.com/onewili/) — this site covers
using the device, not writing code against it.


