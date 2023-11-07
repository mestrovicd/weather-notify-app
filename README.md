# Weather Application

This is a simple weather application that allows users to select a city and fetch the current weather conditions for that location. The app displays information such as temperature, wind speed, cloudiness, and sunrise/sunset times, among other details.

## Features

-   Select a city from a dropdown to view its weather information.
-   Real-time weather data fetching.
-   Clean and professional UI.

## Prerequisites

Before running this application, make sure you have [Node.js](https://nodejs.org/) installed on your system. This will provide you with the necessary tools like `npm`.

## Installation

Clone the repository to your local machine and install the dependencies.

```bash
git clone https://github.com/mestrovicd/weather-notify-app
cd weather-app
npm install
```

## Usage

After installing the dependencies, you can run the application in development mode using the following commands:

## Build

To build the production-ready code, run:

```bash
npx webpack
```

This command will bundle your JavaScript files and other assets into the ./public directory.

## Watch Mode

To run webpack in watch mode, which will automatically recompile your TypeScript files upon saving, use the command:

```bash
npm run watch-wp
```

## Running the Backend Server

server.js file handles API calls, run it using nodemon for automatic restarting on code changes.

```bash
npm start
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open issues to suggest improvements or add new features.
