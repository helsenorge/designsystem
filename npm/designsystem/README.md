# `designsystem-react`

<h1>OUTDATED -> should refer to confluence for now</h1>

<a href="https://www.npmjs.com/package/@helsenorge/designsystem-react/v/latest">
    <img src="https://img.shields.io/npm/v/@helsenorge/designsystem-react/latest" />
</a>
<a href="https://www.npmjs.com/package/@helsenorge/designsystem-react/v/next">
    <img src="https://img.shields.io/npm/v/@helsenorge/designsystem-react/next" />
</a>

## 👋 Introduction

**TODO: Add introduction text**

## 🚀 Quick start

To install and use our React components simply run the following commands in your favorite terminal:

### yarn

```bash
yarn add @helsenorge/designsystem-react
```

### npm

```npm
npm install @helsenorge/designsystem-react
```

### Usage example

This is example takes basis in the file `App.tsx/js` from the out-of-the-box project using CRA.

```typescript
import React from 'react';
import logo from './logo.svg';
import './App.css';

import { CommonButton } from '@helsenorge/designsystem-react';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <CommonButton>Hello world!</CommonButton>
    </div>
  );
};

export default App;
```

## 📓 Documentation

A more detailed getting started manual can be viewed [here](https://helsenorge.design/pattern-library). For a full overview of all the
available components and their specification, head over [here](https://helsenorge.design/pattern-library/components)

To read the full design system documentation head over to our web page [Helsenorge Design](https://helsenorge.design/). Here you can read
about our use of design principles, design language, patterns, compositions, live code examples and techincal component specifications.
