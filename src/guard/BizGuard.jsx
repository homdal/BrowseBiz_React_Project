import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import ROUTES from "../routes/ROUTES";

const BizGuard = ({ children }) => {
  const userData = useSelector((bigPie) => bigPie.authSlice.userData);
  if (userData?.isBusiness || userData?.isAdmin) {
    return children;
  } else if (userData) {
    toast.warning("You must be a business account to view this page!");
  } else {
    return <Navigate to={ROUTES.LOGIN_REGISTER} replace={true} />;
  }
};
export default BizGuard;
