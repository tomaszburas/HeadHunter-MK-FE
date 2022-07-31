import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';
import {Theme} from './components/Theme';
import GlobalCSS from './global.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {StrictMode} from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Theme>
        <GlobalCSS />
        <ToastContainer position="top-center" />
        <App />
      </Theme>
    </BrowserRouter>
  </StrictMode>
);
