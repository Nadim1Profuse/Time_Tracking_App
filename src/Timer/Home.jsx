import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TimerCard from "./TimerCard";
import TaskList from "../TaskList/TaskList";

function Home(props) {
  return (
    <>
      <Box sx={{ display: "flex", marginBottom: "6rem" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              KNOVATOR
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <h6 style={{fontFamily: "Orbitron",fontWeight:"bold",margin:"5px"}}>Time Tracking App</h6>
      <TimerCard />
      <TaskList />
    </>
  );
}

export default Home;
