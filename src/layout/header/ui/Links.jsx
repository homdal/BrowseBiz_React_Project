import { Box } from "@mui/material";
import nextKey from "generate-my-key";
import { alwaysLinks, loggedInLinks, businessLinks } from "../../myLinks";
import NavLinkComponent from "../NavLinkCompo";
import { useSelector } from "react-redux";

const Links = () => {
  const loggedIn = useSelector((store) => store.authSlice.loggedIn);
  const userData = useSelector((store) => store.authSlice.userData);
  return (
    <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
      {alwaysLinks.map((myItem) => (
        <NavLinkComponent to={myItem.to} key={nextKey()}>
          {myItem.children}
        </NavLinkComponent>
      ))}
      {loggedIn &&
        loggedInLinks.map((myItem) => (
          <NavLinkComponent to={myItem.to} key={nextKey()}>
            {myItem.children}
          </NavLinkComponent>
        ))}
      {userData?.isBusiness &&
        businessLinks.map((myItem) => (
          <NavLinkComponent to={myItem.to} key={nextKey()}>
            {myItem.children}
          </NavLinkComponent>
        ))}
    </Box>
  );
};

export default Links;
