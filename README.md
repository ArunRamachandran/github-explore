**The project is intend to set up a Reacrt-Redux application to make use of GitHub api v3 to explore the user respositories based on search query parameter**

# Project

The project is developed to explore the GitHub respositories at a glance. This allows users to quickly search for a respository and view more in-depth details about each repo. 

# Contents

-   [Use cases](#use-cases) 
-   [Prerequisite](#prerequisite) 
-   [How to run API server](#how-to-run-api-server) 
-   [Installtion process](#installtion-process)

# Use cases

The following use cases are addressed within the application

-   The user will be able to:
    - See results for a speicific search query
    - Search by respository name
    - View details about a specific respository by deep linked tree
    - View the total results displayed and api response time
    - View the locale timezone, formatted time and preferred browser locale languages
    - Lazy loading all extrernal apis to reduce the load time

The interactions won't be refreshing the page.

# Prerequisite

Node >= v10.0.0
npm >= v5.6.0

# Installtion process

- clone the project 

```   
git@github.com:ArunRamachandran/github-explore.git
```

- Install the project dependencies

``` 
npm install
```
 
- Run in development mode

```
npm run start
```

- To run unit test cases

```
npm run test
```
 
# Production build
 
```
npm run build

```

# Development update

The application is coded in React-Redux combination. 

Webpack is utilised as a build tool with a customised configuration to get the best end result. The final build is also splitter into different chunks with Webpack. Development and production configurations are utilised for dev and prod environments.

The React code is classified into smart and dumb components & the project folder structure is self-explanatory to find and read code. 

React Hooks are incorporated within the functional components wherever required and I have also tried to split down the components into the smallest building blocks of the application. 

Implemented LazyLoading for loading images and external files and this has drastically reduced the page load time. The same can be experienced while scrolling down through the application.

Browser navigator properties are utilised to display the browser culture. 

Application is responsive and I have tried to get a seamless experience in all major device breakpoints, including the mobile and tablets width.

Jest & Enzyme are utilised for unit testing

## There is a rate limit at the moment about the number of requests being sent/receive from GitHub servers and which is restricted to 60 req / per hour. This can be overwritten by making use of authenticated apis & pagination and which is considering as an improvement to the current implementation.
