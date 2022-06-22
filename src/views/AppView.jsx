import React, {Suspense} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import AppLayout from "../layouts/appLayout";


const Main = React.lazy(() =>
    import(/* webpackChunkName: "views-user" */ './../pages/main/main')
);

const AppView = () => {
    return (
        <AppLayout>
            <Routes>

                <Route path="/" element={<Navigate replace to="home"/>}/>
                <Route path="home" element={<Main/>}/>

            </Routes>
        </AppLayout>
    );
};

export default AppView;
