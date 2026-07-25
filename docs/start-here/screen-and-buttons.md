---
title: Screen and buttons
sidebar_position: 3
---

# Screen and buttons

## The app list

The main menu is a single scrolling list. A handful of items sit at the top,
outside any folder — **Command Panel**, **Scripts**, **Wili Blocks**,
**App Data**, **Editor** — and the rest are grouped into folders you open
and close from the list itself:

- **IO** — GPIO, Analog IO, I2C, SPI, UART, MDIO, CAN (FD), GPS, USB Sim
- **Wireless** — IR, RFID, LORA, SubGHz, Wifi, BT
- **Wi-Li-nux** — Terminal
- **Apps** — Skelltris, Wili8, Doom
- **GUI** — Sound Board, Clock & Alarm, Light Show, Sensors, Camera, TV Out
- **System** — Files, Setup & Actions, Power Management, Sleep, About

<!-- VERIFY: this list is read directly from the firmware's menu-building
     code (fwPanelLibDisplay.cpp, loadMainMenu()) and reflects what that
     code currently emits. A couple of items in the Apps folder point at
     the same underlying app entry in that code, which may mean they are
     still work in progress rather than three distinct finished apps —
     worth confirming against a retail unit before treating this list as
     final. -->

A folder's row toggles it open or closed; open folders show their contents
indented underneath. Selecting an app inside a folder — or one of the
top-level items — opens it.

## Panels within an app

Some apps are more than one screen. The **Analog IO** app is a good example:
its main screen lists the four analog input channels and two analog output
channels, and pressing **center** on one of the output rows (`o0` or `o1`)
opens a second panel — the waveform generator — for that channel. **Ok**
leaves the sub-panel and returns you to the app's main screen. Other apps
follow the same pattern: a main panel, and one or more sub-panels reached
by selecting something on it.

## Button map

| Button | Action |
|---|---|
| Up / Down | Move through the current list |
| Left / Right | Change the selected value (in a control that has one) |
| Center | Open / activate whatever's selected |
| Ok | Confirm, or leave a sub-panel |
| Cancel | Back out one level |
| Home | Return to the main menu |
| Fourth A/B/X/Y button | Unconfirmed — see note below |
| Gray / Yellow / Green / Blue / Red | Five context buttons under the screen; each app assigns its own meaning to them (for example, on the Analog IO waveform screen, Green starts the waveform and Red stops it) |

<!-- VERIFY: the fourth A/B/X/Y button's label — the site's spec copy calls
     it "page," the firmware's button-event table defines it as an
     AI-agent button instead of a page button. Whichever it is, its
     specific function on-device is unconfirmed here. -->

## Built-in help

The device has its own on-screen help viewer, built from the same Markdown
files this site's help section is generated from — press **Green** on the
main menu to open it. The firmware also has a wire command that can point
the viewer at a specific topic (for example, the Analog IO waveform screen
has a dedicated help page compiled in), so a future firmware update can wire
individual screens' **Cancel** button straight to their own topic instead of
just backing out.
<!-- VERIFY: as read from the current firmware source, only the main-menu Green button is confirmed to open the help viewer (loading "main.md"); no individual app's Cancel handler was found calling showHelp() with a per-screen topic yet, even though the per-screen topic (e.g. "analog-waveform.md") is already compiled into the help-topic table. Confirm current vs. planned behavior with the firmware team before publishing this as present-tense. -->

