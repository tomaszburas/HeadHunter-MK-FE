import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';
import {Theme} from './components/Theme';
import GlobalCSS from './global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <GlobalCSS />
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);
