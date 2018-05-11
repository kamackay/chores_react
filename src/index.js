import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppElement from "./components/App";

const App = () => (
	<MuiThemeProvider>
		<AppElement />
	</MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
