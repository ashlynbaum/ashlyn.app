# handbooks

This is the repo for ashlyn.app - a collection of handbooks for all things product.

This repo displays handbooks that are scraped in from a public notion page, because notion does not have an available API at the moment. 

To replace the content, update the `gatsby-config.js` to replace the notion config table.

#### notion config
The notion config table, is a table of all tables in notion that become accessible by graphQL.
[ashlyn.app notion config table](https://www.notion.so/ashlynbaum/2eb7999026f1465ea58832e1620dcdb6?v=a4e2bccfea4a4087b3fcd18f35c18d91)

#### Adding a new handbook
To add a new handbook. Add a new table to the config table in notion then update the gatsby-node to create new pages from the new table.

## Crucial Commands


### `gatsby develop`

Run in the project locally.

### `gatsby build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `gatsby deploy`

Run a production build into `./public` and publish the site to GitHub pages.



### notion integration

All handbooks are written in notion. `gatsby-source-notion-database` is used to scrape a public notion.so table for nested tables and pull in content on build.

`npm install gatsby-source-notion-database`

### animations
Animations and parallax are made use [react-spring](https://www.react-spring.io/). 
