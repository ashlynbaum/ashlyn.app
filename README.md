# handbooks

This is the repo for [ashlyn.app](ashlyn.app) - a collection of handbooks for all things product.

This repo displays handbooks that are scraped in from a public notion page, because notion does not have an available API at the moment. Public APIs are on notions roadmap, and when they are released hopefully i'll be able to update this repo.

Content is sourced and made accessible to GraphQL through `gatsby-config.js` and the notion config table.

#### notion config
The notion config table, is a table of all tables in notion that become accessible by graphQL.
[ashlyn.app notion config table](https://www.notion.so/ashlynbaum/2eb7999026f1465ea58832e1620dcdb6?v=a4e2bccfea4a4087b3fcd18f35c18d91)

#### Adding a new handbook
To add a new content. Add a new table to the config table in notion then update the gatsby-node to create new pages from the new table.

Adding more than one handbook is currently a Todo

## Crucial Commands


### `gatsby develop`

Run in the project locally.

### `gatsby build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `firebase deploy`

Run a production build into `./public` and publish the site to Firebase pages. During the init of firebase, use the public folder, remove firebase functions.



### notion integration

The integration for notion uses gatsby-source-notion-database plugin

`npm install gatsby-source-notion-database`

Accessing images or files stored within notion tables from gatsby-source-notion-database will need to have the security headers added into the request to successfully access the files.

### animations
Animations and parallax are made use [react-spring](https://www.react-spring.io/). 
