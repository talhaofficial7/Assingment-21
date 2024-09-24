import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import for React 18
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

// Get the root element from your HTML
const container = document.getElementById('root');

// Create a root and render the App
const root = createRoot(container); // Create root in React 18
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
