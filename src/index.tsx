import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import './scss/main.scss';
import * as serviceWorker from './serviceWorker';
const App = lazy(() => import('./app/App'))

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Suspense fallback={<div>lOADING</div>}>
              <App/>
          </Suspense>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
