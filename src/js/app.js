import React from 'react';
import { render } from 'react-dom';

// Import css
import css from './../styles/styles.styl';

// import components
import App from './components/App';
import Reports from './components/Reports';
import Categories from './components/Categories';

// import router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Categories}></IndexRoute>
                <Route path="/reports" component={Reports}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
