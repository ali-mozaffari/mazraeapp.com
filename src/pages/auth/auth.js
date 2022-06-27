import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import loginIMG from "./../../assets/img/loginIMG.png";
import logo from "./../../assets/img/logo.png";
import { Input } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Auth() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
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
            <Typography
              component="p"
              variant="p"
              style={{ color: "#a3a3a3", fontSize: "13px" }}
            >
              برای ورود در سامانه مزرعه شماره تماس خود را وارد کنید
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 7, width: "90%" }}
            >
              <Input
                disableUnderline
                required
                fullWidth
                autoFocus
                placeholder="شماره تماس"
                style={{
                  backgroundColor: "#f6f8f7",
                  borderRadius: "8px",
                  height: "50px",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  fontSize: "13px",
                  marginBottom: "20px",
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{
                  backgroundColor: "#16db93",
                  borderRadius: "8px",
                  height: "50px",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  fontSize: "13px",
                }}
              >
                ورود
              </Button>

              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}

              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}
              <Copyright sx={{ mt: 5 }} />
            </Box>
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
        />
      </Grid>
    </ThemeProvider>
  );
}
