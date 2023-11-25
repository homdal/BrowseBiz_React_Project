import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import ROUTES from "../routes/ROUTES";

const AuthGuard = ({ children }) => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  if (loggedIn) {
    return children;
  } else {
    toast.warning("You must be logged in to access this page!");
    return <Navigate to={ROUTES.LOGIN_REGISTER} replace={true} />;
  }
};
export default AuthGuard;
