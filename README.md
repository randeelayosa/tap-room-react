# Tap Room - React Build

#### _Front End Development/React Week 1, Independent Project - Week 15, 4.19.19_

#### By _**Randee Layosa**_

![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

_This application is a repurpose of an in-class project previously written in Angular. It now uses the React library and Firebase cloud database._

## Preview
<p align="center">
<img src="src/assets/img/######.png" width="200" height="152" title="">
<img src="src/assets/img/######.png" width="200" height="152" title="">
</p>

## Technologies Used

  * _React_
  * _Webpack_
  * _eslint_
  * _Sass_
  * _AOS_
  * _JSX_

## Setup/Installation Requirements

#### To open and view this project file:
1. Go to https://########.firebaseapp.com to view the live deployed app.
2. Or, clone this GitHub repository https://github.com/randeelayosa/tap-room-react.git to your Desktop.
  * Install git onto your computer if it isn't already.
  * To clone the project down to your desktop, open your Terminal, and enter the following commands:
  ```
  cd desktop
  git clone [paste link here]
  cd [project folder name]
  atom .
  npm install
  npm run start
  ```
  * _You can use another text editor if Atom is not your preferred program._
  * _Make sure a "node_modules" and "dist" folder are created in your project file. If it hasn't, run `npm install` again._
  * _You can then go to the link in step 1 above, or continue on to the following instructions to run the server._
3. Go to http://localhost:8080/ in the browser of your choice. _Note: The app will automatically reload if you edit any of the code in the source files._


## Planning

  | **Configuration/Dependencies** | **Use** |
| :-------------     | :------------- |
| Babel | JS transpiler |
| CSS-Loader, Style-Loader, Sass-Loader, Node-Sass | styling |
| ESLint | JS linter, checks code for errors |
| File-Loader, URL-Loader | image loader |
| HTML-Webpack-Plugin | loads HTML file |
| Jasmine, Karma | for testing code |
| React | JS Library |
| Webpack | bundles/compiles code |

**Component Layout**

<p align="center">
  <img src="src/assets/img/planning.jpg" width="500" height="316" title="Tap Room Component and Route Structure">
</p>

**Features Built and To Be Completed**
- [ ] Navigation bar
- [ ] Body component
- [ ] Footer navigation bar
- [ ] Dropdown menu animations in navigation bar
- [ ] Authentication/Sign in feature to allow admin users to adjust inventory
- [ ] Page routing
- [ ] Sass styling
- [ ] Program has a Firebase database established
- [ ] Program is deployed

**Integration**
  * src folder: files responsible for UI code and backend functionality
  * Integrate Firebase to add keep track of Add and Edit functionality

**UX/UI**
  * Use CSS objects to style the page.

**Polish**
  * Delete unused dependencies in `package.json` and plugins in the config files
  * Ensure README includes all necessary language for instructions, bugs, and documentation

## Known Bugs
You will get an `Expected linebreaks to be 'LF' but found 'CRLF'` error if you are using a PC and run `npm run lint`. It does not break the code and will still run correctly when you run `npm run start`.

### Legal

*This software is licensed under MIT license.*

Copyright (c) 2019 **_Randee Layosa_**
