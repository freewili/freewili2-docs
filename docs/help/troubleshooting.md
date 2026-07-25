---
title: Troubleshooting
sidebar_position: 2
---

# Troubleshooting

## Device not detected by a host computer

- Confirm you're using a cable capable of a USB data connection (not a
  charge-only cable).
- Check your OS's device/port list — Device Manager on Windows, `/dev/tty*`
  on Linux/macOS — for a new serial (COM) device appearing when you plug in.
  See [Connecting](../start-here/connecting.md).
- Try a different USB port or cable if nothing appears.
<!-- VERIFY: specific Windows driver requirements, exact expected device
     name in Device Manager, and any other host-side enumeration
     requirements — not confirmed from source material available here. -->

## No display / blank screen

<!-- VERIFY: this section could not be sourced. No README, code comment, or
     help document in the firmware repository documents common causes of a
     blank screen or DVI issues — treat this section as needing direct input
     from the hardware/firmware team before publishing. -->

If the touchscreen stays blank on power-up, check that the device is
actually powering on (see [Recovery mode](recovery-mode.md) for the button
map) before assuming a display fault. If you're driving an external monitor
over the DVI output and see nothing, confirm the monitor accepts DVI
directly (not HDMI-only without an adapter that carries DVI's signal type).

## Battery not charging

FREE-WILi 2 uses a BQ25896 charge-management IC, and its status — including
specific fault conditions (input fault, thermal fault, a charge timer
expiring) — is decoded and shown on the **About > Battery** screen, along
with the input voltage the device is actually seeing (VBUS) and its internal
system voltage (VSYS). Check that screen first: it will usually tell you
*what* is wrong (no input detected, a thermal condition, etc.) rather than
just that charging isn't happening.
<!-- VERIFY: confirmed the charger IC (BQ25896) and that a fault/status
     decode exists and is shown on an About > Battery panel, from
     rmpLib/rpBatteryChargeBQ25896.h/.cpp, rmpLib/rpPICComm.h, and
     panels/fwAboutPanelBattery.cpp. Not confirmed: the exact on-screen
     wording for each fault condition, or what user action resolves each
     one (e.g. what to do about a reported thermal fault beyond letting the
     device cool). -->

If the screen shows no fault but charging still isn't progressing, try a
different USB power source — the charger is USB-aware and pulls the most it
safely can from whatever's connected, so a low-current source (like some PC
USB ports) may simply be charging very slowly rather than not at all.

## Firmware update failure

See [Firmware update](../start-here/firmware-update.md) for the normal
update path. If an update didn't take, or the device won't start normally
afterward:

- The main processor has an automatic fallback: if its bootloader can't find
  a valid firmware image, it drops back into USB mass-storage mode by
  itself, ready for another attempt — you shouldn't need to do anything
  special to retry a failed main-processor update.
- If the display processor doesn't come back after an update, see
  [Recovery mode](recovery-mode.md) for how to force it back into its own
  bootloader.
- If the main processor doesn't come back either — the automatic fallback
  above didn't kick in, or the unit won't start at all — hold the **red**
  button at power-up. That forces the main processor into its recovery
  bootloader regardless of what firmware state it's in; see
  [Recovery mode](recovery-mode.md#last-resort-hold-red-at-power-up).

## GPIO not responding

This is carried over from FreeWili 1's troubleshooting guidance and updated
for FREE-WILi 2's software-selected IO voltage (see
[Pinout](../hardware/pinout.md#io-voltage)):

1. **Check IO voltage first.** FREE-WILi 2 selects the GPIO header's voltage
   in software rather than with a physical jumper — confirm firmware has a
   voltage source selected and that the readback ADC shows the voltage you
   expect.
2. **Check pin direction.** Confirm the pin's configured as input or output
   to match what you're trying to do.
3. **Isolate the protocol.** Test one protocol (SPI, I2C, UART) or one pin at
   a time rather than a full setup.
4. **Use the Logic Analyzer** to look at the actual signal if a protocol
   still won't come up — it's built in and can trigger on any GPIO. It's a
   serial-console feature rather than an on-device app: reach it from the
   IO menu over a serial terminal — see [Connecting](../start-here/connecting.md)
   for how to open the console.
5. **Check grounds.** A shared, short ground connection between FREE-WILi 2
   and whatever it's talking to fixes a surprising number of "random"
   protocol failures.
<!-- VERIFY: steps 2-5 are carried over from FreeWili 1's GPIO
     troubleshooting documentation on the assumption that pin-direction
     configuration, protocol isolation, the Logic Analyzer, and grounding
     advice all still apply the same way on FREE-WILi 2 — this specific
     troubleshooting flow was not independently re-confirmed against
     FREE-WILi 2 firmware for this page. -->

## Still stuck

The [FREE-WILi Discord](https://discord.com/invite/XJRBUCX62z) is where the
team and other owners answer questions that this page doesn't cover.
