import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { formActions } from "../../store/formSlice";
import { useSelector, useDispatch } from "react-redux";

const LoginPage = () => {
  const isRegister = useSelector((store) => store.formSlice.isRegister);
  const dispatch = useDispatch();
  const handleChangeForm = () => {
    isRegister
      ? dispatch(formActions.changeToLogin())
      : dispatch(formActions.changeToRegister());
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ height: "100vh", width: "100vw" }}
    >
      <Grid
        container
        component="main"
        sx={{
          height: "100%",
          width: { lg: "70%", md: "70%", sm: "70%", xs: "100%" },
        }}
      >
        <Grid
          item
          xs={false}
          sm={false}
          md={6}
          lg={7}
          component={Paper}
          elevation={4}
          display={{ xs: "none", sm: "none", md: "flex", lg: "flex" }}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
              height: "60%",
              width: "80%",
              border: 1,
              borderColor: "border.b2",
              borderRadius: "800px",
              backgroundImage:
                "url(https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18106.jpg?w=1380&t=st=1700220799~exp=1700221399~hmac=2477f7df08c244848b278338bcb3744bbb9d904f053e9e23870987aa49795fab)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={5}
          component={Paper}
          elevation={6}
          square
          sx={{ pt: 10, pb: { xs: 10 }, pr: { xs: 0 }, pl: { xs: 0 } }}
        >
          {isRegister ? (
            <RegisterForm changeForm={handleChangeForm} />
          ) : (
            <LoginForm />
          )}
          <Box sx={{ textAlign: "center", pr: { xs: 2 }, pl: { xs: 2 } }}>
            <Link
              color="primary.contrastText"
              href="#"
              variant="body1"
              onClick={handleChangeForm}
              sx={{ fontSize: "18px", textAlign: "center" }}
            >
              {isRegister
                ? "Already have an account? Click to Login"
                : "Don't have an account? Click to Register"}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
