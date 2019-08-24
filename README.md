<p align="center">
    <h1 align="center">Helsenorge Design System - Library</h1>
</p>
<p align="center">
    <a href="https://codecov.io/gh/Helsenorge/designsystem">
        <img src="https://codecov.io/gh/Helsenorge/designsystem/branch/develop/graph/badge.svg?style=popout&token=QmUnBqCydy" />
    </a>
        <a href="https://www.npmjs.com/package/@helsenorge/designsystem">
        <img src="https://img.shields.io/npm/v/@helsenorge/designsystem/latest.svg?style=popout" />
    </a>
    <a href="https://www.npmjs.com/package/@helsenorge/designsystem">
        <img src="https://img.shields.io/npm/v/@helsenorge/designsystem/dev.svg?style=popout" />
    </a>
</p>

## 🔌 Quick start

### Installation

**Notice:** Currently there is no production version avaiable for release and ther latest NPM package will point to version `v0.0.1-dev.0`. An ongoing development version of our design system is available using the `@dev`-tag.

Our pattern library is hosted as a package on [npmjs](https://www.npmjs.com/package/@helsenorge/designsystem). Install the latest version of our package either using `yarn add @helsenorge/designsystem` or `npm install @helsenorge/designsystem`

To install our ongoing development package run either `yarn add @helsenorge/designsystem@dev` or `npm install @helsenorge/designsystem@dev`.

### Usage

The pattern library consist of a set of React components that are easy to use straight out of the box. Below is an example of how to import and use our `ActionButton`-component. This example takes into consideration that your project is set up using `yarn create react-app` or using a similar project strucutre.

Import the component from our design system and add it to your `App`-component.
```jsx
import React from 'react';
import { ActionButton } from '@helsenorge/designsystem';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ActionButton onClick={() => console.log('Hello world!')}>Hello world!</ActionButton>
      </header>
    </div>
  );
}

export default App;
```

Add the CSS file either to your `index.html` or `index.js` to apply the styling.
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import '~@helsenorge/designsystem/dist/css/helsenorge.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

If the stars aligned correctly, after running `yarn start` in your project, you should see our `ActionButton`-component rendered in your application.

## 📓 Documentation

To read the full design system documentation head over to our web page [design.helsenorge.io](https://design.helsenorge.io/). Here you can read about our use of design principles, design language, patterns, compositions, live code examples and techincal component specifications.

Contributions towards the documenation is handled in its own [repository](https://github.com/Helsenorge/designsystem-docs). Feel free to create issues regarding improvments and errors found.

## 💡 Contribute

## ❓FAQ

## 🔮 Status
**Active:** Currently in development.
