#!/bin/bash
if [ "$EUID" -ne 0 ]; then
    echo "Please run as root"
    exit
fi

apt update -y
apt-get install -y nodejs npm
