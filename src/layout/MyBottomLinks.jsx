import ROUTES from "../routes/ROUTES";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CollectionsIcon from "@mui/icons-material/Collections";

const loggedOffLinks = [
  { to: ROUTES.HOME, children: "Home page", icon: <HomeIcon /> },
  { to: ROUTES.ABOUT, children: "About", icon: <InfoIcon /> },
];
const loggedInLinks = [
  { to: ROUTES.HOME, children: "Home page", icon: <HomeIcon /> },
  { to: ROUTES.FAVORITES, children: "Favorites", icon: <FavoriteIcon /> },
];
const businessLinks = [
  { to: ROUTES.MYCARDS, children: "My Cards", icon: <CollectionsIcon /> },
  { to: ROUTES.CREATECARD, children: "Create Card", icon: <AddBoxIcon /> },
];

export { loggedOffLinks, loggedInLinks, businessLinks };
