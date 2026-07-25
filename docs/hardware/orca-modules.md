---
title: Orca modules
sidebar_position: 4
---

# Orca modules

**Orca** is FREE-WILi's name for its expansion boards — see
[What FREE-WILi 2 is](../start-here/what-is-freewili2.md#ports-and-expansion)
for the short version. This page goes deeper, into the connector, mounting,
and auto-detect mechanics.

Orcas plug into the 20-pin GPIO connector — the same pin layout FreeWili 1
used, kept on FREE-WILi 2 specifically so the existing library of Orcas
keeps working, and covered pin by pin on [Pinout](pinout.md). A rigid
mounting system with off-the-shelf case options holds an Orca in place
without flex or intermittent connections, unlike a header connection resting
on friction alone.

An EEPROM on each Orca lets FREE-WILi 2 auto-detect what's plugged in and
configure itself accordingly, rather than requiring manual setup every time
you swap modules. Practically, this is also why Orcas built for FreeWili 1
generally keep working here unmodified: the connector kept its pin mapping,
and the auto-detect step accounts for the rest.
<!-- VERIFY: the EEPROM auto-detect mechanism is freewili.com's own
     description of how Orca identification works; the specific protocol
     (which bus it uses, when the read happens, and exactly what
     "configure itself accordingly" changes in firmware) is not confirmed
     against firmware source for this page — no EEPROM-reading /
     Orca-identification code was found in the fwOrcaSetup* sources
     examined. -->

## Available Orcas

| Orca | What it adds |
|---|---|
| [Maestro Debug Orca](#maestro-debug-orca) | USB debug probe and IO test points |
| [Jambu Serial LED Control Orca](#jambu-serial-led-control-orca) | 8-channel serial LED driver |
| [SAN DIEGO Orca](#san-diego-orca) | CAN FD, RS485, and single-pair automotive Ethernet |
| [Humpback Orca](#humpback-orca) | Focused ISO CAN FD interface |

<!-- VERIFY: this list reflects what freewili.com's own explore-orcas page
     currently shows as FREE-WILi 2 Orcas. FreeWili 1's docs additionally
     describe a Bottlenose WiFi Orca (ESP32-C6 dev board) and a WILEYE Camera
     Orca, neither of which appears on the current site's Orca lineup — they
     may be discontinued, FreeWili-1-only, or simply not yet migrated to the
     new site. Confirm current availability before promising either one. -->

### Maestro Debug Orca

A troubleshooting and development board built around a Raspberry Pi Debug
Probe and IO test points. It gives you:

- An integrated Raspberry Pi Debug Probe for flashing and debugging
- A Pico-scope-compatible logic analyzer connector
- Status LEDs plus 6 programmable serial RGB LEDs
- Switches for exercising GPIO inputs
- I2C (Qwiic) and SD card prototyping connectors
- A jumper for selecting or injecting IO voltage
- A pass-through connector for stacking another Orca underneath it

<!-- VERIFY: FreeWili 1's Maestro documentation describes the debug probe as
     debugging "the RP2040 main controller." FREE-WILi 2's main and display
     processors are both RP2350, and the device now has its own onboard
     debug probe built in (see Connectors, "onboard debug probe"). Whether
     Maestro's copy is simply unrevised FreeWili-1-era text, or whether
     Maestro still serves a distinct purpose (e.g. debugging an Orca's own
     MCU, or serving as an external probe when the onboard one isn't
     enough), is unconfirmed. -->

### Jambu Serial LED Control Orca

An 8-channel LED driver breakout for common-anode serial RGB LED strips,
individual LEDs, and incandescent bulbs. Control is a two-wire I2C interface
(Qwiic-compatible), and the board is powered from its own 5 V barrel jack
rather than drawing from FREE-WILi 2 itself.

### SAN DIEGO Orca

Puts FREE-WILi 2 on vehicle and industrial networks: one ISO CAN FD channel
with selectable termination, one RS485 channel, and both 10BASE-T1S
(multidrop) and 10BASE-T1L (long-reach, up to 1 km) single-pair Ethernet.
Everything routes through a single rugged DB-15 connector, and the module can
be powered directly from vehicle battery voltage (VBATT) rather than relying
on FREE-WILi 2's own supply.

### Humpback Orca

A smaller, CAN-FD-only counterpart to SAN DIEGO: one ISO CAN FD channel with
selectable on-board 120 ohm termination, VBATT power input, and a DB-15
connector. If you only need CAN FD and not RS485 or Ethernet, this is the
lighter option — you can move up to SAN DIEGO Orca later without changing
your workflow.

## Making your own

FREE-WILi publishes example Orca projects for both KiCad and Altium
Designer, so you can design a custom module against the same connector and
mounting system the official Orcas use.
<!-- VERIFY: where the current KiCad/Altium example project files live for
     FreeWili 2 specifically — FreeWili 1's docs point at project files that
     have not been confirmed to be FreeWili-2-compatible. -->
