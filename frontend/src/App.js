import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {SignUpPage,LoginPage,ActivationPage} from './Routes.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/activation/:activation_url' element={<ActivationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
