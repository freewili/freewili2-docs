---
title: Running apps
sidebar_position: 3
---

# Running apps

## What an app is

Everything in the on-device menu — from **GPIO** to **Doom** to **Sound
Board** — is an "app" in the same sense: a screen (or a few connected
screens) that the display processor loads and hands the buttons, touchscreen,
and D-pad to until you back out or press **Home**. See
[Screen and buttons](../start-here/screen-and-buttons.md) for the full
current list and how the folders and sub-panels work.

## Launching an app

From the main menu, move the highlight onto the app (or into its folder
first, if it's grouped) with **up**/**down**, and press **center** or **ok**
to open it. **Home** always takes you back to the main menu from anywhere.

## The top-level items, in plain terms

Alongside the folders, five items sit at the top of the main menu. Here's
what each one actually is:

- **Command Panel** — a dashboard you build yourself: place LEDs, text
  displays, buttons, bar graphs, meters, and graphs on a blank canvas and
  wire each one to a signal from Wili Blocks. It's a control-panel builder,
  not a script runner in its own right.
- **Scripts** — lists the files sitting in the `/scripts/` folder on the SD
  card and runs whichever one you pick. Which engine runs it depends on the
  file's extension: `.wasm` for a WASM guest program (the default if a
  script has no extension), `.r` for an rTHON script, `.z` for a ZoomIO
  program. Blue exits a running script early.
- **Wili Blocks** — the viewer and runner for WiliBLOCKS automation: `.wili`
  files built from sequences of numbered steps, point-and-click rather than
  text-based. You can have several running in parallel, and author them
  either on the device's own screen or in the FREE-WILi GUI desktop app.
- **App Data** — a planned two-pane data browser. As of this writing most of
  its implementation is stubbed out, so treat it as not yet finished.
  <!-- VERIFY: whether App Data has shipped further since this was written
       — confirmed unfinished/mostly-commented-out from
       panels/fwPanelAppSignals.cpp at the time this page was written. -->
- **Editor** — a text/script editor. Right now it always opens the same
  fixed file rather than letting you pick one — the file picker that would
  let Editor open an arbitrary file is still pending.
  <!-- VERIFY: whether Editor's file picker has landed since this was
       written — confirmed from panels/fwPanelAppPanelEditor.cpp, which
       contains a code comment marking the fixed file as temporary until a
       picker is wired up. -->

**Files**, reached from the System folder rather than the top level, is the
one that's fully built: a two-pane file browser with rename, remove, copy,
and paste, and it can spot an ESP32 flashing job (a `flasher_args.json` file
next to the binary) and offer to run it directly.

## What scripts are

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

WiliBLOCKS (`.wili` files, opened from the separate **Wili Blocks** menu item
above) is a fourth, point-and-click way to automate the device, distinct from
the three script types the **Scripts** menu item runs.

Which to reach for: rTHON and WiliBLOCKS are the fastest way to automate
something without leaving the device; WASM is for real software written in a
language you already know; ZoomIO is for the narrow slice of work where
PIO-level timing precision actually matters.
