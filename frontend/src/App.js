import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {
  HomePage,
  SignUpPage,
  LoginPage,
  ActivationPage,
  ProductsPage,
  ProductDetailsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  ProfilePage,
} from './Routes.js';
import { ToastContainer} from 'react-toastify';  //customised alert
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import Store from './redux/store.js';
import { loadUser } from './redux/actions/user.js';
import { useSelector } from 'react-redux';
import ProtectedRoutes from './ProtectedRoutes.js';

function App() {

  const { loading, isAuthenticated } = useSelector((state) => state.user);
    // console.log({user});
    //if loading = true add a loader design
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);


  return (
    <>
      {
        loading ? (null) : (
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/activation/:activation_url' element={<ActivationPage />} />
                <Route path='/products' element={<ProductsPage/>} />
                <Route path='/product/:name' element={<ProductDetailsPage/>} />
                <Route path='/best-selling' element={<BestSellingPage/>} />
                <Route path='/events' element={<EventsPage/>} />
                <Route path='/faq' element={<FAQPage />} />
                <Route path='/profile' element={
                  <ProtectedRoutes isAuthenticated={isAuthenticated}>
                    <ProfilePage />
                  </ProtectedRoutes>
                } />
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
          )
      }
    </>
  );
}

export default App;
