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
No. The CM0 gives you onboard headless Linux, but its availability is
described by FREE-WILi as "genuinely questionable," so the board is
explicitly designed to work fully without one.
<!-- VERIFY: "genuinely questionable" availability is freewili.com's own
     phrasing about CM0 supply — worth the product owner double-checking
     this still reflects current availability before this FAQ answer goes
     out. -->

**Can I add a CM0 myself later?**
Hand-soldering your own CM0 onto the board ("bring your own module") is
described as being actively studied, not as a shipped, documented procedure.
<!-- VERIFY: whether user-installable CM0 has moved from "being studied" to
     documented/supported since this was written. -->

**What scripting options does the device have?**
Four: rTHON (a Python-like on-device language), WASM (sandboxed guest
programs via the on-device WiliWasm engine), ZoomIO (nanosecond-precision
RISC-V bit-banging on the main processor's second core), and WiliBLOCKS
(point-and-click block automation). See
[Running apps](../files-and-apps/running-apps.md).

**Is FreeWili 1 software/firmware compatible with FREE-WILi 2?**
Not directly — FREE-WILi 2 moves from a single RP2040 to two RP2350
processors plus new hardware (an ESP32-C5, an optional Linux CM0, a larger
display), so firmware and low-level code written for FreeWili 1 needs
porting. The 20-pin GPIO header was deliberately kept pin-compatible so
existing Orca modules keep working; see
[Pinout](../hardware/pinout.md) for the two header pins whose function
changed.
<!-- VERIFY: the degree of compatibility for higher-level software (the
     Python library, OneWili API clients, WiliBlocks files, WASM scripts)
     between the two devices — not confirmed from source material available
     here. -->

**Where do I get the developer API / SDK docs?**
[freewili.com/onewili](https://freewili.com/onewili/) — this site covers
using the device, not writing code against it.

**Where can I buy one, or get support?**
Preorders and purchasing are linked from
[freewili.com](https://www.freewili.com); the
[FREE-WILi Discord](https://discord.com/invite/XJRBUCX62z) is the day-to-day
place for support and community questions.
<!-- VERIFY: retail availability / distributor list beyond a DEFCON
     preorder — the source material available while writing this page
     describes a "DEFCON Founders Edition" preorder specifically, not
     confirmed as the device's only or ongoing sales channel. -->

**Can I run other retro/console software, or port my own Fruit Jam project?**
The display processor is closely hardware-compatible with Adafruit's Fruit
Jam (some pin assignments differ), which is how PICO-8 and Doom were brought
up on the device — porting an existing Fruit Jam project should be
comparatively straightforward.

**Does the device work without any wireless connectivity?**
Yes — WiFi/Bluetooth (ESP32-C5), sub-GHz/LoRa, NFC/RFID, and IR are all
separate subsystems from the core IO and scripting features.
