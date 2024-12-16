#!/bin/bash
# +-----------------+
# | npm postinstall |
# +-----------------+

# get the installer directory
Installer_get_current_dir () {
  SOURCE="${BASH_SOURCE[0]}"
  while [ -h "$SOURCE" ]; do
    DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
    SOURCE="$(readlink "$SOURCE")"
    [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE"
  done
  echo "$( cd -P "$( dirname "$SOURCE" )" && pwd )"
}

Installer_dir="$(Installer_get_current_dir)"

# move to installler directory
cd "$Installer_dir"
source utils.sh

# copy rules
Installer_info "Installing StreamDeck rules..."
sudo cp 50-elgato.rules /etc/udev/rules.d/50-elgato.rules
sudo udevadm control --reload-rules

Installer_success "Setup Complete !"
echo
Installer_warning "Reboot your device to activate StreamDeck rules!"
# Go back to module root
cd ..
