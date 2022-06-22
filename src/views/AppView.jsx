import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import AppLayout from "../layouts/appLayout";


const Main = React.lazy(() =>
    import(/* webpackChunkName: "views-user" */ './../pages/main/main')
);

const ActivitiesPage = React.lazy(() =>
    import(/* webpackChunkName: "views-user" */ './../pages/activities/activitiesListPage')
);

const AppView = () => {
    return (
        <AppLayout>
            <Routes>

                <Route path="/" element={<Navigate replace to="home"/>}/>
                <Route path="home" element={<Main/>}/>
                <Route path="activities" element={<ActivitiesPage/>}/>

            </Routes>
        </AppLayout>
    );
};

export default AppView;
