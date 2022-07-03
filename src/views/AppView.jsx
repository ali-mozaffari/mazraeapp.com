import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "../layouts/appLayout";
import AuthLayout from "../layouts/authLayout";


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
  import(
    /* webpackChunkName: "views-user" */ "../pages/main/addFarmPage"
  )
);

// const AddCultivation = React.lazy(() => import("./../components/farm/Cultivation/AddCultivation/AddCultivation"))

const AppView = () => {
  const location = useLocation();

  if (location.pathname === "/sendcode" || location.pathname === "/login") {
    return (
      <AuthLayout>
        <Routes>
          <Route path="/sendcode" element={<SendCode />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthLayout>
    );
  }else if (location.pathname === '/add-farm'){
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
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/farm-services" element={<FarmServicePage />} />
        <Route path="/invitation" element={<InvitationPage />} />
        {/*<Route path={'/add-cultivation/:guid/:name'} component={AddCultivation}/>*/}
      </Routes>
    </AppLayout>
  );
};

export default AppView;
