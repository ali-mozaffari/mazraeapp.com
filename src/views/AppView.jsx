import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "../layouts/appLayout";
import AuthLayout from "../layouts/authLayout";
import AccessPage from "../pages/access/accessPage";
import AddAccessPage from "../pages/access/addAccessPage";
import EditAccessPage from "../pages/access/editAccessPage";
import EditActivityPage from "../pages/activities/editActivityPage";
import AddCultivationPage from "../pages/farm/addCultivationPage";
import WeatherPage from "../pages/weather/weatherPage";
import UTMRequestPage from "../pages/farm/utmRequestPage";
import OwnerInfoPage from "../pages/farm/ownerInfoPage";
import EditFarmInfoPage from "../pages/farm/editFarmInfoPage";

const SendCode = React.lazy(() => import("./../pages/auth/sendCode"));
const Login = React.lazy(() => import("./../pages/auth/login"));

const Main = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "./../pages/main/main")
);

const ActivitiesPage = React.lazy(() =>
  import(
    /* webpackChunkName: "views-user" */ "../pages/activities/activitiesPage"
  )
);

const FarmServicePage = React.lazy(() =>
  import(
    /* webpackChunkName: "views-user" */ "../pages/farmService/farmServicesPage"
  )
);

const InvitationPage = React.lazy(() =>
  import(
    /* webpackChunkName: "views-user" */ "../pages/invitaion/invitationsPage"
  )
);

const AddFarmPage = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "../pages/main/addFarmPage")
);

const EditFarmPage = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "../pages/main/editFarmPage")
);

const AddActivity = React.lazy(() =>
  import("../pages/activities/addActivityPage")
);

const PestMainPage = React.lazy(() => import("../pages/pests/pestMainPage"));

const AppView = () => {
  const location = useLocation();
  // const loading = useSelector((state) => state.loading.loading)

  // if (loading){
  //     return (
  //       <Loading/>
  //     );
  // }

  if (location.pathname === "/sendcode" || location.pathname === "/login") {
    return (
      <AuthLayout>
        <Routes>
          <Route path="/sendcode" element={<SendCode />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthLayout>
    );
  } else if (location.pathname === "/add-farm") {
    return (
      <Routes>
        <Route path="add-farm" element={<AddFarmPage />} />
      </Routes>
    );
  }

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="/home" element={<Main />} />
        {/*<Route path="add-farm" element={<AddFarmPage />} />*/}
        <Route path="/add-cultivation" element={<AddCultivationPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/farm-services" element={<FarmServicePage />} />
        <Route path="/invitation" element={<InvitationPage />} />
        <Route path="/edit-farm" element={<EditFarmPage />} />
        <Route path="/add-activity" element={<AddActivity />} />
        <Route path="/edit-activity/:id" element={<EditActivityPage />} />
        <Route path="/access" element={<AccessPage />} />
        <Route path="/add-access" element={<AddAccessPage />} />
        <Route path="/edit-access/:id" element={<EditAccessPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/utm-request" element={<UTMRequestPage />} />
        <Route path="/owner-info" element={<OwnerInfoPage />} />
        <Route path="/edit-farm-info" element={<EditFarmInfoPage />} />

        {/* pests routes ---------------------------------------- */}
        <Route path="/desises" element={<PestMainPage />} />
      </Routes>
    </AppLayout>
  );
};

export default AppView;
