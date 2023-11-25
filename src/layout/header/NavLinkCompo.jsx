import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      style={{
        textDecoration: "none",
      }}
    >
      {({ isActive }) => (
        <Typography
          color={isActive ? "info.main" : "primary.contrastText"}
          display="flex"
          alignItems="center"
          sx={{
            p: 2,
            fontSize: "18px",
            height: "40px",
            margin: "5px",
            borderRadius: "5px",
          }}
        >
          {children}
        </Typography>
      )}
    </NavLink>
  );
};

export default NavLinkComponent;
