#!/bin/bash
if [ "$EUID" -ne 0 ]; then
    echo "Please run as root"
    exit
fi

apt update
apt-get -y install nodejs npm
