#!/bin/bash
set -e

echo "Step 1: Setting up core repository..."
bash scripts/setup-core.sh

echo "Step 2: Installing dependencies with workspaces..."
npm install

echo "Installation complete!"

