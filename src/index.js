// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './styles/index.css';
// import App from './components/App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import AppURL from './components/AppURL';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<AppURL />
	</BrowserRouter>
);