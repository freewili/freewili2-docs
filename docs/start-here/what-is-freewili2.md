---
title: What FREE-WILi 2 is
sidebar_position: 1
---

# What FREE-WILi 2 is

FREE-WILi 2 is a handheld, open-hardware electronics multitool: a pocket lab
for GPIO, analog I/O, wireless protocols, and retro gaming, built around two
RP2350 microcontrollers plus a Raspberry Pi CM0 running Linux.
<!-- VERIFY: "electronics multitool" / "pocket lab" framing is site marketing copy; confirm this is the description the docs owner wants to lead with -->

## Two brains, and a few more

There are two RP2350 chips on the board: one **main** processor that handles
IO and scripting, and one **display** processor that drives the screen,
buttons, sound, and DVI output. Each has 8 MB of SRAM and 16 MB of flash.
Alongside them: an ICE40UP5K FPGA (its own 8 MB SRAM) for things the RP2350's
PIO can't do, a Raspberry Pi CM0 running Linux, and an ESP32-C5 for WiFi and
Bluetooth.

There's also a dedicated ultra-low-power microcontroller that switches 17
separate power zones on and off — so, for example, the Linux side only draws
power when something actually needs it.

## Screen and controls

The front of the device is dominated by a 3.5" capacitive touchscreen at
480×320. Around it: a 5-way D-pad, four backlit A/B/X/Y buttons labeled
**home**, **ok**, **cancel**, and a fourth button, and five backlit context
keys under the screen whose function changes with whatever's on screen.
There's also a two-press-per-letter keyboard for text entry.
<!-- VERIFY: the fourth A/B/X/Y button's label — the site's spec copy calls it "page," while the firmware's button-event table (fwGUIEvents.h) defines an AI-agent button instead of a page button in that same slot (and a separate "page" control event is wired to the same AI handler in rpControl.cpp). These likely name the same button mid-rename for the new AI-agent feature, but the current on-device label/behavior is unconfirmed. -->

Full-color LEDs are visible from multiple sides for status, and some buttons
light up on their own when they're the one that matters for what you're doing.

## Audio

A 0.5 W speaker and a 4-microphone phased array handle sound, and a 3.5 mm
jack lets you plug in headphones or an external mic.
<!-- VERIFY: 0.5W speaker figure and 4-mic array count are from site spec copy; confirm against a retail unit -->

## Ports and expansion

Two GPIO connectors — a 20-pin and a 10-pin analog header — bring out
software-defined IO: SPI, UART, I2C, and general GPIO, plus 0–5 V analog
inputs and 0 to roughly 4.84 V analog outputs at 25 kHz. There's also a
programmable 1–5.5 V / 1.5 A supply with a MOSFET crowbar for voltage
glitching, and full CAN FD (8 Mbit) support.

FREE-WILi calls its expansion boards **Orcas** — they plug into the GPIO
header for use-case-specific add-ons, and a rigid mounting system with
off-the-shelf cases keeps them secure.
<!-- VERIFY: exact physical placement of each port/connector (which edge, front vs. back) — not described in the source material available here -->

Storage is a dual microSD setup (one card for the device, one for the Linux
side), and the SD card also doubles as the boot path: drop a UF2 file on it
and the device can load and run it directly.

## Wireless

WiFi (2.4 and 5 GHz) and Bluetooth LE come from the onboard ESP32-C5.
Sub-GHz uses a single antenna that switches between a CC1101 radio and a
LoRa radio — FREE-WILi 2 ships with Meshtastic support, so it can join a
mesh network out of the box. NFC and 125 kHz RFID have their own internal
antennas, and there's IR transmit/receive through a dedicated window in the
case.

## Sensors

An IMU (BMI323) and magnetometer (BMM350) give 9 degrees of motion sensing,
alongside an ambient light sensor (OPT4001) and a temperature/humidity
sensor (SHT40).

## Video and gaming

A full-size DVI output lets you drive an external display. The display
processor's hardware is closely compatible with Adafruit's Fruit Jam, which
is how the team brought up PICO-8 and Doom on the device.

## Battery and physical size

The device carries a 3000 mAh battery with USB-aware charging, managed by
the power-zone microcontroller. Overall dimensions are 152.4 × 78.9 × 22.3 mm
(6.00 × 3.11 × 0.88 in).
<!-- VERIFY: weight is not published in the site spec sheet (listed as TBD there) -->
<!-- VERIFY: battery life in hours of typical use is not documented anywhere in the source material -->
<!-- VERIFY: what ships in the box (cables, case, Orca modules, etc.) is not documented anywhere in the source material -->

## Firmware out of the box

The default firmware runs every feature already: a USB command-line
interface, the OneWili API, GUI screens, and stand-alone scripting. It's
also a bootloader — it can load and launch a UF2 file straight from the
device's own menu, no host PC required.
