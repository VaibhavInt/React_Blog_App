import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,116,0.4066001400560224) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">BlogsApp</Typography>
        <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab label="All Blogs" />
            <Tab label="My Blogs" />
          </Tabs>
        </Box>
        <Box display="flex" marginLeft="auto">
          <Button
            variant="contained"
            sx={{ margin: "4px", borderRadius: 8 }}
            color="warning"
          >
            Login{" "}
          </Button>
          <Button
            variant="contained"
            sx={{ margin: "4px", borderRadius: 8 }}
            color="warning"
          >
            Signup{" "}
          </Button>
          <Button
            variant="contained"
            sx={{ margin: "4px", borderRadius: 8 }}
            color="warning"
          >
            Logout{" "}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
