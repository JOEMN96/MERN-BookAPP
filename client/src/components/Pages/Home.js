import React from "react";
import Card from "../Card";
import Grid from "@material-ui/core/Grid";

function Home() {
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
