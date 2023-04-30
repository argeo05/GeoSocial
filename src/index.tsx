import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux/es/exports';
import App from './components/app/app';
import { store } from './store/store';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

