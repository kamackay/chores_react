import React from "react";
import Snackbar from "material-ui/Snackbar";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

const fabStyle = { position: "fixed", bottom: 25, right: 25 };

export default class AddChoreFab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fabShow: false
		};
	}

	handleClick = () => {
		this.setState({
			fabShow: true
		});
	};

	handleRequestClose = () => {
		this.setState({
			fabShow: false
		});
	};

	render() {
		return (
			<div>
				<FloatingActionButton
					style={fabStyle}
					onClick={this.handleClick}
				>
					<ContentAdd />
				</FloatingActionButton>
				<Snackbar
					open={this.state.fabShow}
					message="Don't click that, asshole."
					autoHideDuration={4000}
					onRequestClose={this.handleRequestClose}
				/>
			</div>
		);
	}
}
