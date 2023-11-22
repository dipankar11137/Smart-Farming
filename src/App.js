import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import CreateAccount from './Components/Login/CreateAccount';
import Login from './Components/Login/Login';
import Home from './Components/Pages/Home/Home';
import Paddy from './Components/Pages/Paddy/Paddy';
import Navbar from './Components/Share/Navbar';
import NotFound from './Components/Share/NotFound';
AOS.init();

function App() {
  return (
    <div className="bg-gradient-to-r from-lime-700 from-40% via-lime-900 via-10% to-lime-700  to-50%">
      {/* <CreateAccount /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/paddy" element={<Paddy />}></Route>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
