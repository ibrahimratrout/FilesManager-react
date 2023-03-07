import { BrowserRouter, Route } from 'react-router-dom';
import Registration from '../../components/registration/registrationForm';
import { Routes  } from 'react-router-dom';
import Login from '../../components/login/loginForm'
import Home from '../../components/pages/home/Home';
import ImportFile from '../../components/pages/file/ImportFile';

function Router() {

    return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/registration' element={<Registration/>} />


          <Route path='/import-file' element={<ImportFile/>} />


        </Routes>
      </BrowserRouter>
    );
  }
  export default Router;