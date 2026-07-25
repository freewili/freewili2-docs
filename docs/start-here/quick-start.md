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
