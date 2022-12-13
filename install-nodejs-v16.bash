#!/bin/bash
if [ "$EUID" -ne 0 ]; then
    echo "Please run as root"
    exit
fi

if ! [ -x "$(command -v curl)" ]; then
    echo 'Error: curl is not installed' >&2
    exit 1
fi

curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
apt-get -y install nodejs
