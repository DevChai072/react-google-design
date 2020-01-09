import React from 'react'
import logo from './google_logo.png'
import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AppsIcon from '@material-ui/icons/Apps'
import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Paper from '@material-ui/core/Paper'
import MicIcon from '@material-ui/icons/Mic'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		color: "black",
		backgroundColor: "#ffffff",
		boxShadow: "none",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	imageLogo: {
		height: "92px",
		width: "272px",
		paddingTop: "109px",
	},
	rootBoxSearch: {
		marginTop: "50px",
		borderRadius: "50px"
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
		width: "400px",
	},
	iconButton: {
		padding: 10,
	},
	gridButton: {
		paddingTop: 20
	},
	button: {
		backgroundImage: "-webkit-linear-gradient(top,#f5f5f5,#f1f1f1)",
		backgroundColor: "#f2f2f2",
		border: "1px solid #f2f2f2",
		borderRadius: "4px",
		color: "#5F6368",
		fontFamily: "arial,sans-serif",
		fontSize: "14px",
		margin: "11px 4px",
		padding: "0 16px",
		lineHeight: "27px",
		height: "36px",
		minWidth: "54px",
		textAlign: "center",
		cursor: "pointer",
		userSelect: "none",
	},
	footer: {
		position: "fixed",
		left: 0,
		bottom: 0,
		width: "100%"
	},
	appBarFooter: {
		color: "black",
		borderTop: "1px solid #e4e4e4",
		backgroundColor: "#f2f2f2",
		lineHeight: "40px",
    	minWidth: "980px",
		boxShadow: "none",
	},
	TextFooter: {
		minHeight: "20px",
		color: "rgba(0,0,0,.54)",
	},
}));

const App = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container>
				<AppBar position="static" className={classes.appBar}>
					<Toolbar>
						<Typography variant="h6" className={classes.title}></Typography>
						<Link component="button" variant="body2"color="inherit" className={classes.menuButton}>Gmail</Link>
						<Link component="button" variant="body2" color="inherit" className={classes.menuButton}>Images</Link>
						<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
							<AppsIcon />
						</IconButton>
						<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
					</Toolbar>
				</AppBar>
				<Grid container direction="column" justify="center" alignItems="center">
					<img src={logo} className={classes.imageLogo}/>
					<Paper component="form" className={classes.rootBoxSearch}>
						<IconButton type="submit" className={classes.iconButton} aria-label="search" disabled>
							<SearchIcon />
						</IconButton>
						<InputBase className={classes.input} placeholder=""/>
						<IconButton className={classes.iconButton} aria-label="menu">
							<MicIcon />
						</IconButton>
					</Paper>
				</Grid>

				<Grid container direction="row" justify="center" alignItems="center" className={classes.gridButton}>
					<input type="submit" className={classes.button} value="Google Search"/>
					<input type="submit" className={classes.button} value="I'm Feeling Lucky"/>
				</Grid>

				<Grid container direction="row" justify="center" alignItems="center" className={classes.gridButton}>
					Google offered in:&nbsp;&nbsp;
					<Link component="button" variant="body2" className={classes.menuButton}>ภาษาไทย</Link>
				</Grid>

			</Grid>

			<div className={classes.footer}>
				<AppBar position="static" className={classes.appBarFooter}>
					<Toolbar className={classes.TextFooter}>
						<div>Thailand</div>
					</Toolbar>
				</AppBar>
				<AppBar position="static" className={classes.appBarFooter}>
					<Toolbar className={classes.TextFooter}>
						<div className={classes.title}>
							<Link component="button" variant="body2"color="inherit" className={classes.menuButton}>Advertising</Link>
							<Link component="button" variant="body2"color="inherit" className={classes.menuButton}>Business</Link>
							<Link component="button" variant="body2"color="inherit" className={classes.menuButton}>About</Link>
							<Link component="button" variant="body2"color="inherit" className={classes.menuButton}>How Search works</Link>
						</div>
						<Link component="button" variant="body2"color="inherit" className={classes.menuButton}>Privacy</Link>
						<Link component="button" variant="body2" color="inherit" className={classes.menuButton}>Terms</Link>
						<Link component="button" variant="body2" color="inherit" className={classes.menuButton}>Settings</Link>
					</Toolbar>
				</AppBar>
			</div>
		</div>
	)
}

export default App;
