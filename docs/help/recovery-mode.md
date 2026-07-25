---
title: Recovery mode
sidebar_position: 3
---

# Recovery mode

FREE-WILi 2 has two RP2350 processors, each with its own USB bootloader,
entered a different way. This page covers both, starting with the one that
matters most when nothing else is working.

## Last resort: hold red at power-up

If the device won't start, a firmware update went wrong, or you just can't
reach it any other way: **hold the red button while powering the device
on.** This forces the main RP2350 straight into its recovery bootloader,
where it presents to a host PC as a USB flash drive ready for a fresh MAIN
UF2 file.

This works because the red button is wired directly to the main RP2350's
BOOTSEL line in the schematic — the same line the processor itself checks at
boot to decide whether to run its flash image or wait for a UF2. **It does
not depend on any firmware being alive to handle it.** A main processor with
completely bricked firmware — corrupted flash, a crashing image, anything —
will still drop into the bootloader when red is held at power-up, because
the path is a wire, not code. This is the one to reach for when everything
else has failed.
<!-- VERIFY: the exact choreography — what, if anything, appears on the
     display while this happens; the exact name the resulting UF2 drive
     enumerates as; how long red needs to be held; and whether a USB
     connection needs to already be present or can be plugged in after.
     Owner-confirmed: the mechanism itself (red button wired to the main
     RP2350's BOOTSEL line, hardware). Not confirmed: this choreography. -->

Don't confuse this with the other things holding red does — see
[Screen and buttons](../start-here/screen-and-buttons.md#button-map) and
[Connectors](../hardware/connectors.md#sleep-and-mode-buttons). Holding red
**after** the device is already running does something completely
different: it puts the device to sleep. That's a separate mechanism, owned
by the PIC, and it's how you power the device down day to day — it has
nothing to do with the bootloader described here.

## Everyday options

These work when the device is at least alive enough to run its own console
or respond over USB. Reach for these first, and drop to the hardware path
above only if they don't get you anywhere — or if the device won't boot
enough to offer them at all.

### Main processor bootloader (software)

Without touching any button, the main processor's bootloader is also
reachable from a menu inside the on-device serial console's settings, and
from the OneWili device API's "software reset to bootloader" command. Both
paths land in the same underlying function
(`fwMenuSettingsHome::softwareResetToBootloader()`, calling
`reset_usb_boot(0,2)`) that the hardware path above ultimately triggers too
— the difference is these require the main processor to already be running
well enough to reach its console or answer the API, where holding red at
power-up doesn't need the processor to be running at all.
<!-- VERIFY: the exact on-device console menu keystrokes to reach
     softwareResetToBootloader() — confirmed only that the function exists
     and is reachable from the console menu and from the OneWili API, not
     the precise menu path a user would navigate. -->

### Display processor bootloader

While on the main screen, **long-press the blue button** — but this only
works while USB is connected and the charger reports that it's charging or
has finished charging. Holding blue brings up a 5-second hold-progress
dialog; on completion, the device shuts the charger down cleanly and reboots
straight into the display processor's USB bootloader, where it presents as a
flash drive for the display UF2 file (see
[Firmware update](../start-here/firmware-update.md)).
<!-- VERIFY: confirmed from rmpLib/rpPanelManager.cpp's long-press handling
     and the enterBootloader() path into targets/fw2display/Fw2Display.cpp's
     reset_usb_boot() call. A nearby code comment in that same source says
     "reboot into bootloader if red button is pressed on power up," which
     doesn't match the button (blue, not red) or the trigger condition (a
     running-state long-press, not power-up) that the surrounding code
     actually implements. The same drifted comment also appears in
     freewiliclassicdisplay/FreeWilliDisplay.cpp,
     freewiliclassicdisplay/fwMenuDisplay.cpp, and
     freewilimain/MenuX/fwMenuSettingsHome.cpp — treat all of them as a
     stale copy-paste, not as evidence of a second red-button power-up
     path; the red-at-power-up path is real, but it's the hardware one
     described above, not anything gated by this comment's code. -->

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
     USB-charging) is unconfirmed. -->

If that automatic fallback doesn't help — for example, if whatever's broken
is upstream of the check that triggers it — holding red at power-up (above)
reaches the main processor's bootloader unconditionally, since it doesn't
depend on any of this logic running at all. If you're stuck beyond the paths
on this page, the [FREE-WILi Discord](https://discord.com/invite/XJRBUCX62z)
is the place to ask.
