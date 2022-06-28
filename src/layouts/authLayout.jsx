import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import loginIMG from "./../assets/img/loginIMG.png";
import logo from "./../assets/img/logo.png";
import { Input } from "@mui/material";
import { display } from "@mui/system";
import { InstagramIcon, TelegramIcon, WhatsappIcon } from "../assets/icon";
import "./../pages/auth/auth.css";

const AuthLayout = ({ children }) => {
  return (
    <Grid
      container
      component="main"
      sx={{ height: { xs: "93vh", sm: "100vh" } }}
    >
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        style={{ borderRadius: 0 }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            mr: "auto",
            ml: "auto",
            width: { md: "60%" },
          }}
        >
          <img src={logo} style={{ height: "75px", color: "#16db93" }} />

          <Typography
            component="h1"
            variant="h6"
            style={{
              paddingTop: "30px",
              paddingBottom: "20px",
              color: "#676767",
              fontWeight: "900",
            }}
          >
            ورود
          </Typography>

          {children}
        </Box>
      </Grid>

      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${loginIMG})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          container
          className="authImgTopBar"
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Grid item className="authImgTopBarText">
            اگر سوالی دارید میتوانید با 09352593515 تماس بگیرید
          </Grid>
        </Grid>

        <Grid
          container
          sx={{ display: { xs: "none", sm: "flex" } }}
          style={{ paddingRight: "20px" }}
        >
          <Grid item className="authSocialIconTop">
            <TelegramIcon />
          </Grid>
          <Grid item className="authSocialIconTop">
            <InstagramIcon />
          </Grid>
          <Grid item className="authSocialIconTop">
            <WhatsappIcon />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
