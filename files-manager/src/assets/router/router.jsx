import { BrowserRouter, Route } from 'react-router-dom';
import Registration from '../../components/registration/registrationForm';
import { Routes  } from 'react-router-dom';
import Login from '../../components/login/loginForm'
function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/registration' element={<Registration/>} />

        </Routes>
      </BrowserRouter>
    );
  }
  export default Router;