import React from 'react';
import Home from './Home';
import Favorites from './Favorites';
import NotFound from './NotFound';
import ErrorBoundary from './ErrorBoundary';

import {
    Route,
    Switch,
    BrowserRouter as Router,
    useLocation,
    useHistory,
} from 'react-router-dom';

const AuthedRoutes: React.FC = () => {
    const history = useHistory();
    const location = useLocation();

    return (
        <ErrorBoundary
            history={history}
            location={location.pathname}
        >
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/favorites" component={Favorites} />
                <Route exact path="/" component={Home} />

                <Route component={NotFound} />
            </Switch>
        </ErrorBoundary>
    );
};

const App: React.FC = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <AuthedRoutes />
    </Router>
);


export default App;
