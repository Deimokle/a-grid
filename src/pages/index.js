import * as React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import App from '../app';

import '../styles/global.css';

const IndexPage = () => {
  return (
    <main>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
