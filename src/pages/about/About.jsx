import { Box, Button, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container
      sx={{
        pt: { lg: 20, md: 20, sm: 20, xs: 10 },
        pb: 10,
        height: { lg: "100vh", md: "100vh", sm: "100vh", xs: "unset" },
        border: 1,
        borderColor: "border.b2",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            textDecoration: "underline",
            textAlign: "center",
          }}
        >
          Welcome To
          <Typography
            variant="h3"
            component="span"
            sx={{ fontWeight: 600, fontFamily: "Playfair Display" }}
          >
            {" "}
            BrowseBiz
          </Typography>
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "20px", textAlign: "center", width: "80%" }}
        >
          On our home page you can view business cards from various businesses
          and visit their designated page by clicking on their title, using the
          search bar at the top right will allow you to filter through them
          based on their title.
          <br />
          <br />
          You can register and login to start liking cards and adding them to
          your favorites page, You can also register as a business to start
          creating, editing and deleting your very own cards.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
