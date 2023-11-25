import { Container, Typography, Box, Divider, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BusinessForm from "./BusinessForm";

const BusinessPage = () => {
  const idObject = useParams();
  const [thisBusiness, setThisBusiness] = useState({});
  const [dataRetrieved, setDataRetrieved] = useState(false);

  useEffect(() => {
    axios
      .get(`/cards/${idObject.id}`)
      .then(({ data }) => {
        setThisBusiness(data);
        setDataRetrieved(true);
      })
      .catch((error) => {
        console.log(
          "This error occurred while trying to retrieve data from api in BusinessPage.jsx: ",
          error
        );
      });
  }, []);

  return (
    <Container
      sx={{
        pt: 6,
        pb: 10,
        backgroundColor: "background.paper2",
        border: 1,
        borderColor: "border.b2",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {dataRetrieved ? (
        <Box>
          <Box
            sx={{
              backgroundImage: `url(${thisBusiness.image.url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "30vh",
              width: "100%",
              opacity: 0.7,
              borderRadius: "0 0 20px 20px",
              boxShadow: " inset 1px 1px 0px 10px rgba(0,0,0,0.2)",
            }}
          ></Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
              p: 2,
              borderRadius: "20px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                textShadow: "4px 4px 3px rgba(0,0,0,0.42)",
              }}
            >
              {thisBusiness.title}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontWeight: "medium",
                textShadow: "4px 4px 3px rgba(0,0,0,0.42)",
              }}
            >
              {thisBusiness.subtitle}
            </Typography>
          </Box>
          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={8}>
              {" "}
              <Box sx={{ mt: 2 }}>
                <Divider />
                <Typography
                  variant="h4"
                  sx={{ mt: 1, mb: 10, fontWeight: 700, textAlign: "center" }}
                >
                  {thisBusiness.description}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ mt: 1, mb: 1, textAlign: "center" }}
                >
                  You can come visit us at
                  <Typography
                    component={"span"}
                    sx={{ fontSize: "24px", fontWeight: 700 }}
                  >
                    {" "}
                    {thisBusiness.address.country}, {thisBusiness.address.city},{" "}
                    {thisBusiness.address.street},{" "}
                    {thisBusiness.address.houseNumber}
                    {thisBusiness.address.zip
                      ? `, ${thisBusiness.address.zip} `
                      : ""}
                    {thisBusiness.address.state
                      ? `${thisBusiness.address.state} `
                      : ""}{" "}
                  </Typography>
                  {thisBusiness.web ? (
                    <Typography sx={{ fontSize: "24px" }}>
                      or if you prefer at{" "}
                      <Typography
                        component={"span"}
                        sx={{ fontSize: "24px", fontWeight: 700 }}
                      >
                        {thisBusiness.web}
                      </Typography>
                    </Typography>
                  ) : (
                    ""
                  )}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Box
                display="flex"
                justifyContent="center"
                sx={{ width: "100%" }}
              >
                <BusinessForm
                  businessEmail={thisBusiness.email}
                  businessPhone={thisBusiness.phone}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        ""
      )}
    </Container>
  );
};
export default BusinessPage;
