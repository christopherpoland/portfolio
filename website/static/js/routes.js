import React from 'react';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
// import more components
export default (
    <BrowserRouter history={browserHistory}>
     <div>
      <Route exact path='/' component={Home} />
      <Route path='/work' component={Work} />
      <Route path='/about' component={About} />
     </div>
    </BrowserRouter>
);
