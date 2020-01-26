# handbooks

This is the repo for ashlyn.app - a collection of handbooks for product development, opperations, and management.

This repo displays handbooks that are scraped in from a public notion page. To replace the content, update the `gatsby-config.js` to replace the notion config table.

#### notion config
The notion config table, is a table of all tables in notion that become accessible by graphQL.


## Crucial Commands


### `gatsby develop`

Run in the project locally.

### `gatsby build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `gatsby deploy`

Run a production build into `./public` and publish the site to GitHub pages.

### `yarn run cleanup-repository`

Removes all dependencies, scripts and data from the installation script.


### notion integration

All handbooks are written in notion. `gatsby-source-notion-database` is used to scrape a public notion.so table for nested tables and pull in content on build.

`yarn add gatsby-source-notion-database`

### animations
Animations use react-spring. 
