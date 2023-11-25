import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import StyledInputBase from "./ui/StyledInputBase";
import SearchIconWrapper from "./ui/SearchIconWrapper";
import Search from "./ui/Search";
import { searchActions } from "../../store/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import Links from "./ui/Links";
import ROUTES from "../../routes/ROUTES";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import { authActions } from "../../store/authSlice";
import { formActions } from "../../store/formSlice";
import MaterialUISwitch from "./ui/MaterialUISwitch";
import MoblieLinksDrawer from "./ui/MobileLinks";

const HeaderCompo = ({ onThemeChange }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector((store) => store.themeReducer.isDarkTheme);
  const login = useSelector((store) => store.authSlice.loggedIn);
  const userDetails = useSelector((store) => store.authSlice.userDetails);
  const isRegister = useSelector((store) => store.formSlice.isRegister);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const location = useLocation();

  const handleGoToProfile = () => {
    handleCloseUserMenu();
    navigate(ROUTES.PROFILE);
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
    handleCloseUserMenu();
    navigate(ROUTES.HOME);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (e) => {
    dispatch(searchActions.changeSearch(e.target.value));
  };
  const handleSignInClick = () => {
    if (location.pathname === "/login_register") {
      isRegister
        ? dispatch(formActions.changeToLogin())
        : dispatch(formActions.changeToRegister());
    } else {
      dispatch(formActions.changeToLogin());
    }
    navigate(ROUTES.LOGIN_REGISTER);
  };

  const handleThemeChange = (event) => {
    onThemeChange(event.target.checked);
  };

  return (
    <Box>
      <AppBar
        enableColorOnDark
        color="primary"
        sx={{
          borderBottom: 1,
          borderColor: "border.b2",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <MoblieLinksDrawer />
          <Typography
            variant="h5"
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              fontSize: "30px",
              fontWeight: "800",
              fontFamily: "Playfair Display",
              mr: 2,
            }}
          >
            BrowseBiz
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
              flexGrow: 0.4,
            }}
          >
            <Links />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="end"
            flexGrow="1"
          >
            {location.pathname === "/" && (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase onChange={handleSearchChange} />
              </Search>
            )}
            <Box display="flex" alignItems="center">
              <MaterialUISwitch checked={theme} onChange={handleThemeChange} />
            </Box>
            {login ? (
              <Box>
                <IconButton
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleOpenUserMenu}
                >
                  <Avatar
                    alt={userDetails.name.first}
                    src={userDetails.image.url}
                    sx={{
                      border: 2,
                      borderColor: "primary.contrastText",
                    }}
                  />
                </IconButton>
                <Menu
                  id="user_menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleCloseUserMenu}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={handleGoToProfile}>
                    <ListItemIcon>
                      <AccountCircleIcon fontSize="small" />
                    </ListItemIcon>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Button
                variant="outlined"
                color="inherit"
                sx={{ fontWeight: "800", fontSize: "10px" }}
                onClick={handleSignInClick}
              >
                {location.pathname === "/login_register"
                  ? isRegister
                    ? "Login"
                    : "Register"
                  : "Login / Register"}
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderCompo;
