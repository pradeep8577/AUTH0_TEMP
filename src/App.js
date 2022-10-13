import Navbar from './components/Navbar'
import {Routes , Route} from 'react-router-dom';

import Home from "./components/Home";
import Profile from './components/Profile'
import About from './components/About'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>    
        <Route path={'/profile'} element={<Profile/>}/>
        <Route path={'/about'} element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
