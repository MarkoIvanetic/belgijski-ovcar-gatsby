# Belgijski Ovcar (Gatsby)

[![Netlify Status](https://api.netlify.com/api/v1/badges/abcaf831-1263-4763-b726-35074f3b5897/deploy-status)](https://app.netlify.com/sites/objective-euclid-682845/deploys)

Modernizing a very old website using a stack that revolves around **Gatsby**, **React** and **Contentful** as headless CMS. 

https://www.belgijskiovcar.com
___
## :alembic: Technology


JAMstack is an approach to frontend web development (the construction of content and interfaces that users interact with). It allows developers to quickly create and efficiently serve static websites to users.

In a JAMstack web application, as much HTML as possible is pre-built and stored in a content delivery network (CDN). Instead of running a monolithic backend application on the server side to generate dynamic content, dynamic components of the application are based on APIs. Ideally, this results in a much faster user experience and a much simpler developer experience.

JAM stands for **JavaScript**, **API**s, **Markup**.
- **JavaScript** is the programming language used by web applications
- An **API** (application programming interface) is a way to request data from someone else's program or application
- **Markup** is code (HTML and CSS) that provides formatting instructions to browsers

### Gatsby
[Gatsby](https://www.gatsbyjs.com/) is a React-based open-source framework for creating websites and apps. It's great whether you're building a portfolio site or blog, or a high-traffic e-commerce store or company homepage. 
It’s more than a static site generator. 
As it is built on top of React, all the React goodness is at your fingertips, which enables you to take advantage of this powerful library to build interactive components right into your static website. 
Gatsby is also built with GraphQL, so you can query data and display it on your website any way you want.

Building a website with Gatsby/Netlify stack will help us with:

- Search Engine Optimization (SEO)
- Bounce Rates
- Loading speed
- Simplified and cheaper hosting
- Better security
- Developer and User Experience

Notable gatsby plugins used:
| Plugin                         | Description                                                                                               |
|--------------------------------|-----------------------------------------------------------------------------------------------------------|
| gatsby-plugin-react-helmet     | React Helmet is a component which lets you control your document head using their React component.        |
| gatsby-plugin-advanced-sitemap | Generates a single or multiple sitemaps with full XSL templates                                           |
| gatsby-plugin-robots-txt       | Create robots.txt for your Gatsby site.                                                                   |
| gatsby-plugin-offline          | Adds drop-in support for making a Gatsby site work offline and more resistant to bad network connections. |
| gatsby-plugin-intl             | Support for multi lanugage websites                                                                       |
| gatsby-transformer-sharp       | Processing images in a variety of ways including resizing, cropping, and creating responsive images.      |

### Netlify

[Netlify](https://www.netlify.com/) is an excellent option for deploying Gatsby sites. Netlify is a unified platform that automates your code to create performant, easily maintainable sites and web apps. They provide 
- continuous deployment (Git-triggered builds)
- an intelligent, global CDN
- full DNS (including custom domains)
- automated HTTPS 
- asset acceleration and a lot more.

Their free tier includes unlimited personal and commercial projects, HTTPS, continuous deployment from public or private repos, and more.

And of course:
### [React.js](https://reactjs.org/)
___
## Setup
### Setting up Contentful API

- From space dashboard go to Settings > API keys
- Click **Add API key**

Generated info is mapped to `.env`:

```
CONTENTFUL_SPACE_ID - "Space ID"
CONTENTFUL_ACCESS_TOKEN - "Content Delivery API - access token"
CONTENTFUL_PREVIEW_ACCESS_TOKEN - "Content Preview API - access token"
```

Access tokens can be found in "Content delivery / preview tokens" tab of "API keys" screen

### Setting up Netlify site from Git repo

The process is pretty straightforward. On you team's dashboard go to Sites and click "New site from Git" and follow the wizard.

1. Choose a Git provider (GitHub)
2. select repository. Here make sure the Netlify has a correct Repo access which can be configured by clicking **Configure the Netlify app on GitHub.** below
3. Select a branch to deploy (master)
   a) Build command will default to `yarn build` (which actually calls `gatsby develop`) which is fine. See [common build configurations](https://docs.netlify.com/configure-builds/common-configurations/) if you are setting up a different architecture.
   b) Leave default publish directory

### Setting up Contentful Webhook for CD 

Build hooks give us a unique URL to trigger a build. Contentful send a POST request to a webhook URL which will trigger a deploy from master branch. 
Once you've setup a static site that pulls in your content during the build process, you're ready to configure webhooks that will be triggered when you publish or unpublish content in your space.

#### Prerequisites

- site must already be deployed to Netlify
- must be configured for CD via a linked Git repo hosted with a Git provider
 
#### Netlify
Go to **Site Settings > Build & Deploy > Build Hooks**. Click **Add build hook** and name it something in lines of  "Contentful hook" (optional). Copy the generated webhook url.

#### Contentful
Go to **Settings > Webhooks** and click **Add Webhook**. Give it a name and paste the URL from Netlify in the URL field. In the **Triggers** section, you can choose the events that will trigger the hook. For what the project needs, the events shown in the table below are enough.

|       | Publish | Unpublish |
|-------|---------|-----------|
| Entry |:ballot_box_with_check:|:ballot_box_with_check:|
| Asset |:ballot_box_with_check:|:ballot_box_with_check:|


TBA
