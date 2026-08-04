---
title: Quick start
sidebar_position: 2
---

# Quick start

## Power on

Plug the device into USB and it powers on — a USB connection powers FREE-WILi
2 regardless of any button state.

Holding **red** while the device is already running puts it to sleep — the
closest thing to powering off, and the everyday way to power it down. That's
a different action from holding red *at* power-up, which instead forces the
main processor into its recovery bootloader rather than affecting power
state at all — see [Recovery mode](../help/recovery-mode.md) if that's what
you're after. Gray, yellow, and blue have their own separate long-press
shortcuts too (audio mode, setup, and the display bootloader), gated to the
main screen — see [Screen and buttons](screen-and-buttons.md#button-map) and
[Connectors](../hardware/connectors.md#sleep-and-mode-buttons) for what
those do.
<!-- VERIFY: whether there is also a dedicated power-on button (and if so
     which physical button it is) is unconfirmed. FreeWili 1's docs describe
     a gray-button-on / hold-red-5-seconds-off scheme, but FreeWili 2 has a
     different power architecture (a dedicated PIC sequencer managing 17
     power zones), and no power-on button has been identified in the
     FREE-WILi 2 firmware source. What IS confirmed: red's held-while-running
     sleep action is driven by the PIC's own button poll
     (fw2_pic16/full-firmware.X/main.c:163-170), independent of the GUI;
     whether that "deep sleep" is a full power-off or something lighter is
     not confirmed. -->

## The main menu

Once it's up, you land on the main menu: a scrolling list of **panels** —
the screens the firmware itself draws and hands the buttons and touchscreen
to (see [Screen and buttons](screen-and-buttons.md) for the full layout and
how this differs from a real, SD-card-launched app). Some panels are grouped
into folders (IO, Wireless, GUI, System, and others). Use **up** and
**down** on the D-pad to move through the list, and **center** (or **ok**)
to open whatever's highlighted — including opening a folder to reveal the
panels inside it. **Cancel** backs out one level.

## The buttons

Four buttons beside the screen mean the same thing on every panel:

|  | Button | What it does |
|---|---|---|
| ![Ok button](/img/bok.png) | **Ok** | Opens or confirms whatever is selected |
| ![Cancel button](/img/bcancel.png) | **Cancel** | Backs out one level — or opens that screen's help page, where it has one |
| ![Home button](/img/bhome.png) | **Home** | Straight back to the main menu, from anywhere |
| ![Page button](/img/bpage.png) | **Page** | Switches to another screen within the same panel, where there is one |

The five coloured buttons under the screen mean whatever the panel you're
looking at says they mean. The bar along the bottom of the screen always
shows their current labels, so when in doubt, read the bar.

| ![Gray button](/img/bwhite.png) | ![Yellow button](/img/byellow.png) | ![Green button](/img/bgreen.png) | ![Blue button](/img/bblue.png) | ![Red button](/img/bred.png) |
|---|---|---|---|---|
| Gray | Yellow | Green | Blue | Red |

The D-pad moves through whatever is on screen: **up** and **down** through a
list, **left** and **right** to change a selected value, and **center** to
open or activate — the same action as Ok on the main menu.

[Screen and buttons](screen-and-buttons.md#button-map) has the full map,
including the long-press shortcuts.

## Something to try right now

No wiring, no setup: open the **GUI** folder and select **Sensors**. It
reads the onboard IMU, magnetometer, ambient light, and temperature/humidity
sensors directly — nothing to connect, nothing to configure.
<!-- VERIFY: the Sensors panel's on-screen layout and interaction (whether readings appear immediately on open, or need a button press to start) has not been confirmed from source; only the underlying sensor hardware (BMI323, BMM350, OPT4001, SHT40) and the panel's presence in the GUI folder are confirmed -->

From there, [Screen and buttons](screen-and-buttons.md) covers the rest of
the navigation model, and [Connecting](connecting.md) covers the other two
ways to reach the same features — from a host PC, or over a serial
terminal — if you'd rather not do everything on the small screen.
