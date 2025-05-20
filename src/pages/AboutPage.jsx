import React from "react";
import { Grid, Column, Tile } from "@carbon/react";

export default function AboutPage() {
  return (
    <Grid fullWidth>
      <Column lg={12} md={8} sm={4}>
        <Tile>
          <h2>About This App</h2>
          <p>
            This dashboard is built with the Carbon Design System and Vite +
            React 19.
          </p>
        </Tile>
      </Column>
    </Grid>
  );
}
