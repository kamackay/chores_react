import React from "react";
import ChoreElement from "./ChoreElement";
import AddChoreFab from "./AddChoreFab";
import Paper from "material-ui/Paper";

export default () => (
	<div className="container">
		<h1>Chores</h1>
		<Paper style={{}} zDepth={3}>
			<ChoreElement />
			<ChoreElement />
		</Paper>
		<AddChoreFab />
	</div>
);
