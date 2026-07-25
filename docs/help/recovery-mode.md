---
title: Recovery mode
sidebar_position: 3
---

# Recovery mode

FREE-WILi 2 has two RP2350 processors, each with its own USB bootloader, and
they're entered differently from each other.

## Display processor bootloader

While on the main screen, **long-press the blue button** — but this only
works while USB is connected and the charger reports that it's charging or
has finished charging. Holding blue brings up a 5-second hold-progress
dialog; on completion, the device shuts the charger down cleanly and reboots
straight into the display processor's USB bootloader, where it presents as a
flash drive for the display UF2 file (see
[Firmware update](../start-here/firmware-update.md)).
<!-- VERIFY: confirmed from rmpLib/rpPanelManager.cpp's long-press handling
     and the enterBootloader() path into targets/fw2display/Fw2Display.cpp's
     reset_usb_boot() call. One inconsistency found in that same source: a
     nearby code comment says "reboot into bootloader if red button is
     pressed on power up," which does not match the button (blue, not red)
     or the trigger condition (a running-state long-press, not power-up)
     that the surrounding code actually implements — treat that comment as
     stale, not as a second valid trigger. -->

## Main processor bootloader

No button-hold combination was found for this one. Entering the main
processor's bootloader currently appears to be a software/serial action —
either from a menu inside the on-device serial console's settings, or via
the OneWili device API's "software reset to bootloader" command.
<!-- VERIFY: which on-device console menu path reaches this — confirmed
     only that the underlying function
     (fwMenuSettingsHome::softwareResetToBootloader(), calling
     reset_usb_boot(0,2)) exists and is reachable from the console menu and
     from the OneWili API, not the exact menu keystrokes a user would press.
     If there genuinely is no physical button combination for the main
     processor (unlike FreeWili 1, where holding red while plugging in USB
     did this), that's a meaningful gap worth flagging to the product
     owner — it means a main-processor recovery requires the device to
     already be alive enough to reach its console or API, which won't help
     if the main processor itself won't boot. -->

## If a firmware update fails or a unit won't start

FREE-WILi 2's main processor has one automatic safety net: its second-stage
bootloader checks for a valid flash partition table on boot, and if it can't
find one, it automatically drops back into the main processor's USB
bootloader (mass-storage mode) instead of trying to run a broken image. In
that state, plugging the device into a host should present a flash drive
again, ready for a fresh MAIN UF2 file.
<!-- VERIFY: confirmed from targets/fw2mainsbl/stage3.cpp's automatic
     fallback to reset_usb_boot(0,0) on an invalid partition table. No
     equivalent automatic fallback was found for the display processor —
     if a display firmware update leaves that processor unable to boot
     normally, whether it can still be reached via the blue-button
     long-press above (which needs the device to already be running and
     USB-charging) is unconfirmed. No other "brick recovery" procedure
     (hardware reset combination, safe mode, etc.) was found anywhere in the
     firmware source or its docs — if you get stuck beyond the paths above,
     the [FREE-WILi Discord](https://discord.com/invite/XJRBUCX62z) is the
     place to ask. -->
