#!/bin/bash
docker run --rm -it --name nodejs -v $PWD/src:/root/src --workdir="/root/src" node bash
