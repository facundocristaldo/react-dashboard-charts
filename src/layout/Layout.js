import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PrivateRoute from "../components/routing/PrivateRoute";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar from "../components/navbar/Navbar";
import User from "../containers/User";
import MiniDrawer from "../components/minidrawer/MiniDrawer";
import Table from "../containers/Table";
import Dashboard from "../containers/dashboard/Dashboard";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    // paddingLeft is sum of padding and MiniDrawer width when closed
    // So that page content does not get behind MiniDrawer
    paddingLeft: theme.spacing(2) + theme.spacing(6) + 1,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(2) + theme.spacing(9) + 1
    }
  }
}));

function Layout() {
  const classes = useStyles();
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <MiniDrawer />
        <Container className={classes.container}>
          <Switch>
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <PrivateRoute path="/user" exact component={User} />
            <PrivateRoute path="/table" exact component={Table} />
            <Route path="/" render={() => <Redirect to="/dashboard" />} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default Layout;
