import React, {Suspense} from "react";
import Main from "./pages/main/main";
import AppLayout from "./layouts/appLayout";

// const ViewAuthorization = React.lazy(() =>
//     import(/* webpackChunkName: "views-user" */ './views/AuthView')
// );

const ViewApp = React.lazy(() =>
    import(/* webpackChunkName: "views-user" */ './views/AppView')
);



const App = () => {
    return (
        <div>
            <Main />

            <Suspense fallback={<div className="loading"/>}>

                <Router history={history}>

                    <Switch>

                        <Route path={['/app']}>
                            <AppLayout>
                                <Switch>

                                    <Route path={`/app`}
                                           render={(props) => <ViewApp {...props}/>}/>

                                </Switch>
                            </AppLayout>
                        </Route>


                    </Switch>
                </Router>

            </Suspense>

        </div>
     );
}

export default App;
