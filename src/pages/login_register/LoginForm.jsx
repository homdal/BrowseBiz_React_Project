import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { toast } from "react-toastify";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../../validation/loginValidation";
import ROUTES from "../../routes/ROUTES";
import useAutoLogin from "../../hooks/useAutoLogin";
import Buttons from "../../components/Buttons";

const LoginForm = () => {
  const autoLogin = useAutoLogin();
  const navigate = useNavigate();
  const [remember, setRemember] = useState(false);
  const [disabledButton, setdisabledButton] = useState(true);
  const [inputValue, changeValue] = useState({
    email: "",
    password: "",
  });
  const [errorsState, setErrorsState] = useState(false);

  const handleRememberChange = () => {
    setRemember(!remember);
  };
  const handleInputChange = (e) => {
    changeValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleCheckFields = (e) => {
    e.preventDefault();
    setdisabledButton(true);
    const JoiResponse = validateLogin({
      email: inputValue.email,
      password: inputValue.password,
    });
    setErrorsState(JoiResponse);
    if (JoiResponse) return;
    setdisabledButton(false);
  };
  const handleSendRequest = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/users/login", inputValue);
      remember
        ? localStorage.setItem("token", data)
        : sessionStorage.setItem("token", data);
      autoLogin();
      navigate(ROUTES.HOME);
    } catch (error) {
      console.log(
        "This error occurred during a login attempt in LoginForm.jsx: ",
        error
      );
      toast.error(`Failed Login.. 🤔 because: ${error.response.data}`);
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
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1, width: "90%" }}>
          <Grid container spacing={2} mt={1} mb={1}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                error={errorsState.email ? true : false}
                helperText={errorsState.email ? errorsState.email : null}
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={inputValue.email}
                onChange={handleInputChange}
              />
              <TextField
                error={errorsState.password ? true : false}
                helperText={errorsState.password ? errorsState.password : null}
                color="secondary"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={inputValue.password}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={remember}
                    onChange={handleRememberChange}
                    color="secondary"
                  />
                }
                label="Remember me"
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

export default LoginForm;
