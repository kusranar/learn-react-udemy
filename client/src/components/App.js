import React from 'react';
import { BrowserRouter, HashRouter, MemoryRouter, Router, Route, Link, Switch } from 'react-router-dom';

import history from '../history';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

// const PageOne = () => {
//     return <div>
//         PageOne
//         <Link to="/page-two">To Page Two</Link>
//     </div>
// }

// const PageTwo = () => {
//     return <div>
//         PageTwo
//         <Link to="/">To Page One</Link>
//     </div>
// }

const ROUTES = [
    {
        path: "/",
        component: StreamList,
        exact: true
    },
    {
        path: "/streams/new",
        component: StreamCreate,
        exact: true
    },
    {
        path: "/streams/edit/:id",
        component: StreamEdit,
        exact: true
    },
    {
        path: "/streams/delete/:id",
        component: StreamDelete,
        exact: true
    },
    {
        path: "/streams/:id",
        component: StreamShow,
        exact: true
    }
]

const App = () => {
    return (
        <div className="ui container">
            {/* <BrowserRouter> */}
            {/* can visible with path same */}
            {/* <Route path="/" exact component={PageOne} /> */}
            {/* <Route path="/" exact component={PageOne} />
                <Route path="/page-two" component={PageTwo} />
            </BrowserRouter> */}

            {/* <HashRouter>
                <Route path="/" exact component={PageOne} />
                <Route path="/page-two" component={PageTwo} />
            </HashRouter> */}

            {/* <MemoryRouter>
                <Route path="/" exact component={PageOne} />
                <Route path="/page-two" component={PageTwo} />
            </MemoryRouter> */}

            <Router history={history}>
                <Header />
                <Switch>
                    {ROUTES.map((route, i) => <Route key={i} path={route.path} exact={route.exact} component={route.component} />)}
                </Switch>
            </Router>
        </div>
    )
}

export default App;