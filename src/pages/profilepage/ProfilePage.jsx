import { Avatar, Grid, Typography, Divider, Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const ProfilePage = () => {
  const userDetails = useSelector((store) => store.authSlice.userDetails);
  const joinDate = new Date(userDetails.createdAt).toLocaleString();
  return (
    <Container
      sx={{
        border: 1,
        borderColor: "border.b2",
        pt: 20,
        pb: 20,
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          component={Paper}
          sx={{
            borderRadius: {
              lg: "40px 0 0 40px",
              md: "40px 0 0 40px",
              sm: "40px 0 0 40px",
              xs: "40px 40px 0 0",
            },
            pt: 3,
            height: { lg: "600px", md: "600px", sm: "600px", xs: "400px" },
            border: 1,
            borderColor: "border.b2",
          }}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            sx={{
              mb: 3,
              height: "200px",
              width: "200px",
              border: "5px solid rgba(225,225,225,0.5)",
              boxShadow: "0px 5px 3px rgba(0,0,0,0.3) ",
            }}
            alt={userDetails.name.first}
            src={userDetails.image.url}
          />
          {userDetails.name.middle ? (
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              {userDetails.name.first}
              {userDetails.name.middle} {userDetails.name.last}
            </Typography>
          ) : (
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
              }}
            >
              {userDetails.name.first} {userDetails.name.last}
            </Typography>
          )}
          <Typography>Joined on: {joinDate}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={8}
          component={Paper}
          sx={{
            borderRadius: {
              lg: "0 40px 40px 0",
              md: "0 40px 40px 0",
              sm: "0 40px 40px 0",
              xs: "0 0 40px 40px",
            },
            p: "30px 0 0 30px",
            height: { lg: "600px", md: "600px", sm: "600px", xs: "400px" },
            border: 1,
            borderColor: "border.b2",
          }}
        >
          <Typography variant="h4" sx={{ mb: 3 }}>
            User Details:
          </Typography>
          <Divider />
          <Typography>
            <Typography
              component="span"
              sx={{
                lineHeight: 2,
                fontWeight: 600,
              }}
            >
              Email:
            </Typography>{" "}
            {userDetails.email}
          </Typography>
          <Divider />
          <Typography>
            <Typography
              component="span"
              sx={{
                lineHeight: 2,
                fontWeight: 600,
              }}
            >
              Phone:
            </Typography>{" "}
            {userDetails.phone}
          </Typography>
          <Divider />
          <Typography>
            <Typography
              component="span"
              sx={{
                lineHeight: 2,
                fontWeight: 600,
              }}
            >
              {" "}
              Adress:
            </Typography>{" "}
            {userDetails.address.state ? userDetails.address.state : ""},
            {userDetails.address.country} {userDetails.address.city},{" "}
            {userDetails.address.street}, {userDetails.address.houseNumber},
            {userDetails.address.zip ? userDetails.address.zip : ""}
          </Typography>

          <Divider />
          <br />
          <Divider />
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            Business:
            {userDetails.isBusiness ? (
              <CheckCircleIcon sx={{ color: "checkCircle.check" }} />
            ) : (
              <CancelIcon sx={{ color: "checkCircle.cancel" }} />
            )}
          </Typography>
          <Divider />
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            Admin:
            {userDetails.isAdmin ? (
              <CheckCircleIcon sx={{ color: "checkCircle.check" }} />
            ) : (
              <CancelIcon sx={{ color: "checkCircle.cancel" }} />
            )}
          </Typography>
          <Divider />
          <br />
          <Divider />
        </Grid>
      </Grid>
    </Container>
  );
};
export default ProfilePage;
