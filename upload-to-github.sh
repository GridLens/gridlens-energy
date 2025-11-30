#!/bin/bash

# Create a clean package directory
rm -rf /tmp/gridlens-github-package
mkdir -p /tmp/gridlens-github-package

# Copy all necessary files
cp -r src /tmp/gridlens-github-package/
cp -r public /tmp/gridlens-github-package/
cp -r generated /tmp/gridlens-github-package/
cp package.json /tmp/gridlens-github-package/
cp tsconfig.json /tmp/gridlens-github-package/
cp astro.config.mjs /tmp/gridlens-github-package/
cp components.json /tmp/gridlens-github-package/
cp wrangler.jsonc /tmp/gridlens-github-package/
cp wrangler.toml /tmp/gridlens-github-package/
cp .gitignore /tmp/gridlens-github-package/ 2>/dev/null || echo "node_modules/\ndist/\n.astro/\n.env" > /tmp/gridlens-github-package/.gitignore
cp README.md /tmp/gridlens-github-package/ 2>/dev/null || echo "# GridLens Energy" > /tmp/gridlens-github-package/README.md

# Go to the package directory
cd /tmp/gridlens-github-package

# Initialize git
git init
git add .
git commit -m "Initial GridLens Energy site"
git branch -M main

# This will show you the commands to run
echo ""
echo "=========================================="
echo "Package created successfully!"
echo "=========================================="
echo ""
echo "Now run these commands:"
echo ""
echo "cd /tmp/gridlens-github-package"
echo "git remote add origin https://github.com/GridLens/gridlens-energy.git"
echo "git push -u origin main"
echo ""
echo "You'll need to enter:"
echo "Username: GridLens"
echo "Password: [your GitHub token]"
echo ""
