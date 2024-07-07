import React from 'react';
import App from './app';
import { createRoot } from 'react-dom/client';

let eleRoot = document.getElementById('root')!; 
const root = createRoot(eleRoot);
root.render(<App />);
