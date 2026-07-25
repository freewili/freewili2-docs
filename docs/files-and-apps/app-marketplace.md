---
title: App marketplace
sidebar_position: 4
---

# App marketplace

FREE-WILi 2 is built to run more than the apps it ships with. Because the
device's UF2 bootloader will load any RP2350 binary dropped onto its SD
card — no special tooling required — third-party and community apps can be
distributed as a UF2 file and run the same way the built-in firmware does.
**WiliApps** is the name this documentation project was given for FREE-WILi's
app-distribution point, but a dedicated search of the firmware source (every
`.cpp`/`.h`/`.md` file, case-insensitive, for "WiliApps," "marketplace," and
"app store") turned up nothing — no product, website, in-device browser, or
even a planning document by that name exists anywhere in the codebase today.
<!-- VERIFY: this page's premise is unconfirmed, not just under-documented.
     "WiliApps" was named in this documentation task's brief as the app
     marketplace to write up, but neither freewili.com, the FreeWili 1 doc
     clone, nor a targeted grep of the firmware repository (source files,
     comments, and every specs/plans directory) turned up any trace of a
     product, page, or in-device feature by that name. What IS confirmed:
     the SD-card UF2 bootloader is explicitly positioned on freewili.com as
     third-party-friendly ("a genuine platform for running any code —
     software done by the user, for the user"), so the underlying capability
     an app marketplace would sit on top of is real. Whether "WiliApps" is a
     name that hasn't shipped yet, an internal codename not reflected in this
     source tree, or a placeholder that should be replaced with something
     else entirely, is a question for the product owner — this page should
     not be taken as evidence the feature exists as described. -->

## What's confirmed

- The device can load and run a third-party UF2 file from its SD card
  without any cabling or special tools (see
  [Firmware update](../start-here/firmware-update.md) for the mechanics).
- Open hardware documentation and `Agent.md` files are published alongside
  the firmware specifically so AI coding agents (and human developers) can
  build custom firmware and apps against real hardware documentation, via
  the open [WiliBSP](https://github.com/freewili/wilibsp) board support
  package.
- The developer-facing API and SDK documentation lives at
  [freewili.com/onewili](https://freewili.com/onewili/) — this site
  intentionally doesn't duplicate that material.

## What isn't confirmed here

Where to actually find and download community WiliApps, whether there's a
web catalog or in-device browser for them, and what (if any) review or
signing process exists before an app runs on a device.
