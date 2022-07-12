import { Grid, TextField, Typography, Link, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { InstagramIcon, TelegramIcon, WhatsappIcon } from "../../assets/icon";
import "./auth.css";
import SiteRulesModal from './siteRulesModal';

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
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        fontSize={"13px !important"}
        {...props}
      >
        {"با ورود به سایت مزرعه، "}
        <Link
          color="#16db93"
          style={{ cursor: "pointer" }}
          onClick={() => showActivitiesModal()}
          // href="https://mazraeapp.com//"
        >
          قوانین و مقررات
        </Link>
        {" سایت را پذیرفته ام."}
      </Typography>

      {/* <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"تمام حقوق مادی و معنوی این سایت متعلق است به "}
        <Link color="inherit" href="https://mazraeapp.com//">
          mazraeapp.com
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography> */}

      <SiteRulesModal
        showModal={displayConfirmationModal}
        // confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
        // id={id}
      />
    </div>
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
            style: {
              // "label + .css-1x51dt5-MuiInputBase-input-MuiInput-input":{color: "red !important"}
              // "& .MuiFormLabel-root":{color: "red !important"}
            },
          }}
          InputProps={{
            disableUnderline: true,
            style: {
              width: "100%",
            },
          }}
          sx={{
            "& label": {
              right: "10px !important",
              fontSize: "13px",
              color: "#6ca271",
              "&.Mui-focused": {
                right: 0,
                color: "#6ca271",
                marginTop: "8px",
                style: {
                  // right: "5px",
                },
              },
            },
            input: {
              color: "#6ca271",
            },
            ".MuiFormLabel-root.Mui-focused": {
              marginRight: "-29% !important",
              // color: 'red !important'
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

          <SiteRules style={{ fontSize: "10px" }} />
        </Grid>
      </Box>
    </Grid>
  );
};

export default SendCode;
