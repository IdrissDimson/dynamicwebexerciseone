import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Article from './containers/article';
import ArticleListing from './containers/article-listing';


function App() {

    return (
        <div className="App">
            <Router>
                <Route exact path="/" component={Article} />
                <Route exact path="/article/:id" component={ArticleListing} />
            </Router>
        </div>
    );
}

export default App;