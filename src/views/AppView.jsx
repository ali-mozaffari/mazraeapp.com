import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "../layouts/appLayout";
import Auth from "../pages/auth/auth";

const Main = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "./../pages/main/main")
);

const ActivitiesPage = React.lazy(() =>
  import(
    /* webpackChunkName: "views-user" */ "../pages/activities/activitiesPage"
  )
);

const AppView = () => {
  const location = useLocation();
  console.log(location)
  if (location.path === "/sendcode") {
    return(
    <Routes>
      <Route path="sendcode" element={<Auth />} />
    </Routes>
    );
  }

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="home" element={<Main />} />
        <Route path="activities" element={<ActivitiesPage />} />
      </Routes>
    </AppLayout>
  );

};

export default AppView;
