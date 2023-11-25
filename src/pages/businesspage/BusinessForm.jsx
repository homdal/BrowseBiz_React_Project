import { Typography, Box, TextField } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { validateForm } from "../../validation/businessForm";
import Buttons from "../../components/Buttons";

const BusinessForm = ({ businessEmail, businessPhone }) => {
  const [inputValue, changeValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorsState, setErrorsState] = useState(false);
  const [disabledButton, setdisabledButton] = useState(true);

  const handleInputChange = (e) => {
    changeValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleCheckFields = (e) => {
    e.preventDefault();
    setdisabledButton(true);
    const JoiResponse = validateForm({
      name: inputValue.name,
      email: inputValue.email,
      message: inputValue.message,
    });
    setErrorsState(JoiResponse);
    if (JoiResponse) return;
    setdisabledButton(false);
  };
  const handleSendRequest = (e) => {
    e.preventDefault();
    toast.success("Sent! ✉");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      component={"form"}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "300px" },
        width: "500px",
        mt: 3,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        Contact us!
      </Typography>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        {businessEmail} / {businessPhone}
      </Typography>

      <TextField
        color="secondary"
        required
        error={errorsState.name ? true : false}
        helperText={errorsState.name ? errorsState.name : null}
        id="name"
        label="Full Name"
        value={inputValue.name}
        onChange={handleInputChange}
      />
      <TextField
        color="secondary"
        required
        error={errorsState.email ? true : false}
        helperText={errorsState.email ? errorsState.email : null}
        id="email"
        label="Your Email"
        value={inputValue.email}
        onChange={handleInputChange}
      />
      <TextField
        color="secondary"
        required
        error={errorsState.message ? true : false}
        helperText={errorsState.message ? errorsState.message : null}
        id="message"
        multiline
        rows={4}
        label="Message"
        value={inputValue.message}
        onChange={handleInputChange}
      />
      <Buttons
        onCheck={handleCheckFields}
        onSend={handleSendRequest}
        disabledButton={disabledButton}
      />
    </Box>
  );
};
export default BusinessForm;
