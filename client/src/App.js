import logo from './logo.svg';
import Navbar from './components/header/navbar';
import NewNav from './components/newNavBar/newNav';
import MainComp from "./components/Body/MainComp";
import Footer from './components/Body/footer';
import BoxProducts from './components/Body/boxProducts';
import amaxonsale from "./components/Body/amaxonsale.avif"
import Login from "./components/Body/login.js"
import {Routes, Route} from "react-router-dom"
import './App.css';
function App() {
  return (
    <>
     
  <Navbar/>
  <NewNav/>
  <Routes>
    <Route path="/" element={<MainComp/>}/>
    <Route path="/login" element={<Login/>}/>
    {/* <Routes path="/" element={<Login/>}></Routes> */}
    </Routes>
  
  
  <Footer/>
  

  </>
  );
}

export default App;
