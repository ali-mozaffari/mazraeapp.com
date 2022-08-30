import { Grid, TextField, Typography, Link, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { InstagramIcon, TelegramIcon, WhatsappIcon } from "../../assets/icon";
import "./auth.css";
import { inputLabelClasses } from "@mui/material/InputLabel";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import * as Yup from "yup";
import "yup-phone";
import { Form, Formik } from "formik";
import SiteRulesModal from "./siteRulesModal";

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
          className="green-linked-text"
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

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const SendCode = () => {
  const [phoneInput, setPhoneInput] = useState("");
  const handlePhone = (e) => {
    setPhoneInput(e.target.value);
  };

  const PHONE_REGEX = new RegExp(
    /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/
  );

  const phone_validation = () => {
    const match = PHONE_REGEX.test(phoneInput);
    if (phoneInput && match) {
      return true;
    } else {
      return false;
    }
    // if (phoneInput) {
    //   return match;
    // } else {
    //   return true;
    // }
  };

  const validation = Yup.object().shape({
    phone: Yup.string().test(phone_validation),
  });

  const initialValues = {
    farmStarting: "",
    phone: "",
    userName: "",
  };

  return (
    <Box sx={{ width: { xs: "90%", sm: "65%" } }}>
      <CacheProvider value={cacheRtl}>
        <Grid style={{ width: "65%" }}>
          <Typography component="p" variant="p" className="top-text-login">
            برای ورود در سامانه مزرعه شماره تماس خود را وارد کنید
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={(values, formikHelpers) => {
              // onFormSubmit(values);
              formikHelpers.resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Box sx={{ mt: 3 }}>
                  <TextField
                    className="authInput"
                    label="شماره تماس"
                    type="number"
                    variant="standard"
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
                        color: "#A2A2A2",
                        "&.Mui-focused": {
                          color: "#A2A2A2",
                          marginTop: "8px",
                        },
                      },
                      input: {
                        color: "#676767",
                      },
                      ".MuiFormLabel-root": {
                        paddingLeft: "15px !important",
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        [`&.${inputLabelClasses.shrink}`]: {
                          marginTop: "8px !important",
                        },
                      },
                    }}
                    onChange={handlePhone}
                    style={
                      errors.phone && touched.phone
                        ? {
                            border: "1px solid #f00",
                            color: "red",
                          }
                        : { border: "none" }
                    }
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className="authSubmitBtn"
                  >
                    دریافت کد
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Grid>

        <Box style={{ marginTop: " 250px" }}>
          <Grid className="login-bottom-items">
            {" "}
            <SiteRules />{" "}
          </Grid>

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
      </CacheProvider>
    </Box>
  );
};

export default SendCode;
