import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  Container,
  Divider,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { memo } from "react";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import authStore from "../stores/authStore";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { onLogout } = useAuth();

  const { user } = authStore((state) => state);

  const logout = () => {
    onLogout(() => {
      navigate("/login", { replace: true });
    });
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, paddingTop: "80px" }}>
        <AppBar position="fixed">
          <Toolbar sx={{ justifyContent: "end", alignItems: "center" }}>
            <Typography>{`${user?.firstName} ${user?.lastName}`}</Typography>
            <Divider
              sx={{ height: 28, m: 1, background: "#fff" }}
              orientation="vertical"
            />
            <IconButton color="inherit" onClick={logout}>
              <ExitToAppIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ padding: "16px" }}>{children}</Container>
    </div>
  );
};

export default memo(Layout);
