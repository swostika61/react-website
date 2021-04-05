import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import logo from '../../assets/logo.png';

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "2em"
    },
    logo: {
        height: "6em"
    },
    logoContainer: {
        padding: "0",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"

    },
    lastTab: {
        marginRight: "30px"
    },
    button: {
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
    }
}));

function Header(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (e, value) => {
        setValue(value);
    };

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
          setValue(0);
        } else if (window.location.pathname === "/Services" && value !== 1) {
          setValue(1);
        } else if (window.location.pathname === "/About" && value !== 2) {
          setValue(2);
        } else if (window.location.pathname === "/Portfolio" && value !== 3) {
          setValue(3);
        } else if (window.location.pathname === "/Contact" && value !== 4) {
          setValue(4);
        }
      }, [value])

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button component={Link} to="/" className={classes.logoContainer} onClick={ () => setValue(0)} disableRipple>
                            <img alt="company logo" src={logo} className={classes.logo} />
                        </Button>
                        <Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
                            <Tab className={classes.tab} component={Link} to="/" label="Home" />
                            <Tab className={classes.tab} component={Link} to="/Services" label="Services" />
                            <Tab className={classes.tab} component={Link} to="/About" label="About" />
                            <Tab className={classes.tab} component={Link} to="/Portfolio" label="Portfolio" />
                            <Tab className={[classes.tab, classes.lastTab]} component={Link} to="/Contact" label="Contact" />
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </>
    )
}

export default Header
