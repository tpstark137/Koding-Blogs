import './App.css';
import Header from '../src/components/Header';
import {Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contribute from './pages/Contribute';
import Resources from './pages/Resources';
import { UserContextProvider } from './components/UserContext';

function App() {
  return (
   
    <UserContextProvider>
   <main>
    <Header/>
   <Routes>
   <Route path="/contribute" element={<Contribute/>} />

    <Route path="/" element={<Home/>} />
    <Route path="/resources" element={<Resources/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
   </Routes>
   </main>
    </UserContextProvider>
   
   );
}

export default App;
