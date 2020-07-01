import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import Journey from './containers/journey';
class GitHubExplore extends Component {
	render() {
		return (
			<div>
				<Journey store={store}/>
			</div>
		)
	}
}

ReactDOM.render(<GitHubExplore/>, document.getElementById("root"));