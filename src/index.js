import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="well">
					<h1>Hey, you have chores to do.</h1>
				</div>
			</div>
		);
	}
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
