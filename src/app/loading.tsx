"use client";

import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function CircularIndeterminate(){
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <CircularProgress size={80} color="warning" />
      </Box>
    </Container>
  );
}
