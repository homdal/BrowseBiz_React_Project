import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomLinks from "./ui/BottomLinks";

const FooterCompo = () => {
  return (
    <BottomNavigation
      showLabels
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "55px",
        width: "100vw",
        p: 1,
        display: "flex",
        alignItems: "center",
        borderTop: 1,
        borderColor: "border.b2",
      }}
    >
      <BottomLinks />
    </BottomNavigation>
  );
};

export default FooterCompo;
