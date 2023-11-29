# Call For Proposal Website!

## Description:

Discover and manage call for proposals effortlessly with our sleek React Application. Our user-friendly platform allows you to explore major sites, stay updated on the latest news, and securely log in using your Google account. Create an account to gain access to a vast collection of proposals from various sources, streamlining your search process. Experience the perfect blend of efficiency and elegance in proposal management.

## Table of Contents

1. [ Description ](#description)
2. [ Installation ](#installation)
3. [ Usage ](#usage)
4. [ Links ](#links)

## Installation
<br>

- Clone the repository using:

```
git clone git@github.com:RahulPanwar1/Call-for-proposals_website.git
```

- To Ensure the backend run properly
- Install the Scrapy

```
pip install scrapy
```

- Launch the crawler 

```
cd '.\crawling links\'
```
```
python api.py
```

- Ensure to scrap all the data
- From main directory

```
cd .\backend\crawler\crawler\spiders
```
```
scrapy runspider crawling_spider.py
```

- Make sure to make the scrapped data an api
- From main directory

```
cd .\backend\crawler\  
```
```
python api.py
```

- Ensure to go into the correct directory for Frontend

```
cd .\frontend\cphub\
```


- Ensure you are in the current working directory
- Make sure all dependencies are installed using an npm install:

```
npm i
```

- Build and Launch the application for development use:

```
npm start
```

- To ensure Login/Logout feature work properly

```
npm install firebase
```

- Create a FIREBASE project from https://firebase.google.com/
- Add your api key and all firebase SDK from FIREBASE Project to firebase.js
```
cd frontend/cphub/src/components
```

## Usage:

This application features an example Proposals webpage using a Crawler, Scraper, React, and FastAPI. This app can be used as an example of a single-page application featuring authorized login features, Tailwind CSS, and FastAPI for faster data display on the frontend. All of the npm libraries used for this app can be found within the dependencies in the package.json files in the client and server folders.


<br>

## Links

- [Github Link](https://github.com/RahulPanwar1/Call-for-proposals_website)
