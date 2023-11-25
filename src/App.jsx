import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routes/Router";
import LayoutComponent from "./layout/LayoutComponent";
import { useEffect, useState } from "react";
import useAutoLogin from "./hooks/useAutoLogin";
import { CircularProgress, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "./store/dataSlice";
import homePageNormalization from "./pages/home/homePageNormalization";
import { toast } from "react-toastify";
import axios from "axios";

const App = () => {
  const [doneAuth, setDoneAuth] = useState(false);
  const [dataReady, setDataReady] = useState(false);
  const userData = useSelector((store) => store.authSlice.userData);
  const dispatch = useDispatch();
  const autoLogin = useAutoLogin();

  useEffect(() => {
    (async () => {
      try {
        await autoLogin();
      } catch (error) {
        console.log(
          "This error occurred while attempting to run autoLogin hook in App.jsx: ",
          error
        );
      } finally {
        setDoneAuth(true);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("/cards");
        dispatch(dataActions.clearAll());
        if (userData) {
          data = await homePageNormalization(data, userData._id);
          dispatch(dataActions.setData(data));
          for (let card of data) {
            if (card.likes) {
              dispatch(dataActions.addFavorites(card));
            }
            if (card.user_id === userData._id) {
              dispatch(dataActions.addMyCards(card));
            }
          }
        } else {
          dispatch(dataActions.setData(data));
        }
        setDataReady(true);
      } catch (error) {
        console.log(
          "This error occurred while attempting an axios request in App.jsx: ",
          error
        );
        toast.error(
          `Something went wrong while retrieving cards.. 🤔 because: ${error.response.data}`
        );
      }
    })();
  }, [doneAuth, userData]);
  return (
    <LayoutComponent>
      {doneAuth && dataReady ? (
        <Router basename="/react" />
      ) : (
        <Box textAlign="center">
          <CircularProgress color="info" sx={{ mt: 20 }} size={90} />
        </Box>
      )}
    </LayoutComponent>
  );
};
export default App;
