import React from "react";
import { Card, CardHeader } from "material-ui/Card";

export default class ChoreElement extends React.Component {
	render() {
		return (
			<Card>
				<CardHeader
					title="Dust the Fan"
					subtitle="Every 3 months"
					avatar="images/main_icon.png"
				/>
			</Card>
		);
	}
}
