import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {SignUpPage,LoginPage} from './Routes.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
