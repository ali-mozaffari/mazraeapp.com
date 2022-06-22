import React, {Suspense} from "react";
import Main from "./pages/main/main";
import AppLayout from "./layouts/appLayout";
import {Redirect, Route, Routes, useNavigate} from "react-router-dom";
import {Router} from "react-router-dom";
// const ViewAuthorization = React.lazy(() =>
//     import(/* webpackChunkName: "views-user" */ './views/AuthView')
// );

const ViewApp = React.lazy(() =>
    import(/* webpackChunkName: "views-user" */ './views/AppView')
);



const App = () => {

    const history = useNavigate();

    return (
        <div>
            <Main />

            <Suspense fallback={<div className="loading"/>}>

                <Router history={history}>

                    <Routes>

                        <Route path={['/app']}>
                            <AppLayout>
                                <Routes>

                                    <Route path={`/app`}
                                           render={(props) => <ViewApp {...props}/>}/>

                                </Routes>
                            </AppLayout>
                        </Route>


                    </Routes>
                </Router>

            </Suspense>

        </div>
     );
}

export default App;
