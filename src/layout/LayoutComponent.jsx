import MainComponent from "./main/MainComponent";
import HeaderCompo from "./header/HeaderComponent";
import FooterCompo from "./footer/FooterComponent";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { MainTheme } from "../theme/Theme";
import { ToastContainer } from "react-toastify";
import { themeActions } from "../store/themeSlice";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const LayoutComponent = ({ children }) => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.themeReducer.isDarkTheme);
  const userData = useSelector((store) => store.authSlice.userData);
  const darkTheme = createTheme(MainTheme("dark"));
  const lightTheme = createTheme(MainTheme("light"));

  const handleThemeChange = (checked) => {
    if (checked) {
      dispatch(themeActions.darkTheme(userData?._id));
    } else {
      dispatch(themeActions.lightTheme(userData?._id));
    }
  };

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Fragment>
        <HeaderCompo isDarkTheme={theme} onThemeChange={handleThemeChange} />
        <MainComponent>{children}</MainComponent>
        <FooterCompo />
      </Fragment>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme={theme ? "dark" : "light"}
      />
    </ThemeProvider>
  );
};
export default LayoutComponent;
