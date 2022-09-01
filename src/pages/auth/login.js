import { Grid, TextField, Typography, Link, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import "./auth.css";
import ReactCodeInput from "react-code-input";
// import OTPInput, { ResendOTP } from "otp-input-react";

import { InstagramIcon, TelegramIcon, WhatsappIcon } from "../../assets/icon";
import SiteRulesModal from "./siteRulesModal";
import * as Yup from "yup";
import { Form, Formik } from "formik";

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

const myStyle = {
  inputStyle: {
    width: "14%",
    marginRight: "4px",
    marginLeft: "4px",
    backgroundColor: "#E2FFFB",
    color: "#676767",
    borderRadius: "8px",
    border: "none",
    height: "50px",
    fontSize: "20px",
    fontWeight: "800",
    marginBottom: "20px",
    justifyContent: "space-between",
    textAlign: "center",
  },
  inputStyleInvalid: {
    color: "red",
    border: "1px solid red",
  },
};

const Login = () => {
  const [codeInput, setCodeInput] = useState("");
  const handleInput = (codeInput) => {
    setCodeInput(codeInput);
  };
  console.log(codeInput);

  const code_validation = () => {
    if (codeInput) {
      return true;
    } else {
      return false;
    }
  };

  const validation = Yup.object().shape({
    phone: Yup.string().test(code_validation),
  });

  const initialValues = {
    farmStarting: "",
    phone: "",
    userName: "",
  };

  return (
    <Box sx={{ width: { xs: "90%", sm: "65%" } }}>
      <Grid>
        <Typography component="p" variant="p" className="top-text-login">
          کد ارسالی به شماره
          <span style={{ color: "#676767", fontWeight: "800" }}>
            {" "}
            09363092788{" "}
          </span>
          را وارد کنید
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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    direction: "ltr",
                    whiteSpace: "nowrap",
                  }}
                >
                  {/* <OTPInput
                    value={codeInput}
                    onChange={handleInput}
                    autoFocus
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    // secure
                  />
                  <ResendOTP
                    onResendClick={() => console.log("Resend clicked")}
                  /> */}

                  <ReactCodeInput
                    value={codeInput}
                    type="number"
                    fields={6}
                    {...myStyle}
                    className="reactCodeInput"
                    placeholder="-"
                    onChange={handleInput}
                    // onChange={console.log}
                  />
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="authSubmitBtn"
                >
                  تایید و ادامه
                </Button>

                <Typography
                  // variant="body2"
                  align="center"
                  className="resend-code-text"
                >
                  {"کد ارسال نشد؟ "}
                  <span
                    className="green-linked-text"
                    // onClick={() => handleInput()}
                  >
                    ارسال مجدد کد
                  </span>
                </Typography>
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
    </Box>
  );
};

export default Login;
