---
title: Connecting
sidebar_position: 4
---

# Connecting

Most of what FREE-WILi 2 can do is reachable three ways: from a desktop app,
over a plain serial terminal, or directly on the device's own screen. Pages
elsewhere on this site point back here rather than re-explaining all three
each time.

## 1. The FREE-WILi GUI desktop app

[FREE-WILi GUI](https://github.com/freewili/freewili-gui) is the
cross-platform desktop app for GPIO, SPI, I2C, UART, radio, LEDs, audio,
scripting, and file management — a point-and-click front end for the same
features the device exposes on its own screen and console. It can also be
launched straight from the device's SD card with no separate install.
<!-- VERIFY: "launch straight from the device's SD card, no install needed" is FreeWili-1-era site copy about the FREE-WILi GUI generally; confirm it still applies to FreeWili 2's SD card / USB-drive setup specifically -->

## 2. A serial terminal over USB

Plug FREE-WILi 2 into a host over USB and it enumerates as a USB serial
(COM) device — look for it in your OS's port list (Device Manager on
Windows, `/dev/tty*` on Linux/macOS). Open it in any serial terminal.
<!-- VERIFY: exact baud rate to use. This is a USB CDC virtual serial port rather than a physical UART bridge, so the baud setting typically doesn't matter for this class of device, but that has not been confirmed against FreeWili 2's firmware specifically. -->

The console presents a menu of single letters, each opening a sub-menu of
more single letters — `i` for IO, `w` for wireless, `l` for Linux, `a` for
apps, `g` for GUI, `s` for scripting, `h` for hardware — broadly mirroring
the grouping you see in the on-device app list, though the two aren't a
perfect one-to-one match: console `s` (scripting) and `h` (hardware) have
no folder counterpart in the app list, and the app list's System folder has
no matching top-level console letter. You don't type commands and press
enter for navigation; each keypress acts immediately.
<!-- VERIFY: whether every one of these top-level menu keys is present/enabled on a retail unit, and what a fresh boot's console banner/prompt looks like — confirmed from firmware source (fwMenuMain.cpp's stMenus table) but not from a live device session -->

## 3. On the device itself

Everything above is also reachable from the touchscreen and buttons, without
a host PC at all — see [Screen and buttons](screen-and-buttons.md) for how
the app list, folders, and button map work.

Which one you reach for is mostly a matter of convenience: the GUI app is
easiest for anything visual or file-based, the serial console is quick for
scripting or automation, and the device's own screen needs nothing else
plugged in.
