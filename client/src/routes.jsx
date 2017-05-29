import React from 'react';

import { Switch, Route } from 'react-router-dom';

// import App from './components/app';
import Home from './components/views/home';
import Profile from './components/views/profile';
import EditProfile from './components/views/edit_profile';
import Organization from './components/views/organization';

const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/profile" component={Profile} />
			<Route path="/edit_profile" component={EditProfile} />
			<Route path="/organization" component={Organization} />
		</Switch>
	</main>
);

export default Main;
