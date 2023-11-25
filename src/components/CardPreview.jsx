import { Box, Grid, Typography } from "@mui/material";
import CardCompo from "./CardCompo";
import Paper from "@mui/material/Paper";

const CardPreview = ({ title, subtitle, description, url, alt, isPreview }) => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
      lg={4}
      component={Paper}
      display="flex"
      justifyContent="center"
      sx={{
        borderRadius: {
          lg: "0 20px 20px 0",
          md: "0 20px 20px 0",
          sm: "20px",
          xs: "20px",
        },
        boxShadow:
          "10px 0px 6px -3px rgba(0,0,0,0.2),0px -1px 6px -3px rgba(0,0,0,0.2),0px 10px 6px -3px rgba(0,0,0,0.2)",
        borderTop: 1,
        borderRight: 1,
        borderBottom: 1,
        borderLeft: { xs: "1px solid border.b2", sm: 0, md: 0, lg: 0 },
        borderColor: "border.b2",
        paddingBottom: "10px",
        mt: "20px",
        pt: 2,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{ height: "500px" }}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Preview:
        </Typography>
        <CardCompo
          _id=""
          title={title}
          subtitle={subtitle}
          description={description}
          url={url}
          alt={alt}
          isPreview={isPreview}
        />
      </Box>
    </Grid>
  );
};
export default CardPreview;
