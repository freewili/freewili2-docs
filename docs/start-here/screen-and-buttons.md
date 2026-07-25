---
title: Screen and buttons
sidebar_position: 3
---

# Screen and buttons

## The panel list

The main menu is a single scrolling list of **panels** — panels are the
screens the firmware itself draws and hands the buttons and touchscreen to.
That's different from an **app**, a `.uf2` file the SD-card bootloader loads
and runs on its own — see [Running apps](../files-and-apps/running-apps.md).
Everything in the list below, including the folders, is a panel (or a folder
of panels), even where the name says otherwise.

A handful of panels sit at the top, outside any folder — **Command Panel**,
**Scripts**, **Wili Blocks**, **App Data**, **Editor** — described in
[The top-level panels](#the-top-level-panels) below. The rest are grouped
into folders you open and close from the list itself:

- **IO** — GPIO, Analog IO, I2C, SPI, UART, MDIO, CAN (FD), GPS *(not yet
  implemented)*, USB Sim *(not yet implemented)*
- **Wireless** — IR, RFID *(not yet implemented)*, LORA *(not yet
  implemented)*, SubGHz, Wifi, BT
- **Wi-Li-nux** — Terminal
- **Apps** — Skelltris, Wili8, Doom: three real apps meant to launch from
  the SD card, but the launch wiring behind them isn't finished yet — today
  all three instead open the Wi-Li-nux Terminal panel. See
  [Running apps](../files-and-apps/running-apps.md#the-on-screen-apps-folder)
  for what's confirmed about this.
- **GUI** — Sound Board, Clock & Alarm, Light Show, Sensors, Camera, TV Out
- **System** — Files, Setup & Actions, Power Management, Sleep, About

This list is read directly from the firmware's menu-building code
(`fwPanelLibDisplay.cpp`, `loadMainMenu()`). Four of the entries above — GPS,
USB Sim, RFID, and LORA — appear in that menu but have no panel registered
behind them (no matching `addApp()` call anywhere in the firmware for any of
the four — the function is named `addApp()` for historical reasons, but what
it registers is a panel), so selecting one currently does nothing; they're
marked above. Skelltris, Wili8, and Doom, meanwhile, all three map to the
same panel (the Wi-Li-nux Terminal) rather than launching the three distinct
apps they're named for.

A folder's row toggles it open or closed; open folders show their contents
indented underneath. Selecting a panel inside a folder — or one of the
top-level panels — opens it.

## The top-level panels

Alongside the folders, five panels sit at the top of the main menu. Here's
what each one actually is:

- **Command Panel** — a dashboard you build yourself: place LEDs, text
  displays, buttons, bar graphs, meters, and graphs on a blank canvas and
  wire each one to a signal from Wili Blocks. It's a control-panel builder,
  not a script runner in its own right.
- **Scripts** — lists the files sitting in the `/scripts/` folder on the SD
  card and runs whichever one you pick. Which engine runs it depends on the
  file's extension — see
  [Running apps](../files-and-apps/running-apps.md#scripts-a-different-mechanism-again)
  for the three script types and how they differ from an app. Blue exits a
  running script early.
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

## Sub-panels within a panel

Some panels are more than one screen. The **Analog IO** panel is a good
example: its main screen lists the four analog input channels and two
analog output channels, and pressing **center** on one of the output rows
(`o0` or `o1`) opens a second panel — the waveform generator — for that
channel. **Ok** leaves that sub-panel and returns you to the main panel.
Other multi-screen panels follow the same overall structure — a main panel
plus one or more sub-panels reached by selecting something on it — but which
button leaves a given sub-panel is up to that screen; check its on-screen
button labels rather than assuming Ok always does it (see the button map
below).

## Button map

| Button | Action |
|---|---|
| Up / Down | Move through the current list |
| Left / Right | Change the selected value (in a control that has one) |
| Center | Open / activate whatever's selected. On the main menu, this is the same action as Ok. |
| Ok | On the main menu, the same as Center — opens whatever's highlighted. Inside a panel, what Ok does is up to that screen: some use it to confirm an edit or leave a sub-panel (the Analog IO waveform screen leaves that way), others don't use it at all. Check the screen's own button labels if you're not sure. |
| Cancel | Back out one level — opens that screen's help instead, on the one screen that has one today (see below) |
| Home | Return to the main menu |
| Fourth A/B/X/Y button | Unconfirmed — see note below |
| Gray / Yellow / Green / Blue / Red | Five context buttons under the screen; each panel assigns its own meaning to them (for example, on the Analog IO waveform screen, Green starts the waveform and Red stops it) |

<!-- VERIFY: the fourth A/B/X/Y button's label — the site's spec copy calls
     it "page," the firmware's button-event table defines it as an
     AI-agent button instead of a page button. Whichever it is, its
     specific function on-device is unconfirmed here. -->

Beyond these short-press, per-panel meanings, three of the five context
buttons also have a long-press shortcut in the GUI that's the same
everywhere rather than panel-specific — see
[Connectors](../hardware/connectors.md#sleep-and-mode-buttons) for what
gray, yellow, and blue's long-presses do. Red doesn't have a GUI long-press;
instead it does two different things depending on *when* you hold it — see
[Recovery mode](../help/recovery-mode.md) for holding it at power-up versus
while the device is already running.

## Built-in help

The device has its own on-screen help viewer.

Pressing **Green** on the main menu opens the general help topic. On a
panel that declares its own help topic, **Cancel** opens that topic instead
of backing out. Today, the Analog IO waveform screen is the one screen that
does this — pressing Cancel there opens its dedicated help page directly on
the device. More screens will pick up their own topic as help pages get
written for them — the mechanism is generic, only one screen uses it today.

<!-- VERIFY: the on-screen help viewer is implemented and traced in source
     (fwPanelAppPanel.cpp's base Cancel handler + fwAnalogPanelWave.cpp's
     m_szHelpTopic), but has NOT been confirmed on real hardware. It already
     shipped non-functional once, when the linker garbage-collected the
     viewer because nothing called it - so source-tracing alone is not
     sufficient evidence for this claim. Drop this marker once a hardware
     pass confirms Cancel actually opens help on the waveform screen. -->
<!-- VERIFY: this describes the launch firmware (branch `plotex`), not what
     is on `main` today - the waveform screen and this help wiring are both
     plotex-only. Confirm both are present in whatever firmware ships. -->

