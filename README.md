# Weather App Rebuild 2022

A simple Weather App Rebuild.

This project now runs inside docker containers, and also runs a base gitlab ci/cd.

NOTE: The Test Job has been commented out within .gitlab-ci.yml.
This was done because there are no tests built into this template at this point.
It can be uncommented and used once npm run test actually does something.

## Goals
- Able to detect location based on browser
- Pulls weather data from openweather api
- Displays current weather
  - Current temp
  - Feels Like
  - High
  - Low
  - Humidity
  - Sunrise
  - Sunset
  - Pressure
  - Wind Direction
  - Wind Speed
  - Icon representing current day
- Displays weather for next 7 days
  - Date
  - Icon for weather
  - High
  - Low

## Requirements
Make sure you are running the following:  
Node v18.7.0+  
Npm v8.15.0+  
Docker 20.10.17+

## Packages installed and configured
As this is a template, only the basics are installed:

- ReactJS v18.2.0
- Webpack v5.74.0
- Babel v7.18.10

## Getting started
Fork repo into a directory, and cd into it.

___
## Docker Commands:
___

## Build/start Dev environment.
docker-compose up -d --build

## Build/start Prod environment.
docker-compose -f docker-compose.prod.yml up -d --build

## Stop Docker containers
docker-compose down
___
## ReactJS commands
___

### Installing
Run `npm install`

### Starting the app
Run `npm start`

This will start the app, via webpack, open your default browser, and serve it to [http://localhost:9500](http://localhost:9500)

### Building the app
Run `npm run build`
