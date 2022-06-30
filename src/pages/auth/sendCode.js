import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { InstagramIcon, TelegramIcon, WhatsappIcon } from "../../assets/icon";
import { Link, Button } from "@mui/material";
import "./auth.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"تمام حقوق مادی و معنوی این سایت متعلق است به "}
      <Link color="inherit" href="https://mazraeapp.com//">
        mazraeapp.com
      </Link>{" "}
      {/* {new Date().getFullYear()}
        {"."} */}
    </Typography>
  );
}

const SendCode = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Grid sx={{ pr: "10%", pl: "10%" }}>
      <Typography
        component="p"
        variant="p"
        style={{ color: "#a3a3a3", fontSize: "13px", textAlign: "center" }}
      >
        برای ورود در سامانه مزرعه شماره تماس خود را وارد کنید
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        {/* <Input
                disableUnderline
                required
                fullWidth
                autoFocus
                placeholder="شماره تماس"
                className="authInput"
              /> */}

        <TextField
          className="authInput"
          label="شماره تماس"
          variant="standard"
          InputLabelProps={{
            
          }}
          InputProps={{
            disableUnderline: true,
            style:{
                width: "100%"
            }
          }}
          sx={{
            "& label": {
              right: "10px",
              fontSize: "13px",
              color: "#6ca271",
              "& label-focused":{color: "red"},
              "&.Mui-focused": {
                right: 0,
                color: "#6ca271",
                marginTop: "8px",
                style:{
                    right: "5px"
                }
              },
            },
            input: {
              color: "#6ca271",
            },
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="authSubmitBtn"
        >
          دریافت کد
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

        <Grid style={{ marginTop: "20%" }}>
          <Grid
            container
            className="authImgTopBarMobile"
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <Grid item className="authImgTopBarMobileText">
              اگر سوالی دارید میتوانید با 09352593515 تماس بگیرید
            </Grid>
          </Grid>

          <Grid
            container
            sx={{ display: { xs: "flex", sm: "none" } }}
            style={{
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <Grid item className="authSocialIconMobile">
              <TelegramIcon />
            </Grid>
            <Grid item className="authSocialIconMobile">
              <InstagramIcon />
            </Grid>
            <Grid item className="authSocialIconMobile">
              <WhatsappIcon />
            </Grid>
          </Grid>

          <Copyright style={{ fontSize: "10px" }} />
        </Grid>
      </Box>
    </Grid>
  );
};

export default SendCode;
