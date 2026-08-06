---
title: Connectors
sidebar_position: 3
---

# Connectors

Every port on the outside of the case, edge by edge. What each GPIO pin
actually does is on the [Pinout](pinout.md) page; this one is about the
physical connectors and where to find them.

The numbers in each table match the numbered callouts in the picture above it.

## Top edge

![Connectors on the top edge of FREE-WILi 2](/img/ConnectorsTop.png)

| # | Connector | What it's for |
|---|---|---|
| 1 | USB Device | The connection to a host PC. The console, the OneWili API and the FREE-WILi GUI app all reach the device through this port — see [Connecting](../start-here/connecting.md). |
| 2 | IR Window | A cut-out in front of the infrared transmitter and receiver, for line-of-sight control and capture. |
| 3–6 | Mic 1–4 | The four openings for the microphone array. |
| 7 | DVI | Video out to an external monitor or projector, driven by the display processor's HSTX peripheral. |
| 8 | SubGHz Antenna | The external antenna, shared by the CC1101 and the LoRa module. This is the same connector shown on the left edge below. |

## Bottom edge

![Connectors on the bottom edge of FREE-WILi 2](/img/ConnectorsBottom.png)

| # | Connector | What it's for |
|---|---|---|
| 1 | Linux SDCard | The microSD card holding the Raspberry Pi CM0's Linux install. |
| 2 | USB Host 1 | A USB host port — mouse, keyboard, joystick, GPS receiver, serial adapter, thumb drive. |
| 3 | USB Host 2 | A second USB host port, the same as the first. |
| 4 | Linux USB Host | A USB host port belonging to the Linux side rather than the display processor. |
| 5 | Main SDCard | The device's own file system. This card can also be handed to an internal USB card reader so a connected computer sees it as an ordinary mass-storage drive — see [Transferring files](../files-and-apps/transferring-files.md). |

Each host port's 5 V is software-switched, so the device can power-cycle
whatever is plugged into it.

<!-- VERIFY: which of the three host ports is the high-speed one. The previous
     revision of this page said two run at 12 Mbit off the display processor
     and a third at 480 Mbit, sourced from freewili.com's USB Host spec page —
     but that does not say whether the 480 Mbit port is the one the graphic
     labels "Linux USB Host". Speeds are left off the table rather than
     guessing at the mapping. -->

## Left edge

![Connectors on the left edge of FREE-WILi 2](/img/ConnectionsLeft.png)

| # | Connector | What it's for |
|---|---|---|
| 1 | SubGHz Antenna | The threaded external antenna connector for the sub-GHz radio. NFC and 125 kHz RFID use internal antennas instead and have no external connector. |
| 2 | 3.5 mm Audio Jack | Headphone and speaker output, and microphone input, over one combined connector — so a standard headset works without an adapter. |

<!-- VERIFY: (a) the antenna connector's exact type. It is drawn as a gold
     threaded coax connector, which looks like SMA, but SMA and RP-SMA are not
     distinguishable from the render and the previous revision explicitly
     declined to claim SMA. (b) That the antenna in this view and the one in
     the top-edge view are the same physical connector at the corner the two
     edges share - the device is documented as having a single switched
     external antenna, so two would be a surprise, but the two renders are
     from different angles and this has not been confirmed against a unit.
     (c) The jack being TRRS (combined out + mic) is carried over from the
     previous revision; the graphic only labels it "3.5 mm Audio Jack", and
     the device has its own four-microphone array on the top edge. -->

## Right edge

![Connectors on the right edge of FREE-WILi 2](/img/ConnectorsRight.png)

| # | Connector | What it's for |
|---|---|---|
| 1 | 10 Position Analog GPIO | The 10-pin analog header. |
| 2 | 20 Position GPIO | The 20-pin GPIO header — software-defined SPI, UART, I2C, CAN FD and general-purpose IO. |

Both headers are also what [Orca expansion boards](orca-modules.md) plug into.
See [Pinout](pinout.md) for what sits on each pin.
