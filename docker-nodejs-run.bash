#!/bin/bash
#docker run --rm -it --name golang -v $PWD/src:/go/src --workdir="/go/src" node:18
#docker run --rm -it --name golang -v $PWD/src:/go/src --workdir="/go/src" node
docker run --rm -it --name nodejs -v $PWD/src:/root/src --workdir="/root/src" node bash
