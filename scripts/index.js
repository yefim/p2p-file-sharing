import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import {render} from 'react-dom';

import Upload from './upload';
import Download from './download';

render(
  <Router>
    <div>
      <Route exact path="/" component={Upload} />
      <Route path="/:torrentId" component={Download} />
    </div>
  </Router>,
  document.getElementById('app')
);
