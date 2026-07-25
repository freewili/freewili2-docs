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

- **IO** — GPIO, Analog IO, I2C, SPI, UART, MDIO, CAN (FD), GPS *(not yet
  implemented)*, USB Sim *(not yet implemented)*
- **Wireless** — IR, RFID *(not yet implemented)*, LORA *(not yet
  implemented)*, SubGHz, Wifi, BT
- **Wi-Li-nux** — Terminal
- **Apps** — Skelltris, Wili8, Doom (all three currently open the same
  underlying app — the Wi-Li-nux Terminal — rather than three separate
  finished games)
- **GUI** — Sound Board, Clock & Alarm, Light Show, Sensors, Camera, TV Out
- **System** — Files, Setup & Actions, Power Management, Sleep, About

This list is read directly from the firmware's menu-building code
(`fwPanelLibDisplay.cpp`, `loadMainMenu()`). Four of the entries above — GPS,
USB Sim, RFID, and LORA — appear in that menu but have no app registered
behind them (no matching `addApp()` call anywhere in the firmware for any of
the four), so selecting one currently does nothing; they're marked above.
Skelltris, Wili8, and Doom, meanwhile, all three dispatch to the same app
(the Wi-Li-nux Terminal) rather than being three distinct finished apps.

A folder's row toggles it open or closed; open folders show their contents
indented underneath. Selecting an app inside a folder — or one of the
top-level items — opens it.

## Panels within an app

Some apps are more than one screen. The **Analog IO** app is a good example:
its main screen lists the four analog input channels and two analog output
channels, and pressing **center** on one of the output rows (`o0` or `o1`)
opens a second panel — the waveform generator — for that channel. **Ok**
leaves that sub-panel and returns you to the app's main screen. Other
multi-screen apps follow the same overall structure — a main panel plus one
or more sub-panels reached by selecting something on it — but which button
leaves a given sub-panel is up to that screen; check its on-screen button
labels rather than assuming Ok always does it (see the button map below).

## Button map

| Button | Action |
|---|---|
| Up / Down | Move through the current list |
| Left / Right | Change the selected value (in a control that has one) |
| Center | Open / activate whatever's selected. On the main menu, this is the same action as Ok. |
| Ok | On the main menu, the same as Center — opens whatever's highlighted. Inside an app, what Ok does is up to that screen: some use it to confirm an edit or leave a sub-panel (the Analog IO waveform screen leaves that way), others don't use it at all. Check the screen's own button labels if you're not sure. |
| Cancel | Back out one level — opens that screen's help instead, on the one screen that has one today (see below) |
| Home | Return to the main menu |
| Fourth A/B/X/Y button | Unconfirmed — see note below |
| Gray / Yellow / Green / Blue / Red | Five context buttons under the screen; each app assigns its own meaning to them (for example, on the Analog IO waveform screen, Green starts the waveform and Red stops it) |

<!-- VERIFY: the fourth A/B/X/Y button's label — the site's spec copy calls
     it "page," the firmware's button-event table defines it as an
     AI-agent button instead of a page button. Whichever it is, its
     specific function on-device is unconfirmed here. -->

## Built-in help

The device has its own on-screen help viewer.

Pressing **Green** on the main menu opens the general help topic. On a
panel that declares its own help topic, **Cancel** opens that topic instead
of backing out. Today, the Analog IO waveform screen is the one screen that
does this — pressing Cancel there opens its dedicated help page directly on
the device. More screens will pick up their own topic as help pages get
written for them — the mechanism is generic, only one screen uses it today.
