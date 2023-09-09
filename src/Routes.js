import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Members from './pages/Members';
import NotFound from './pages/NotFound';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/blog" component={Blog} />
        <Route path="/members" component={Members} />
        <Route component={NotFound} /> {/* This catches any unmatched routes */}
      </Switch>
    </Router>
  );
};

export default Routes;
