---
title: Connectors
sidebar_position: 3
---

# Connectors

The physical ports on the case, separate from the GPIO pinout covered on the
[Pinout](pinout.md) page.

## USB

FREE-WILi 2 has multiple USB roles in play at once:

- **Three USB host ports**, for plugging in peripherals — mouse, keyboard,
  joystick, GPS receiver, a serial adapter, or a thumb drive. Two connect to
  the display processor at 12 Mbit; the third is high-speed, at 480 Mbit.
  Each port's 5 V is software-switched from the display processor, so it can
  also power-cycle whatever's plugged into it.
- **A device-mode USB connection to a host PC**, which is how the console,
  the OneWili API, and the FREE-WILi GUI app all reach the device (see
  [Connecting](../start-here/connecting.md)).

<!-- VERIFY: exact physical connector types (USB-C vs USB-A) and which
     specific port on the case is the host-PC device connection versus which
     are the three host ports — confirmed from freewili.com's USB Host spec
     page that three host ports exist at those speeds, and from FreeWili 1's
     docs that the device-mode connection exposes multiple serial ports over
     an internal hub, but not the physical layout of connectors on the
     FREE-WILi 2 case. -->

## Storage

Two microSD cards: one for the device's own file system, one dedicated to
the Raspberry Pi CM0's Linux install. The device-side card sits behind an
I/O-expander mux that toggles it between the main processor and an
integrated high-speed USB card reader — the **gray** button drives that mux.
Handed to the reader, the card presents to a connected computer as an
ordinary USB mass-storage drive, and the reader is Raspberry Pi
Imager-compatible for flashing a fresh image straight onto the card. See
[Transferring files](../files-and-apps/transferring-files.md) for how this
is actually used.
<!-- VERIFY: physical location/accessibility of each microSD slot on the
     case (e.g. whether either requires opening the case). Also: the
     gray-button/mux mechanism is confirmed from
     targets/fw2mainsbl/stage3.cpp in the firmware source, but that's
     bootloader-stage code — whether the same gray-button behavior applies
     during normal runtime, and whether it's a short press or a hold, is not
     confirmed. -->

## Audio

A 3.5 mm TRRS jack carries both headphone/speaker output and microphone
input over a single combined connector, so a standard headset works without
extra adapters.

## Video

A full-size DVI connector, driven by the display processor's HSTX
peripheral, for sending the device's screen output to an external monitor
or projector.

## GPIO and analog

The 20-pin GPIO header and 10-pin analog header — see
[Pinout](pinout.md) for what's on each pin.

## Antenna

The sub-GHz radio (switchable between the CC1101 and the LoRa module) uses a
single external antenna connector. NFC and 125 kHz RFID use internal
antennas near the back of the case instead, with no external connector.
<!-- VERIFY: antenna connector type (SMA vs other) and physical location —
     confirmed only that it's described as "external" on freewili.com's
     sub-GHz/LoRa spec page; FreeWili 1's docs describe "two SMA connectors"
     but FREE-WILi 2's radio architecture (single switched antenna) differs
     enough that the SMA claim isn't safe to carry over unconfirmed. -->

## IR window

A cut-out in the case in front of the IR transmit/receive circuitry, for
line-of-sight infrared control and capture.

## Onboard debug probe

FREE-WILi 2 has a debug probe built into the board itself — an enhanced
Raspberry Pi Debug Probe capable of flashing and debugging both RP2350s and
the LoRa module's STM32 processor, plus JTAG and serial access to the
ESP32-C5 — all without an external programmer. This is what freed up the
GPIO header's former SWD pins (see [Pinout](pinout.md)) for CAN FD instead.
<!-- VERIFY: whether the onboard debug probe is reachable from an external
     connector (for probing other boards) or is purely internal/self-only —
     not confirmed from source material available here. -->

## Power button

Long-pressing **red** puts the device into deep sleep — the closest thing to
powering off. Long-pressing **gray** switches to an audio-only mode, and
long-pressing **yellow** enters a setup mode; both are confirmed from the
firmware's button-handling code but not otherwise documented here.
<!-- VERIFY: this repeats the same open question noted on the Quick start
     page in Start Here — which action actually powers the device ON, and
     whether "deep sleep" via long-pressing red is equivalent to a full
     power-off or something lighter. Confirmed from rmpLib/rpPanelManager.cpp's
     long-press button switch (gray→audio mode, yellow→setup mode,
     blue→display bootloader, red→deep sleep) but the power-on action and
     the practical meaning of "deep sleep" are not confirmed. See
     [Recovery mode](../help/recovery-mode.md) for the separate
     bootloader-entry button combination (blue, long-press, while USB
     charging). -->
