import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, AppBar, Typography, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { logOut } from "../../state/actions/authActions";
import ThemeToggler from "../themetoggler/ThemeToggler";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
    userSelect: "none"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  let navigationHistory = useHistory();

  const handleLogout = () => {
    dispatch(logOut());
  };
  const gotoHomePage = () => {
    navigationHistory.push("/");
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={gotoHomePage}
          >
            Dashboard
          </Typography>
          <ThemeToggler />
          <Button color="inherit" onClick={handleLogout} data-cy="logout">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
