# Belgijski Ovcar (Gatsby)

[![Netlify Status](https://api.netlify.com/api/v1/badges/e58e4bb1-0e8e-4c8a-8b2f-3c045bb08c1a/deploy-status)](https://app.netlify.com/sites/belgijskiovcar/deploys)

Modernizing the site

## Setting up Contentful API

- From space dashboard go to Settings > API keys
- Click "Add API key"

Generated info is mapped to .env:

CONTENTFUL_SPACE_ID - "Space ID"
CONTENTFUL_ACCESS_TOKEN - "Content Delivery API - access token"
CONTENTFUL_PREVIEW_ACCESS_TOKEN - "Content Preview API - access token"

Access tokens can be found in "Content delivery / preview tokens" tab of "API keys" screen

## Setting up Netlify site from Git repo

The process is pretty straightforward. On you team's dashboard go to Sites and click "New site from Git" and follow the wizard.

1. choose a Git provider (GitHub)
2. select repository. Here make sure the Netlify has a correct Repo access which can be configured by clicking "Configure the Netlify app on GitHub." below
3. select a branch to deploy (master)
   3a) build command will default to `yarn build` (which actually calls `gatsby develop`) which is fine. See [common build configurations](https://docs.netlify.com/configure-builds/common-configurations/) if you are setting up a different architecture.
   3b) leave default publish directory

## Setting up Contentful Webhook for CD

Once you've setup a static site that pulls in your content during the build process, you're ready to configure webhooks that will be triggered when you publish or unpublish content in your space.

### Prerequisites

- site must already be deployed to Netlify
- must be configured for CD via a linked Git repo hosted with a Git provider

TBA

## TODO

- change link color

- check mobile nav animation
- showFromRight - remove or use

- make footer sticky
- footer seo
- responsive check
- seo, helmet, titles
- seo image alt, link props
- siteMetadata -> site info, update live site
- check site image
- news param validation - different news version based on populated cont. fields
