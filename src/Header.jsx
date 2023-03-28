import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Box sx={{ display: "flex", marginBottom: "6rem" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            AccelerateBs India Private Limited
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
