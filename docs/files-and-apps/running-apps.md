---
title: Running apps
sidebar_position: 3
---

# Running apps

## What an app is

An **app** is a `.uf2` file on the device's SD card that the bootloader loads
and hands control to directly — it runs its own code, separate from the
firmware's own screens (the **panels** covered in
[Screen and buttons](../start-here/screen-and-buttons.md)). Loading an app is
closer to booting a different program than opening a menu item.

Worth knowing if you go looking in the firmware source yourself: the
`APP_SELECTED_*` constants and `addApp()` calls in `fwPanelLibMain.cpp`
actually register **panels**, not apps — a naming leftover that has misled
more than one writer on this documentation project. This page and
[Screen and buttons](../start-here/screen-and-buttons.md) use "app" only for
a real `.uf2` launched the way described below.

## Getting a UF2 onto the card

Apps arrive on the device the same way firmware updates do — as a `.uf2`
file copied onto the SD card — but they land in a different place and get
launched a different way. See
[Transferring files](transferring-files.md#getting-files-on-and-off) for the
ways to get a file onto the card (swap it to the built-in USB reader, or copy
it from the FREE-WILi GUI).

Tracing `picker_open()` in `targets/fw2mainsbl/picker.cpp`: the picker only
lists `.UF2`/`.uf2` files sitting directly at the SD card's
root (`1:/`) — it skips directories rather than looking inside them
(`if (fno.fattrib & AM_DIR) continue;`), so a UF2 buried in a subfolder won't
show up. It shows at most 12 entries, each with its file size, and titles the
screen "FW2 Main SBL — 1:/".

This is different from a firmware update: flashing the **main** or
**display** processor's own firmware image uses the BOOTSEL/mass-storage
path covered in [Firmware update](../start-here/firmware-update.md) and
[Recovery mode](../help/recovery-mode.md). An app UF2 is never flashed — see
[Launching an app](#launching-an-app) below.

## Launching an app

The second-stage bootloader (the "SBL") is what actually launches an app,
before the main firmware — and its panel list — ever starts. Tracing
`targets/fw2mainsbl/stage3.cpp`'s main loop: once an SD card is present and
mounts successfully, the bootloader opens the picker automatically and
renders the list of `.UF2` files at the card's root. **Up**/**Down** move the
highlight (`picker_on_up`/`picker_on_down`) and **Center** confirms a
selection (`picker_on_select`).

On selection, `load_application_from_uf2()` (`targets/fw2mainsbl/uf2.c`)
reads the UF2 file block by block, validates each block (it must target
on-chip RAM and match the RP2350's family ID), and copies its contents
straight into SRAM — the app is **not** written to flash. `stage3.cpp` then
calls `launch_application_from_ram()`, which hands the processor over to
whatever was just loaded. If loading fails, the bootloader shows "Load
failed" and reopens the picker so you can try again.

<!-- VERIFY: how the picker is reached is unconfirmed as a matter of shipping
     behavior. Tracing `stage3.cpp`'s `main()`: the boot-mode selection that
     would normally decide between booting the already-flashed main firmware
     (`BOOT_DEFAULT`, via `launch_application()`) versus dropping into the
     SD-card picker is hardcoded to `BOOT_RAM` (`mode = BOOT_RAM;
     //read_bootmode();` — the button-scanning function that would otherwise
     choose the mode is called out as disabled in the same line), and a
     `// FIXME: check SD card insert?` comment sits right above the runtime
     loop. As the source reads today, every boot with an SD card present
     falls through into the picker rather than the normal main-firmware boot
     path; whether that is the intended release behavior or debug-era
     scaffolding still being wired up is a question for the firmware team,
     not something this page can confirm by reading source alone. -->

<!-- VERIFY: what happens when a launched app exits (or crashes) is
     unconfirmed. No code path was found in `stage3.cpp` or `picker.cpp` that
     resumes the picker or reboots into the main firmware after
     `launch_application_from_ram()` hands off control — the picker only
     reopens automatically on a load *failure*, or after the SD card is
     pulled and reinserted. Whether a well-behaved app is expected to reset
     the board itself, chain back to the bootloader, or something else
     entirely is not answered by the bootloader source examined for this
     page. -->

## The on-screen "Apps" folder

The main menu's **Apps** folder — see
[Screen and buttons](../start-here/screen-and-buttons.md) — lists **Skelltris**,
**Wili8**, and **Doom**, and they're meant to be real apps launched this way.
Today, though, the launch wiring behind them isn't finished: tracing
`fwPanelLibDisplay.cpp:262-264`, all three entries currently dispatch to
`APP_SELECTED_TERMINAL` — the same identifier the Wi-Li-nux **Terminal**
panel uses — so selecting any of the three just opens the Terminal panel
rather than launching a distinct game. This is confirmed directly from the
menu-building source; it isn't a case of unclear firmware, the wiring is
simply not done yet.

## Scripts: a different mechanism again

Scripts are a third thing, distinct from both panels and apps: a script
doesn't get handed the processor the way an app does. Instead it runs as a
guest program inside an engine that's already part of the running main
firmware.

A script is a file in `/scripts/` on the SD card, and its extension decides
which engine runs it:

- **`.wasm`** — a sandboxed WebAssembly guest, run by the on-device WiliWasm
  engine (built on wasm3). This is the default if you don't give a script an
  extension. Write it in C/C++, Rust, or anything else that compiles to
  WASM, with remote debugging support from FREE-WILi GUI.
- **`.r`** — an rTHON script: a Python-like language that runs directly on
  the device, no host PC or full Python runtime needed.
- **`.z`** — a ZoomIO program: compiled to native RISC-V and run on the main
  RP2350's second core, for protocol work and timing precise to the
  nanosecond.

WiliBLOCKS (`.wili` files, opened from the separate **Wili Blocks** panel —
see [Screen and buttons](../start-here/screen-and-buttons.md#the-top-level-panels))
is a fourth, point-and-click way to automate the device, distinct from the
three script types the **Scripts** panel runs.

Which to reach for: rTHON and WiliBLOCKS are the fastest way to automate
something without leaving the device; WASM is for real software written in a
language you already know; ZoomIO is for the narrow slice of work where
PIO-level timing precision actually matters.
