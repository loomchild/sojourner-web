# Sojourner Web

[![Build Status](https://api.travis-ci.org/loomchild/sojourner-web.svg)](https://travis-ci.org/loomchild/sojourner-web)

> Sojourner conference companion PWA

# Requirements

* Node 8.x

# Build

Download node dependencies:

    npm install

# Run

Start the local development server:

    npm run start

# Test

Launch style check:

    npm run lint

Launch unit / integration tests:

    npm run test

Launch end-to-end tests (local server must be running):

    npm run test-e2e

All of the above tests are automatically executed by [Travis](https://travis-ci.org/loomchild/sojourner-web) after every commit.

# Deploy

Static application can be generated into dist/ directory using:

    npm run build

To deploy it to github pages, run:

    npm run deploy

*Note: use annotated tags to make them visible on About page.*
