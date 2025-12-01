#!/bin/bash
set -e

# core 디렉토리가 없으면 클론
if [ ! -d "core" ]; then
  echo "Cloning core repository..."
  git clone https://github.com/juno-ryu/core.git core
else
  echo "Core directory already exists, skipping clone."
fi

# core의 package.json이 있는지 확인
if [ ! -f "core/package.json" ]; then
  echo "Error: core/package.json not found!"
  exit 1
fi

echo "Core repository setup complete."

