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
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispath = useDispatch();
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
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
              <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
            </Tabs>
          </Box>
        )}
        {!isLoggedIn && (
          <>
            <Box display="flex" marginLeft="auto">
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: "4px", borderRadius: 8 }}
                color="warning"
              >
                Login{" "}
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: "4px", borderRadius: 8 }}
                color="warning"
              >
                Signup{" "}
              </Button>
            </Box>{" "}
          </>
        )}
        {isLoggedIn && (
          <Button
            onClick={() => dispath(authActions.logout())}
            LinkComponent={Link}
            to="/auth"
            variant="contained"
            sx={{ margin: "4px", borderRadius: 8 }}
            color="warning"
          >
            Logout{" "}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
