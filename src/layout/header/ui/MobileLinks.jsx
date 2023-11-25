import { Box, Drawer, Toolbar, Divider, IconButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Links from "./Links";

const MoblieLinksDrawer = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleToggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const MoblieLinks = (
    <Box sx={{ height: "100%", backgroundColor: "sideNav.secondary" }}>
      <Toolbar sx={{ backgroundColor: "sideNav.primary" }} />
      <Divider />
      <Links />
    </Box>
  );
  return (
    <Box>
      <IconButton
        onClick={handleToggleMenu}
        sx={{
          mr: "10px",
          display: { xs: "block", sm: "block", md: "none" },
        }}
      >
        <MenuIcon />
      </IconButton>
      <Box>
        <Drawer open={mobileMenu} onClose={handleToggleMenu}>
          {MoblieLinks}
        </Drawer>
      </Box>
    </Box>
  );
};

export default MoblieLinksDrawer;
