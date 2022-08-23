import React, {Suspense} from "react";
import {createRoot} from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import '../src/assets/css/fontiran.css';
import './index.css';
import './assets/css/main.css';
import './assets/css/activitiesPage.css';
import './assets/css/modals.css';
import './assets/css/texCss.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './redux/store'
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import Loading from "./components/loading/loading";

let persistor = persistStore(store);


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <Suspense fallback={<Loading/>}>
            <BrowserRouter>
                <Provider store={store}>
                    <PersistGate persistor={persistor} loading={<div>Loading...</div>}>

                        <App/>
                        <ToastContainer/>
                    </PersistGate>
                </Provider>
            </BrowserRouter>
        </Suspense>
    </React.StrictMode>);
