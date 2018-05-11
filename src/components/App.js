import React from "react";
import ChoreElement from "./ChoreElement";
import AddChoreFab from "./AddChoreFab";
import Paper from "material-ui/Paper";

const paperStyles = { padding: 10, overflow: "auto", height: "80vh" };

const choresElements = [];

for (let x = 0; x < 10; x++) {
	choresElements.push(<ChoreElement title={"Chore " + (x + 1)} key={x} />);
}

export default () => (
	<div className="container noscroll">
		<h1>Chores</h1>
		<Paper style={paperStyles} zDepth={3}>
			{choresElements}
		</Paper>
		<AddChoreFab />
	</div>
);
