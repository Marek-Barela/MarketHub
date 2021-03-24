![alt text](https://github.com/Marek-Barela/MarketHub/blob/master/src/assets/markethub.png?raw=true)

# MarketHub

React based application for providing stock informations with usage of [Alpha Vantage API](https://www.alphavantage.co/documentation/)

## Features

- Searching specific stock rates based on symbol or company name
- Obtaining advanced information about a specific stock history in the form of a chart
- Saving user actions in browser memory
- History panel of previous user searches

## Live

You can see the full project [here](https://markethub-pro.netlify.app/)

## Tech - Stack

- HTML5
- CSS3
- JavaScript(ES5/ES6)
- React
- Redux
- Redux-Saga
- Redux-persist
- Reselect
- Typescript
- Typesafe-Actions
- SASS
- Axios
- Apexcharts

## Installation

Clone repository, install the dependencies and start the server.

```sh
npm install
npm start
```

If you want to fully use this application you have to create your API_KEY
from official documentation of [Alpha Vantage API](https://www.alphavantage.co/documentation/)

Create file:

```sh
.env
```

in root project directory and create reference to your API_KEY

```sh
REACT_APP_API_KEY="Your api key"
sample: REACT_APP_API_KEY=1234567890
```

If you want to keep your API_KEY fully secure you have to run your own backend
