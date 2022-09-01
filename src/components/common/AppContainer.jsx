import React from "react";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';

export const AppContainer = ({ children }) => (
  <React.Fragment>
    <Container maxWidth={false}>
      <Box p={3}>
        { children }
      </Box>
    </Container>
  </React.Fragment>
);
