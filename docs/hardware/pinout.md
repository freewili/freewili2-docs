---
title: Pinout
sidebar_position: 2
---

# Pinout

FREE-WILi 2 keeps the 20-position GPIO connector from FreeWili 1 so the
existing library of Orca modules keeps working, and adds a new 10-position
connector oriented toward analog functions. Both are backed by an RP2350
(the **main** processor) rather than FreeWili 1's RP2040.

**This page is a port from FreeWili 1's pinout documentation, corrected
against `FW2Main_pin_definitions.h`.** The signal-to-GPIO mapping below is
confirmed identical between the two boards for every pin that carries the
same signal name — the header was evidently kept pin-compatible on purpose.
Two pins changed function, called out below.

## 20-pin GPIO header

| Pin | Signal | Main RP2350 GPIO | Default direction | Notes |
|---|---|---|---|---|
| 1 | SPI1 chip select | GPIO13 | Output | |
| 2 | 5 V out | — | Output | Power for external circuits |
| 3 | GPIO27 | GPIO27 | Output | General purpose |
| 4 | IO voltage select / sense | — | — | See *IO voltage* below — no longer a plain jumper input |
| 5 | UART1 RX | GPIO9 | Input | |
| 6 | 3.3 V out | — | Output | Power for external circuits |
| 7 | UART1 CTS | GPIO10 | Input | |
| 8 | I2C0 SCL | GPIO17 | In/out | Software-controlled pull-up |
| 9 | UART1 TX | GPIO8 | Output | |
| 10 | I2C0 SDA | GPIO16 | In/out | Software-controlled pull-up |
| 11 | UART1 RTS | GPIO11 | Output | |
| 12 | SPI1 RX (MISO) | GPIO12 | Input | |
| 13 | SPI1 TX (MOSI) | GPIO15 | Output | |
| 14 | GPIO26 | GPIO26 | Input | General purpose |
| 15 | SPI1 SCLK | GPIO14 | Output | |
| 16 | CAN FD (was SWD clock on FreeWili 1) | — | — | See note below |
| 17 | GPIO25 | GPIO25 | Output | Also the board status LED |
| 18 | CAN FD (was SWD data on FreeWili 1) | — | — | See note below |
| 19 | GND | — | — | |
| 20 | GND | — | — | |

<!-- VERIFY: header pins 1, 3, 5, 7-15 GPIO numbers are confirmed by comparing
     FW2Main_pin_definitions.h's IO_UART1_*, IO_SPI1_*, IO_I2C0_*, and
     IO_GPIO26/27 defines against FreeWili 1's published pinout — every
     signal name maps to the identical RP2350 GPIO number FreeWili 1 used on
     its RP2040, which is why this table treats them as solid. Pin 17's
     status-LED claim is independently confirmed from
     FW2Main_pin_definitions.h itself, which defines GPIO25 as `LED_PIN` —
     that's the one row in this table not backed by an IO_* header define
     (contrast IO_GPIO26_DEFIN and IO_OUT_GPIO27_DEFOUT for the neighboring
     rows), so what's genuinely unconfirmed is whether GPIO25 actually
     reaches header pin 17 at all, rather than being routed only to the
     onboard LED. What is NOT independently confirmed from a schematic: the
     physical pin-1 orientation / keying of the connector. -->

**Pins 16 and 18 changed function.** FreeWili 1 used these as the SWD debug
clock and data lines for an external debug probe. FREE-WILi 2 has its own
debug probe built into the board (see
[Connectors](connectors.md#onboard-debug-probe)), so external SWD is no
longer needed there — freewili.com's own spec pages confirm these pins now
carry CAN FD instead. The exact CAN FD signal names on pins 16/18 are not
confirmed from a source this page's author read directly.
<!-- VERIFY: exact CAN FD signal assignment on header pins 16 and 18 (e.g.
     which is CAN-H/CAN-L or TX/RX) — confirmed only that "the pins formerly
     used for debugging are now CAN FD pins" per freewili.com's CAN FD spec
     page, not the specific pinout. -->

## IO voltage

FreeWili 1 set the header's IO voltage with a physical jumper (2-4 for 5 V,
4-6 for 3.3 V, or an external 1.1-5.5 V supply on pin 4). FREE-WILi 2 replaces
this with software selection: firmware picks from four sources — the 5 V
rail, the 3.3 V rail, an externally-applied voltage on the IO pin (the
FreeWili 1 behavior), or the onboard programmable power supply — and an ADC
continuously reads back the voltage actually present, so firmware always
knows what's on the pin instead of assuming a jumper was set correctly.
<!-- VERIFY: which on-device menu or console command performs this
     software voltage selection, and the exact valid range/step — confirmed
     only that four selectable sources plus ADC readback exist, from
     freewili.com's GPIO spec page. -->

## Electrical specifications

FreeWili 1's pinout documentation lists these buffer chip specs for the
20-pin header:

- **SN74LXC1T45** buffered pins (UART, SPI, GPIO 25/26/27): 24 mA @ 3.3 V or
  32 mA @ 5 V recommended, 50 mA absolute maximum, 1.1-5.5 V range.
- **PCA9517** buffered pins (I2C): 50 mA maximum, 0.9-5.5 V range, with
  software-controllable 10 kΩ pull-ups.

<!-- VERIFY: whether FREE-WILi 2 still uses these exact buffer chip part
     numbers. freewili.com's own GPIO spec page for FREE-WILi 2 says "the
     I2C translator also received a speed upgrade," which suggests the I2C
     buffer chip may have changed from the PCA9517 FreeWili 1 used — not
     confirmed which part replaced it, or whether the SN74LXC1T45 pins
     changed at all. Treat the numbers above as FreeWili-1-era until a
     FREE-WILi 2 schematic or datasheet reference confirms them. -->

## 10-pin analog header

A new connector, not present on FreeWili 1. Backed by the main RP2350's
analog front end:

- 4 analog inputs (0-5 V, through an op-amp/PGA front end — see
  [What FREE-WILi 2 is](../start-here/what-is-freewili2.md))
- 2 analog outputs (0 to roughly 4.84 V, from the DAC63204, at 25 kHz)
- Power and ground pins

<!-- VERIFY: the exact pin-by-pin order of the 10-pin analog header. This
     page can confirm the four analog-input and two analog-output signals
     exist on the main RP2350 (AIN0_RP-AIN3_RP and the DAC63204 SPI lines in
     FW2Main_pin_definitions.h), but not which physical pin position each
     one occupies on the connector, or what the remaining four pins carry. -->
