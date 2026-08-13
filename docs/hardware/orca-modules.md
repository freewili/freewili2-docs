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
you swap modules.

## Available Orcas

| Orca | What it adds |
|---|---|
| [Maestro Debug Orca](#maestro-debug-orca) | USB debug probe and IO test points |
| [Jambu Serial LED Control Orca](#jambu-serial-led-control-orca) | 8-channel serial LED driver |
| [SAN DIEGO Orca](#san-diego-orca) | CAN FD, RS485, and single-pair automotive Ethernet |
| [Humpback Orca](#humpback-orca) | Focused ISO CAN FD interface |


### Maestro Debug Orca

A troubleshooting and development the gives you Probe and IO test points. It gives you:

- A Pico-scope-compatible logic analyzer connector
- Status LEDs plus 6 programmable serial RGB LEDs
- Switches for exercising GPIO inputs
- I2C (Qwiic) and SD card prototyping connectors
- A jumper for selecting or injecting IO voltage
- A pass-through connector for stacking another Orca underneath it

There is also an integrated Raspberry Pi Debug Probe for flashing and debugging but this is only useful for FreeWili 1 OG. The FreeWili 2 includes its own debuggers inside the device.

### Jambu Serial LED Control Orca

An 8-channel LED driver breakout for common-anode serial RGB LED strips,
individual LEDs, and incandescent bulbs. Control is a two-wire I2C interface
(Qwiic-compatible), and the board is powered from its own 5 V barrel jack
rather than drawing from FREE-WILi 2 itself.

### SAN DIEGO Orca

Puts FREE-WILi 2 on vehicle and industrial networks: exposes the internal ISO CAN FD channel and adds one RS485 channel, and both 10BASE-T1S
(multidrop) and 10BASE-T1L (long-reach, up to 1 km) single-pair Ethernet.
Everything routes through a single rugged DB-15 connector, and the module can
be powered directly from vehicle battery voltage (VBATT) rather than relying
on FREE-WILi 2's own supply.

### Humpback Orca

A smaller, CAN-FD-only counterpart to SAN DIEGO:  it exposes internal ISO CAN FD channel and adds VBATT power input, and a DB-15
connector. 

## Making your own

Example Orca project templates are published at
[freewili/fw2-orca-templates](https://github.com/freewili/fw2-orca-templates),
so you can design a custom module against the same connector and mounting
system the official Orcas use.

The repository currently includes a KiCad starter project (`ORCATemplate`)
with the two Orca connector symbols (`CN1`/`CN2`), a 3D `.step` model, and
the footprint for the auto-detect EEPROM. An Altium Designer template isn't
in the repository yet — ask on
[Discord](https://discord.com/invite/XJRBUCX62z) if you need one.
