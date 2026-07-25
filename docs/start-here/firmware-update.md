---
title: Firmware update
sidebar_position: 5
---

# Firmware update

FREE-WILi 2 has two RP2350 processors — **main** (IO and scripting) and
**display** (screen, buttons, sound, DVI) — each running its own firmware
image. The [FREE-WILi Updater](https://github.com/freewili/freewili-updater)
is a one-click tool that flashes or updates UF2 firmware, and an update run
covers both processors so they stay in step with each other.
<!-- VERIFY: whether the updater flashes both processors automatically in one pass, or whether the user selects/repeats per processor — not confirmed from source material available here -->

You can check which firmware version is currently running from the
**About** screen, in the System folder of the on-device app list.
<!-- VERIFY: confirm the About screen actually displays firmware version numbers for both processors; the presence of an About app in the System folder is confirmed from fwPanelLibDisplay.cpp, but what it displays is not -->

Beyond the updater tool, current stable, beta, and archived UF2 builds are
published from the [firmware repository](https://github.com/freewili/freewili-firmware)
if you need a specific version.
