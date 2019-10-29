import React from 'react';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';
import Home from './components/Home';


// import more components
export default (
    <BrowserRouter history={browserHistory}>
     <div>
      <Route exact path='/' component={Home} />
      

     </div>
    </BrowserRouter>
);
