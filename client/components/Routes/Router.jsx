import React from 'react';
import { Router, Routes, Link } from 'react-router';

<Router>
  <Route path="/" component={App} />
  <Route path="/auth" component={*Nas component} />
  {/* <Route path="/auth/loggedIn" component={CMS} /> */}
  <Route path="/loggedIn" component={Cms} />
</Router>
