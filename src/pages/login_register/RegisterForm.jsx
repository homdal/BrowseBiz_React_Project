import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  personalDetails,
  profilePicture,
  address,
} from "./ui/registerFormTemp";
import axios from "axios";
import { registerValidation } from "../../validation/registerValidation";
import { toast } from "react-toastify";
import Buttons from "../../components/Buttons";

const RegisterForm = ({ changeForm }) => {
  const [inputsValue, setInputsValue] = useState({
    first: "",
    middle: "",
    last: "",
    email: "",
    password: "",
    phone: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  });
  const registerSuccess = () => {
    changeForm();
  };
  const [isItBusiness, setIsItBusiness] = useState(false);
  const [errorsState, setErrorsState] = useState(false);
  const [disabledButton, setdisabledButton] = useState(true);
  const handleInputsChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleCheckBusiness = (e) => {
    setIsItBusiness(e.target.checked);
  };
  const handleCheckFields = (e) => {
    e.preventDefault();
    setdisabledButton(true);
    const JoiResponse = registerValidation({
      ...inputsValue,
    });
    setErrorsState(JoiResponse);
    if (JoiResponse) return;
    setdisabledButton(false);
  };
  const handleSendRequest = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/users", {
        name: {
          first: inputsValue.first,
          middle: inputsValue.middle,
          last: inputsValue.last,
        },
        phone: inputsValue.phone,
        email: inputsValue.email,
        password: inputsValue.password,
        image: { url: inputsValue.url, alt: inputsValue.alt },
        address: {
          state: inputsValue.state,
          country: inputsValue.country,
          city: inputsValue.city,
          street: inputsValue.street,
          houseNumber: inputsValue.houseNumber,
          zip: inputsValue.zip,
        },
        isBusiness: isItBusiness,
      });
      toast("You have successfully registered! Be sure to login. ✨");
      registerSuccess();
    } catch (error) {
      console.log(
        "This error occurred in the handleRegister function in RegisterForm.jsx: ",
        error
      );
      toast.error("Failed to register.. 🤔 because: ", error.response.data);
    }
  };
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Typography>Personal Details:</Typography>
          <Grid container spacing={2} mt={1} mb={1}>
            {personalDetails.map((field) => (
              <Grid item xs={12} sm={6} md={6} lg={6} key={field.id}>
                <TextField
                  error={errorsState[field.id] ? true : false}
                  helperText={
                    errorsState[field.id] ? errorsState[field.id] : null
                  }
                  color="secondary"
                  required={field.required}
                  fullWidth
                  id={field.id}
                  label={field.label}
                  value={inputsValue[field.id]}
                  onChange={handleInputsChange}
                />
              </Grid>
            ))}
          </Grid>
          <Typography>Profile Picture:</Typography>
          <Grid container spacing={2} mt={1} mb={1}>
            {profilePicture.map((field) => (
              <Grid item xs={12} sm={6} md={6} lg={6} key={field.id}>
                <TextField
                  error={errorsState[field.id] ? true : false}
                  helperText={
                    errorsState[field.id] ? errorsState[field.id] : null
                  }
                  color="secondary"
                  required={field.required}
                  fullWidth
                  id={field.id}
                  label={field.label}
                  value={inputsValue[field.id]}
                  onChange={handleInputsChange}
                />
              </Grid>
            ))}
          </Grid>
          <Typography>Address:</Typography>
          <Grid container spacing={2} mt={1} mb={1}>
            {address.map((field) => (
              <Grid item xs={12} sm={6} md={6} lg={6} key={field.id}>
                <TextField
                  error={errorsState[field.id] ? true : false}
                  helperText={
                    errorsState[field.id] ? errorsState[field.id] : null
                  }
                  color="secondary"
                  required={field.required}
                  fullWidth
                  id={field.id}
                  label={field.label}
                  value={inputsValue[field.id]}
                  onChange={handleInputsChange}
                />
              </Grid>
            ))}
            <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
              <FormControlLabel
                control={
                  <Checkbox color="secondary" onChange={handleCheckBusiness} />
                }
                label={
                  <Typography sx={{ fontSize: "18px" }}>
                    Is this a business account?
                  </Typography>
                }
              />
            </Grid>
            <Buttons
              onCheck={handleCheckFields}
              onSend={handleSendRequest}
              disabledButton={disabledButton}
            />
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterForm;
