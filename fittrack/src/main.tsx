import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import '@ionic/react/css/core.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);

defineCustomElements(window);
