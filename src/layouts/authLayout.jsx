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
import loginPage from "./../assets/img/loginPage.png";
import logo from "./../assets/img/logo.png";
import { Input } from "@mui/material";
import { display } from "@mui/system";
import { InstagramIcon, TelegramIcon, WhatsappIcon } from "../assets/icon";
import { useState } from "react";
import "./../pages/auth/auth.css";
import SiteRulesModal from "../pages/auth/siteRulesModal";

function SiteRules(props) {
  // const [id, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);

  // Handle the displaying of the modal based on type and id
  const showActivitiesModal = () => {
    // setId();
    setDisplayConfirmationModal(true);
  };

  // Hide the modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  return (
    <div>
      <Typography variant="body2" align="center" {...props}>
        {"با ورود به سایت مزرعه، "}
        <span
          style={{ cursor: "pointer", color:"#16db93" }}
          onClick={() => showActivitiesModal()}
          // href="https://mazraeapp.com//"
        >
          قوانین و مقررات
        </span>
        {" سایت را پذیرفته ام."}
      </Typography>

      <SiteRulesModal
        showModal={displayConfirmationModal}
        // confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
        // id={id}
      />
    </div>
  );
}

const AuthLayout = ({ children }) => {
  return (
    <Grid
      container
      component="main"
      sx={{ height: { xs: "93vh", sm: "100vh", position: "relative" } }}
    >
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
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
            // width: { md: "60%" },
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

          <Box>
            <Grid className="login-bottom-items"> <SiteRules /> </Grid>

            <Grid container className="login-bottom-items">
              <Typography
                variant="body2"
                align="center"
                style={{ borderBottom: "1px solid #C2C2C2" }}
              >
                {"اگر سوالی دارید میتوانید با "}
                <span style={{ fontWeight: "800" }}>09352593515</span>
                {" تماس بگیرید"}
              </Typography>
            </Grid>

            <Grid container className="login-bottom-items">
              <Grid item className="loginSocialIcon">
                <WhatsappIcon />
              </Grid>
              <Grid item className="loginSocialIcon">
                <TelegramIcon />
              </Grid>
              <Grid item className="loginSocialIcon">
                <InstagramIcon />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>

      <Grid
        item
        xs={false}
        sm={6}
        md={6}
        sx={{
          backgroundImage: `url(${loginPage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Grid>
    </Grid>
  );
};

export default AuthLayout;
