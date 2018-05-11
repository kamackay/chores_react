import React from "react";
import ChoreElement from "./ChoreElement";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

const fabStyle = { position: "fixed", bottom: 25, right: 25 };

export default () => (
	<div className="container">
		<h1>Chores</h1>
		<ChoreElement />
		<FloatingActionButton style={fabStyle}>
			<ContentAdd />
		</FloatingActionButton>
	</div>
);
