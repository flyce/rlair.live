import React from 'react';

import {Router, Route, Switch } from 'react-router-dom';
import history from './history.js';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { purple, red, green } from 'material-ui/colors';

import Index from '../containers/Index';
import MemberCenter from '../containers/MemberCenter';
import Copyright from '../containers/Copyright';
import Upload from '../containers/Upload';
import About from '../containers/About';
import Player from '../containers/Player';
import Login from '../components/Login';
import Favorite from '../containers/Favorite';
import WatchLater from '../containers/Later';
import History from '../containers/History';
import Register from '../components/Register';

const theme = createMuiTheme({
    palette: createPalette({
        primary: purple, // Purple and green play nicely together.
        accent: {
            ...green,
            A400: '#00e677',
        },
        error: red,
    }),
});

const NoMatch = ({location}) => (
    <div>
        <h3>未找到路由: <code>{location.pathname}</code></h3>
    </div>
);

const Test = () => (
    <div>
       Test
    </div>
);

const App = () => (
    <MuiThemeProvider theme={theme}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route path="/member" component={MemberCenter}/>
                <Route path="/upload" component={Upload}/>
                <Route path="/about" component={About}/>
                <Route path="/copyright" component={Copyright}/>
                <Route path="/video/:id" component={Player}/>
                <Route path="/login" component={Login}/>
                <Route path="/favorite" component={Favorite}/>
                <Route path="/later" component={WatchLater}/>
                <Route path="/history" component={History}/>
                <Route path="/register" component={Register}/>
                <Route path="/test" component={Test}/>
                <Route component={NoMatch}/>
            </Switch>
        </Router>
    </MuiThemeProvider>
);

export default App;
