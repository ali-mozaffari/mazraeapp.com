import { Grid, TextField, Typography, Link, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import "./auth.css";
import ReactCodeInput from "react-code-input";

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
    // paddingRight: "15px",
    // paddingLeft: "18px",
    fontSize: "20px",
    fontWeight: "800",
    marginBottom: "20px",
    justifyContent: "space-between",
    textAlign: "center",
  },
  inputStyleInvalid: {
    // paddingLeft: '7px',
    // backgroundColor: 'black',
    // color: 'red',
    // border: '1px solid red'
  },
};

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Grid style={{ width: "65%", height: "55vh" }}>
      <Typography component="p" variant="p" className="top-text-login">
        کد ارسالی به شماره
        <span style={{ color: "#6ca271", fontWeight: "800" }}>
          {" "}
          09363092788{" "}
        </span>
        را وارد کنید
      </Typography>

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
          <ReactCodeInput
            type="number"
            fields={6}
            placeholder="-"
            {...myStyle}
            className="reactCodeInput"
          />
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="authSubmitBtn"
        >
          ارسال مجدد کد
        </Button>
      </Box>
    </Grid>
  );
};

export default Login;
