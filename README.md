# Animal Pattern Filter CLI

The Animal Pattern Filter is a command-line interface (CLI) built with Node.js. It filters and counts data from a JSON file containing countries, people, and animals.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Commands](#commands)
-   [Tests](#tests)

## Installation

1. Navigate into the project directory.

```shell
cd animal-pattern-filter-cli
```

2. Install the dependencies.

```shell
npm install
```

## Usage

The CLI is designed to be run with Node.js. Here's how you use it:

```shell
node app.js --<command>=<value>
```

Replace `<command>` with the command you want to run, and `<value>` with the value you want to use.

## Commands

-   `filter`: Filters the animals based on a given pattern.

```shell
node app.js --filter=ry
```

The command above will return all the countries, people, and animals that have 'ry' in their names.

-   `count`: Prints the count of people and animals in each country.

```shell
node app.js --count
```

The command above will append the count of people and animals in the names of the countries and people respectively.

## Tests

You can run tests using Jest with the following command:

```shell
npm test
```

This will run all tests in the `tests` directory.
