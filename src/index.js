import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
