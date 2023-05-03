import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux/es/exports';
import App from './components/app/app';
import { store } from './store/store';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark" />
    <App />
  </Provider>
);

