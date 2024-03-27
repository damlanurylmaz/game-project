import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './Pages/Home/Home';
import './Pages/GamePages/Game';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Game from './Pages/GamePages/Game';
import Register from './Pages/Register/Register';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/game' element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
