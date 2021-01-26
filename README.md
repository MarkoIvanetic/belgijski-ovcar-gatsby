# Belgijski Ovcar (Gatsby)

[![Netlify Status](https://api.netlify.com/api/v1/badges/abcaf831-1263-4763-b726-35074f3b5897/deploy-status)](https://app.netlify.com/sites/objective-euclid-682845/deploys)

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
- source contact data from contentful
- make footer sticky
- footer seo
- gallery grid responsive
- styles/style organization
- seo, helmet, titles
- seo image alt, link props
- typography prune
- check style files
- 404
- siteMetadata -> site info
- check site image
- browser support
