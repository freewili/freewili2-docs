---
title: Quick start
sidebar_position: 2
---

# Quick start

## Power on

Press the power button to turn the device on, or just plug it into USB — a
USB connection powers the device regardless of the button state.
<!-- VERIFY: which physical button (color/position) is the power button on FREE-WILi 2, and the press-and-hold duration to power off. FreeWili 1's docs describe a gray-button-on / hold-red-5-seconds-off scheme, but FreeWili 2 has a different power architecture (a dedicated PIC sequencer managing 17 power zones) and this has not been confirmed against FreeWili 2 specifically. -->

## The main menu

Once it's up, you land on the main menu: a scrolling list of on-device apps,
some grouped into folders (IO, Wireless, GUI, System, and others — see
[Screen and buttons](screen-and-buttons.md) for the full layout). Use **up**
and **down** on the D-pad to move through the list, and **center** (or
**ok**) to open whatever's highlighted — including opening a folder to reveal
the apps inside it. **Cancel** backs out one level.

## Something to try right now

No wiring, no setup: open the **GUI** folder and select **Sensors**. It
reads the onboard IMU, magnetometer, ambient light, and temperature/humidity
sensors directly — nothing to connect, nothing to configure.
<!-- VERIFY: the Sensors app's on-screen layout and interaction (whether readings appear immediately on open, or need a button press to start) has not been confirmed from source; only the underlying sensor hardware (BMI323, BMM350, OPT4001, SHT40) and the app's presence in the GUI folder are confirmed -->

From there, [Screen and buttons](screen-and-buttons.md) covers the rest of
the navigation model, and [Connecting](connecting.md) covers the other two
ways to reach the same features — from a host PC, or over a serial
terminal — if you'd rather not do everything on the small screen.
