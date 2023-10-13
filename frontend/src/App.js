import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {SignUpPage,LoginPage,ActivationPage} from './Routes.js';
import { ToastContainer} from 'react-toastify';  //customised alert
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import Store from './redux/store.js';
import { loadUser } from './redux/actions/user.js';

function App() {

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/activation/:activation_url' element={<ActivationPage />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;
