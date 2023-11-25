import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { themeActions } from "../store/themeSlice";
import { dataActions } from "../store/dataSlice";

const useAutoLogin = () => {
  const dispatch = useDispatch();

  return async () => {
    try {
      let token = localStorage.getItem("token");
      if (!token) {
        token = sessionStorage.getItem("token");
      }
      if (!token) {
        return;
      }
      const dataFromToken = jwtDecode(token);
      const { data } = await axios.get(`/users/${dataFromToken._id}`);
      dispatch(authActions.saveUserDetails(data));
      dispatch(authActions.login(dataFromToken));
      dispatch(dataActions.clearAll());
      const themeString = localStorage.getItem("themePref");
      const themeObject = JSON.parse(themeString);
      if (themeObject) {
        if (themeObject.user === dataFromToken._id) {
          !!themeObject.pref
            ? dispatch(themeActions.darkTheme())
            : dispatch(themeActions.lightTheme());
        }
      }
    } catch (err) {
      console.log("error in auto login", err);
      localStorage.clear();
    }
  };
};

export default useAutoLogin;
