import {createRoot} from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import '../src/assets/css/fontiran.css';
import './index.css';
import './assets/css/main.css';
import {store} from './redux/store'
import {Provider} from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>);
