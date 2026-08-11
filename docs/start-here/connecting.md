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

One caution: avoid opening the console at exactly **1200 baud**. Opening
and closing a port at that rate is the signal the official firmware
updater uses to reboot the main processor into its UF2 bootloader — so a
serial terminal pointed at the console with that rate set does the same
thing by accident: the console port disappears and a `FW2Main FBL` drive
mounts instead, which can easily be mistaken for a crash. The device
isn't damaged, and getting out is easy: press **yellow + green + blue**
together (the processor reset described in
[Recovery mode](../help/recovery-mode.md)) and the device boots back to
normal. Unplugging the USB cable does not help — on battery power the
device simply stays in the bootloader. Copying a `FW2Main.uf2` firmware
file onto the mounted drive also gets you out, by flashing it (see
[Firmware update](firmware-update.md)). Ordinary rates such as 115200
are safe. (Confirmed on firmware `FW2 v07`.)
<!-- VERIFY: owner-confirmed on FW2 v07 (macOS host): the 1200-baud touch
     drops the main CPU into the "FW2Main FBL" bootloader (UF2 Bootloader
     v1.1, Board-ID: FW2 rev1); the yellow+green+blue reset exits it back
     to normal firmware; copying stock FW2Main.uf2 also exits by
     flashing; a USB unplug/replug does NOT exit it (battery keeps the
     board running and the bootloader persists). The updater's use of the
     same signal is visible in freewili-updater's source (flasher.rs,
     enter_uf2 opens the port at 1200). -->

The serial console presents a menu of letters for navigation and functions. The menus are described in Menus & Commands.

## 3. Use the screen

Everything above is also reachable from the touchscreen and buttons, without
a host PC at all — see [Screen and buttons](screen-and-buttons.md) for how
the panel list, folders, and button map work.

Which one you reach for is mostly a matter of convenience: the GUI app is
easiest for anything visual or file-based, the serial console is quick for
scripting or automation, and the device's own screen needs nothing else
plugged in.
