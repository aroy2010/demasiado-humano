#!/bin/bash

# Script de construcción optimizado para Cloudflare Pages

if [ "$CF_PAGES_BRANCH" = "main" ]; then
  hugo --minify -b "https://aroy1962.xyz/"
else
  hugo --minify -b "$CF_PAGES_URL/"
fi
