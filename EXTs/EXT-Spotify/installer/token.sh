#!/bin/bash
# +---------+
# | Tokens  |
# +---------+

source ../../installer/utils.sh

Installer_info "Welcome to Spotify Token generator!"
echo
Installer_beep=false

echo
cd installer
Installer_yesno "Do you want to install/reinstall Spotify token?" && (
  rm -f ../tokenSpotify.json
  node auth_Spotify
  echo
)

echo
Installer_success "Done."
