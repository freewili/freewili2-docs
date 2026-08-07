---
title: Firmware update
sidebar_position: 5
---

# Firmware update

FREE-WILi 2 processors are updated using the SDCard. You copy new firmware files to the /firmware/ directory. And power down and re-power the device.

When Free-Wili2 starts up it checks this directory and will Flash the firmware to the devices. 

To revert firmware you can force the SDCard bootloader menu from the Menu system.

# Emergecy USB Bootloader

If for any reason the main firmware is erases or destroyed you must use the bootloader of last resort - the USB bootloader.

if you hold the red button on power up you enter the USB bootloader. This bootloader provides a mass storage (thumb drive) for you to drag and drop the main.uf2 file.

After you do this the SDCard bootloader will be functional. You must copy the new firmware to the sdcard firmware directory and repower.

# What firmware do you have?

You can check which firmware version is currently running from the
**About** screen, in the System folder of the on-device panel list.

Current stable, beta, and archived UF2 builds are
published from the [firmware repository](https://github.com/freewili/freewili-firmware)
if you need a specific version.
