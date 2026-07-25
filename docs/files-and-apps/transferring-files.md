---
title: Transferring files
sidebar_position: 2
---

# Transferring files

## Storage layout

FREE-WILi 2 has two microSD cards: one for the device's own file system
(scripts, sounds, images, app data), and one dedicated to the Raspberry Pi
CM0's Linux install. They're independent — files on one aren't visible from
the other.
<!-- VERIFY: the device-side card (owned by the main processor, mounted as
     drive "1:" in its file system code, and shared with the display
     processor over an internal link) is confirmed from the firmware
     source. The second, CM0-side card is confirmed only from freewili.com's
     spec pages (the CM0 is a separate Raspberry Pi Compute Module running
     its own Linux image) — the RP2350 firmware examined for this page
     doesn't touch that card at all, so its physical slot, removability, and
     exact contents aren't confirmed here. -->

## The on-device Files app

**System > Files** is the on-device file browser — see
[Running apps](running-apps.md#the-top-level-items-in-plain-terms) for what
it does and how finished it is.

## Getting files on and off

**Swap the device's card to the built-in USB reader.** Pressing **gray**
swaps the device-side microSD card onto the built-in high-speed USB reader,
where it shows up on a connected host computer as an ordinary USB
mass-storage drive — drag files back and forth like any USB drive, no
special software required, and the reader is Raspberry Pi Imager-compatible
too. See [Connectors](../hardware/connectors.md#storage) for the mux
mechanism this relies on and how this differs from gray's separate
long-press action.

**A USB thumb drive, the other direction — with a caveat.** FREE-WILi 2's USB
host ports (see [Connectors](../hardware/connectors.md)) can recognize a
plugged-in USB thumb drive at the hardware level — the firmware can identify
it and read back its capacity — but as of this writing that plumbing doesn't
yet reach an on-device file browser, so there isn't currently a way to copy
files to or from a thumb drive through the device's own screen. The **IO**
folder's **USB Sim** entry looks like it's meant to be the front end for this
eventually, but it's currently an empty menu item with no app wired up behind
it.
<!-- VERIFY: whether thumb-drive file browsing has since been wired up to
     an on-device app — confirmed at the time this page was written that
     USB-host mass-storage device detection exists
     (usb-host/fwUSBHostMSC.cpp) but isn't connected to a file system mount
     or a UI, and that the on-screen "USB Sim" item (fwPanelLibDisplay.h /
     fwPanelLibMain.h APP_SELECTED_USB_SIM) has no panel registered against
     it. -->

**Drop a UF2 straight on the card to boot it.** The device's SD-card UF2
bootloader can load and run a UF2 file placed on the card directly — no
cables needed. See [Firmware update](../start-here/firmware-update.md) for
using this to flash new firmware, and
[Recovery mode](../help/recovery-mode.md) if a firmware update goes wrong.

## FREE-WILi GUI, from the card

The [FREE-WILi GUI](https://github.com/freewili/freewili-gui) desktop app can
be launched directly from the device's SD card with no separate install — a
convenient way to move files and manage the device from a host PC without
setting anything up first. See [Connecting](../start-here/connecting.md) for
the other ways to reach the same features.
