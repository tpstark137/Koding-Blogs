import './App.css';
import Header from './Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
   <BrowserRouter >
   <main>
    <Header/>
   <Routes>
   <Route path="/contribute" element={<h1>Contribute</h1>} />

    <Route path="/" element={<Home/>} />
    <Route path="/resources" element={<h1>Resources</h1>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
   </Routes>
   </main>
   </BrowserRouter> 
   );
}

export default App;
