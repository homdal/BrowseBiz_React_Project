import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login_register/LoginPage";
import CreateCard from "../pages/createcard/CreateCard";
import EditCardPage from "../pages/editcard/EditCardPage";
import AuthGuard from "../guard/AuthGuard";
import BizGuard from "../guard/BizGuard";
import ProfilePage from "../pages/profilepage/ProfilePage";
import Favorites from "../pages/favorites/Favorites";
import MyCards from "../pages/mycards/MyCards";
import About from "../pages/about/About";
import BusinessPage from "../pages/businesspage/BusinessPage";
import ErrorPage from "../pages/404/ErrorPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.LOGIN_REGISTER} element={<LoginPage />} />
      <Route path={`${ROUTES.BUSINESS}/:id`} element={<BusinessPage />} />
      <Route
        path={ROUTES.PROFILE}
        element={
          <AuthGuard>
            <ProfilePage />
          </AuthGuard>
        }
      />
      <Route
        path={ROUTES.FAVORITES}
        element={
          <AuthGuard>
            <Favorites />
          </AuthGuard>
        }
      />
      <Route
        path={ROUTES.MYCARDS}
        element={
          <AuthGuard>
            <BizGuard>
              <MyCards />
            </BizGuard>
          </AuthGuard>
        }
      />
      <Route
        path={ROUTES.CREATECARD}
        element={
          <AuthGuard>
            <BizGuard>
              <CreateCard />
            </BizGuard>
          </AuthGuard>
        }
      />
      <Route
        path={`${ROUTES.EDITCARD}/:id`}
        element={
          <AuthGuard>
            <BizGuard>
              <EditCardPage />
            </BizGuard>
          </AuthGuard>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default Router;
