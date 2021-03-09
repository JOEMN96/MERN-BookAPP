import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPostASync } from "../store/actions/Books";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  anchor: {
    color: "white",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPostASync());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.anchor} to="/">
              Bookeie
            </Link>
          </Typography>
          <Button color="inherit">
            <Link className={classes.anchor} to="/addBook">
              Add New Book
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
