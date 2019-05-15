import React from 'react';
import {withStyles, createStyles, WithStyles, Theme} from '@material-ui/core/styles';
import { inject, observer } from "mobx-react";
import { Global } from "../interface";
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Navigator from './Navigator';
import Header from './Header';


const drawerWidth = 256;
const styles = (theme: Theme) => createStyles ({
	root: {
		display: 'flex',
		minHeight: '100vh',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appContent: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
	},
	mainContent: {
		flex: 1,
		padding: '48px 36px 0',
		background: '#eaeff1',
	},
});

interface ContainerProps extends WithStyles, Global {

}

interface ContainerState {
	mobileOpen: boolean;
}

@inject("router")
class Container extends React.Component<ContainerProps, ContainerState> {
	public state = {
		mobileOpen: false,
	};

	handleDrawerToggle = (): void => {
		this.setState(state => ({ mobileOpen: !state.mobileOpen }));
	};

	public render(): JSX.Element {
		const { classes } = this.props;
		console.log(this.props);
		return (
			<div className={classes.root}>
				<CssBaseline />
				<nav className={classes.drawer}>
					<Hidden smUp implementation="js">
						<Navigator
							PaperProps={{ style: { width: drawerWidth } }}
							variant="temporary"
							open={this.state.mobileOpen}
							onClose={this.handleDrawerToggle}
						/>
					</Hidden>
					<Hidden xsDown implementation="css">
						<Navigator PaperProps={{ style: { width: drawerWidth } }} />
					</Hidden>
				</nav>
				<div className={classes.appContent}>
					<Header onDrawerToggle={this.handleDrawerToggle} />
					<main className={classes.mainContent}>
						<div>
							Hello World
						</div>
					</main>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Container);
