import { Box } from "@mui/material";
import nextKey from "generate-my-key";
import {
  loggedOffLinks,
  loggedInLinks,
  businessLinks,
} from "../../MyBottomLinks";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const BottomLinks = () => {
  const loggedIn = useSelector((store) => store.authSlice.loggedIn);
  const userData = useSelector((store) => store.authSlice.userData);

  return (
    <Box sx={{ display: { md: "flex" } }}>
      {loggedIn
        ? loggedInLinks.map((myItem) => (
            <NavLink key={nextKey()} to={myItem.to}>
              {({ isActive }) => (
                <BottomNavigationAction
                  sx={{
                    "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
                      color: isActive ? "info.main" : "text.bottomLinks",
                    },
                  }}
                  label={myItem.children}
                  value={myItem.children}
                  icon={myItem.icon}
                />
              )}
            </NavLink>
          ))
        : loggedOffLinks.map((myItem) => (
            <NavLink key={nextKey()} to={myItem.to}>
              {({ isActive }) => (
                <BottomNavigationAction
                  sx={{
                    "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
                      color: isActive ? "info.main" : "text.bottomLinks",
                    },
                  }}
                  label={myItem.children}
                  value={myItem.children}
                  icon={myItem.icon}
                />
              )}
            </NavLink>
          ))}

      {userData?.isBusiness &&
        businessLinks.map((myItem) => (
          <NavLink key={nextKey()} to={myItem.to}>
            {({ isActive }) => (
              <BottomNavigationAction
                sx={{
                  "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
                    color: isActive ? "info.main" : "text.bottomLinks",
                  },
                }}
                label={myItem.children}
                value={myItem.children}
                icon={myItem.icon}
              />
            )}
          </NavLink>
        ))}
    </Box>
  );
};

export default BottomLinks;
