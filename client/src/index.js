import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Journey from './Journey';
class GitHubExplore extends Component {
	render() {
		return (
			<div>
				<Journey/>
			</div>
		)
	}
}

ReactDOM.render(<GitHubExplore/>, document.getElementById("root"));