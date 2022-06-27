import React from "react";
import AuthView from "./views/AuthView";


const ViewApp = React.lazy(() =>
    import(/* webpackChunkName: "views-user" */ './views/AppView')
);


const App = () => {
    return (
        <div>
            <ViewApp />
            {/* <AuthView /> */}
        </div>
    );
}

export default App;
