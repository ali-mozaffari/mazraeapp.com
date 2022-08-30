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
    if (phoneInput && match){
      return true;
    }else {
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
    <CacheProvider value={cacheRtl}>
      <Grid style={{ width: "65%", height: "50vh" }}>
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
    </CacheProvider>
  );
};

export default SendCode;
