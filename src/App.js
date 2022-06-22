import React from "react";


const ViewApp = React.lazy(() =>
    import(/* webpackChunkName: "views-user" */ './views/AppView')
);


const App = () => {
    return (
        <div>
            {/*<Main/>*/}

            {/* routing base file */}
            <ViewApp/>
        </div>
    );
}

export default App;
