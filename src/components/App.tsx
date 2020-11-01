import React from 'react';
import AllSongs from './AllSongs';
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
                <Route exact path="/all" component={AllSongs} />
                <Route exact path="/favorites" component={Favorites} />
                <Route exact path="/" component={AllSongs} />

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
