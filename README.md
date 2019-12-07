# handbooks

This is the repo for ashlyn.app - a collection of handbooks for product development, opperations, and management.

## Crucial Commands


### `yarn run dev`

Run in the project locally.

### `yarn run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `yarn run deploy`

Run a production build into `./public` and publish the site to GitHub pages.

### `yarn run cleanup-repository`

Removes all dependencies, scripts and data from the installation script.


### notion integration

All handbooks are written in notion. `gatsby-source-notion-database` is used to scrape a public notion.so table for nested tables and pull in content on build.

`yarn add gatsby-source-notion-database`

### animations
Animations use react-spring. 
