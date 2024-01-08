# Sojourner Web

[![Netlify Status](https://api.netlify.com/api/v1/badges/7c9b2b95-ea25-4b11-ad7f-47d383770866/deploy-status)](https://app.netlify.com/sites/sojourner/deploys)

> Sojourner conference companion PWA

# Requirements

* Node 8.x

# Build

Download node dependencies:

    npm install

# Run

Start the local development server:

    npm run dev

# Test

Launch style check:

    npm run lint

Launch unit / integration tests:

    npm run test

# Deploy

Static application can be generated into dist/ directory using:

    npm run build

You can test it locally by running:

    npm run start

The deployment happens automatically to Netlify, nothing specific to do.

*Note: use annotated tags to make them visible on About page.*

# Miscellaneous

## Handling images

Resize PNGs using Tiny PNG: https://tinypng.com/
This could be done with GIMP, but unfortunately it doesn't preserve transparency when converting PNGs to indexed mode.

# Schedule

## CORS

To configure storage to allow CORS, see [cors configuration](https://firebase.google.com/docs/storage/web/download-files#cors_configuration) in documentation.
