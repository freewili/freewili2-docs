---
title: Firmware update
sidebar_position: 5
---

# Firmware update

FREE-WILi 2 processors are updated using the SDCard. You copy new firmware files to the /firmware/ directory. And power down and re-power the device.

When Free-Wili2 starts up it checks this directory and will Flash the firmware to the devices. 

:::warning
The SDCard update method is not stable yet. If an update doesn't take, this
short video shows a manual method of updating the firmware:
[Manually updating FREE-WILi 2 firmware (YouTube)](https://youtube.com/shorts/FVzqWy1WGeI)
:::

To revert firmware you can force the SDCard bootloader menu from the Menu system.

## Updating from macOS

You can flash the main processor directly over USB-C. With the device powered
on, press the **yellow + red + blue** buttons together to drop the main
processor into its UF2 bootloader.

macOS then mounts two volumes:

- **`FW2Main FBL`** — a small (~128 MB) FAT drive. This is the bootloader; it
  holds only `INFO_UF2.TXT` and `INDEX.HTM`. Copying a `.uf2` here flashes it.
- **`NO NAME`** — the ~8 GB SD card, whose `firmware/` folder contains the
  build to flash (`FW2Main.uf2`).

You can confirm you're really in the bootloader by checking the info file:

```sh
cat "/Volumes/FW2Main FBL/INFO_UF2.TXT"
# UF2 Bootloader v1.1
# Model: FREE-WILi2
# Board-ID: FW2 rev1
```

Copy the firmware onto the bootloader volume and flush the write:

```sh
cp "/Volumes/NO NAME/firmware/FW2Main.uf2" "/Volumes/FW2Main FBL/"
sync
```

You will see this error — **it is expected, not a failure**:

```
cp: /Volumes/FW2Main FBL/FW2Main.uf2: fchmod failed: No such file or directory
```

The UF2 bootloader accepts the file's data, flashes it, and reboots the device
*immediately* — so the volume unmounts before `cp` can set permissions on the
new file, which is what `fchmod` was trying to do. The firmware data itself has
already been written.

Both `FW2Main FBL` and `NO NAME` then disappear as the device resets to run the
new firmware; after a few seconds `NO NAME` remounts.

### Checking over the serial console

Once it's back up, FREE-WILi 2 enumerates as USB serial ports under
`/dev/cu.usbmodem*`. The interactive menu console runs at **115200** baud —
open it in any serial terminal (`screen /dev/cu.usbmodem… 115200`) and press a
letter to bring up the banner, which reports the running version (e.g.
`FW2 v07`).

# Emergecy USB Bootloader

If for any reason the main firmware is erases or destroyed you must use the bootloader of last resort - the USB bootloader.

if you hold the red button on power up you enter the USB bootloader. This bootloader provides a mass storage (thumb drive) for you to drag and drop the main.uf2 file.

The USB bootloader and the SDCard bootloader setup the USB SDCard reader to connect to the host by default.

After you do this the SDCard bootloader will be functional. You must copy the new firmware to the sdcard firmware directory and repower.

# What firmware do you have?

You can check which firmware version is currently running from the
**About** screen, in the System folder of the on-device panel list.

Current stable, beta, and archived UF2 builds are
published from the [firmware repository](https://github.com/freewili/freewili-firmware)
if you need a specific version.
