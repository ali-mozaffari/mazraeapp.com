import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Loading from "./components/loading/loading";

const ViewApp = React.lazy(() =>
    import(/* webpackChunkName: "views-user" */ './views/AppView')
);

const App = () => {

    return (
        <div>
            <ViewApp/>
        </div>
    );

}

export default App;
