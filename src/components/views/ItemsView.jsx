import { Box, Container, Grid } from "@mui/material";
import React from "react";

export const ItemsView = () => {
  return (
    <Container maxWidth="sm">
      <Box padding={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            {" "}
            A box inside a grid container
            <Box sx={{ bgcolor: "primary.main", p: 2 }}>box 1 w item 1</Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            {" "}
            A second box inside the grind component
            <Box sx={{ bgcolor: "secondary.main", p: 2 }}>box 2</Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            {" "}
            A 3rd box inside a grid container
            <Box sx={{ bgcolor: "primary.main", p: 2 }}>box 3</Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
