import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app.jsx';
import Login from './components/login/login.jsx';
import Main from './components/main/main.jsx';

export default(
    <Route path='/' component={App}>
        <IndexRoute component={Login} />
        <Route path="/main" component={Main} />
    </Route>
)