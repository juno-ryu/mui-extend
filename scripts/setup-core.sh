#!/bin/bash
set -e

# core 디렉토리가 없으면 클론
if [ ! -d "core" ]; then
  echo "Cloning core repository..."
  git clone https://github.com/juno-ryu/core.git core
else
  echo "Core directory already exists, skipping clone."
fi

