# SearchContentExercise

## Overview

The application purpose is to search albums given an artist, showing the following information:

- Album image cover.
- Name of the album.
- Name of the artist.
- Price of the album.

## Features

These are the following features the application has:

- Search the collection of albums given an artist.
- Sort albums by [A-Z] or [Z-A].
- Pagination.
- Option to display all the albums.
- Control of empty results and not found artists.
- Responsive design.

## API

To get more information about the iTunes Search API, you can visit their web page [iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/).

## Use notes

When searching albums avoid committing the next mistakes:

- Don't use symbols unless they are in the artist's name.

      For example:

      - Don't search Jack+Johnson
      - Instead search Jack Johnson

- Be careful not to write the exact artist's name.

      For example:

      - Don't search ArianaGrande, Bieber, BTTS or Beyonce
      - Instead search Ariana Grande, Justin Bieber, BTS or Beyoncé

- Search for the exact artist you are looking for.

      For example:

      - If you are searching for Lady Gaga, don't search only with Lady, because Lady is another artist.

## Technical Notes and Build Process

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Dependencies installation

Run `npm install` to install the packages it depends on.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
