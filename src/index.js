import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routes';
import 'highlight.js/styles/github.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
// import Marked from './Marked';

ReactDOM.render(<Routers />, document.getElementById('app'));
