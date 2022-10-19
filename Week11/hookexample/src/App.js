import React, { Component } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './containers/Home'
import LifeCycles from './containers/LifeCycles'
import ReducerHook from './containers/ReducerHook'
import './App.css';

class App extends Component {

	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<div className="menu">
						<ul>
							<li>
								<Link to="/">useState Example</Link>
							</li>
							<li>
								<Link to="/lifecycles">useSideEffect Example</Link>
							</li>
							<li>
								<Link to="/reducer-hook">useReducer Example</Link>
							</li>
						</ul>
					</div>
					<Routes>
						<Route exact path="/" element={<Home/>} />
						<Route exact path="/lifecycles" element={<LifeCycles/>} />
						<Route exact path="/reducer-hook" element={<ReducerHook/>} />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
