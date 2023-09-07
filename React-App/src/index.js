import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import CentralData from './components/Redux/reduxState';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={CentralData}> <App /> </Provider>);
