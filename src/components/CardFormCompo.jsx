import { Box, Grid, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { validateCreation } from "../validation/createCardValidation";
import { businessDetails, cardDetails } from "./cardFormTemp";
import CardPreview from "./CardPreview";
import Paper from "@mui/material/Paper";
import Buttons from "./Buttons";

const CardFormCompo = ({ submit, initialValue, formTitle }) => {
  const [errorsState, setErrorsState] = useState(false);
  const [disabledButton, setdisabledButton] = useState(true);
  const [inputValue, changeValue] = useState(
    initialValue
      ? {
          ...initialValue,
          ...initialValue.image,
          ...initialValue.address,
        }
      : {
          title: initialValue,
          subtitle: initialValue,
          description: initialValue,
          phone: initialValue,
          email: initialValue,
          web: initialValue,
          url: initialValue,
          alt: initialValue,
          state: initialValue,
          country: initialValue,
          city: initialValue,
          street: initialValue,
          houseNumber: initialValue,
          zip: 0,
        }
  );
  const handleInputChange = (e) => {
    changeValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };
  const handleCheckFields = (e) => {
    setdisabledButton(true);
    const JoiResponse = validateCreation({
      ...inputValue,
    });
    setErrorsState(JoiResponse);
    if (JoiResponse) return;
    setdisabledButton(false);
  };
  const handleSendRequest = (e) => {
    submit(e, inputValue);
  };
  return (
    <Box display="flex" justifyContent="center">
      <Grid
        container
        display="flex"
        justifyContent="center"
        sx={{
          p: { xs: 0, sm: 7, md: 7, lg: 7 },
          pt: { xs: 7 },
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={8}
          component={Paper}
          sx={{
            borderRadius: {
              lg: "20px 0 0 20px",
              md: "20px 0 0 20px",
              sm: "20px",
              xs: "20px",
            },
            mt: "20px",
            pt: 2,
            pl: 6,
            "& .MuiTextField-root": { m: "5px" },
            boxShadow:
              "-10px 0px 6px -3px rgba(0,0,0,0.2),0px -1px 6px -3px rgba(0,0,0,0.2),0px 10px 6px -3px rgba(0,0,0,0.2)",
            borderTop: 1,
            borderLeft: 1,
            borderBottom: 1,
            borderRight: { xs: "1px solid border.b2", sm: 0, md: 0, lg: 0 },
            borderColor: "border.b2",
          }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            {formTitle}
          </Typography>
          <Box display="flex" flexDirection="column">
            <Box
              sx={{
                width: { sx: "200px", sm: "500px", md: "500px", lg: "500px" },
                mb: 3,
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                Card Details:
              </Typography>
              <Grid container>
                {cardDetails.map((field) => (
                  <Grid item xs={12} sm={6} md={6} lg={6} key={field.id}>
                    <TextField
                      error={errorsState[field.id] ? true : false}
                      helperText={
                        errorsState[field.id] ? errorsState[field.id] : null
                      }
                      color="secondary"
                      id={field.id}
                      label={field.label}
                      required={field.required}
                      type="text"
                      variant="outlined"
                      size="medium"
                      key={field.id}
                      value={inputValue[field.id]}
                      onChange={handleInputChange}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box
              sx={{
                width: { sx: "200px", sm: "500px", md: "500px", lg: "500px" },
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                Business Details:
              </Typography>
              <Grid container>
                {businessDetails.map((field) => (
                  <Grid item xs={12} sm={6} md={6} lg={6} key={field.id}>
                    <TextField
                      error={errorsState[field.id] ? true : false}
                      helperText={
                        errorsState[field.id] ? errorsState[field.id] : null
                      }
                      color="secondary"
                      id={field.id}
                      label={field.label}
                      required={field.required}
                      type="text"
                      variant="outlined"
                      size="medium"
                      key={field.id}
                      value={inputValue[field.id]}
                      onChange={handleInputChange}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
        <CardPreview
          title={inputValue.title}
          subtitle={inputValue.subtitle}
          description={inputValue.description}
          url={inputValue.url}
          alt={inputValue.alt}
          isPreview={true}
        />
        <Buttons
          onCheck={handleCheckFields}
          onSend={handleSendRequest}
          disabledButton={disabledButton}
        />
      </Grid>
    </Box>
  );
};
export default CardFormCompo;
