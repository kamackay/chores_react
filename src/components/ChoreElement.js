import React from "react";
import { Card, CardHeader } from "material-ui/Card";

export default class ChoreElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.title,
			subtitle: props.subtitle,
			avatar: "images/main_icon.png"
		};
	}

	render() {
		return (
			<Card style={{ margin: 20 }}>
				<CardHeader
					title={this.state.title}
					subtitle={this.state.subtitle}
					avatar={this.state.avatar}
				/>
			</Card>
		);
	}
}
