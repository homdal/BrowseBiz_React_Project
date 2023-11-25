import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    borderRadius: "20px",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "0px",
      "&:focus": {
        backgroundColor: "rgba(225,225,225,0.1)",
        width: "200px",
      },
    },
  },
}));

export default StyledInputBase;
