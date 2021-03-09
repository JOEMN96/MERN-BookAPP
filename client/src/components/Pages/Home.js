import React from "react";
import Card from "../Card";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";

function Home() {
  const state = useSelector((state) => state.books);
  console.log(state);

  if (!state) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <Grid container className="HomeMain">
        <Grid item xs={12} md={6} lg={4}>
          <Card />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
