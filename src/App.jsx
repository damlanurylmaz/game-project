import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './Pages/Home/Home';
import './Pages/GamePages/Game';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './Pages/Home/Store/Home.slice';

const Home = lazy(() => import('./Pages/Home/Home'));
const Login = lazy(() => import('./Pages/Login/Login'));
const Game = lazy(() => import('./Pages/GamePages/Game'));
const Register = lazy(() => import('./Pages/Register/Register'));
const Profile = lazy(() => import('./Pages/Profile/Profile'));
const InfoPages = lazy(() => import('./Components/InfoPages'));

function App() {
  const userId = window.localStorage.getItem('userId');
  const dispatch = useDispatch();

  useEffect(() => {
    if(userId) {
      const authenticatedUser = async () => {
        try {
         const user = await fetch(`http://localhost:3000/users/${userId}`);
         const response = await user.json();
         console.log(response);
         dispatch(setUser(response));
        } catch (error) {
         console.log(error)
        }
       };
       authenticatedUser();
    }
    
  },[dispatch, userId]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />}/>
          <Route path='/game/:gameId' element={<Game />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/:page' element={<InfoPages />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App;
