import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './Pages/Home/Home';
import './Pages/GamePages/Game';
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./Pages/Home/Home'));
const Login = lazy(() => import('./Pages/Login/Login'));
const Game = lazy(() => import('./Pages/GamePages/Game'));
const Register = lazy(() => import('./Pages/Register/Register'));
const Profile = lazy(() => import('./Pages/Profile/Profile'));

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />}/>
          <Route path='/game' element={<Game />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App;
