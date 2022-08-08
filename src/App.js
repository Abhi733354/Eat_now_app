import './App.css';
import './style.css';
import React,{BrowserRouter, Route, Routes} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/HomePage/HomePage";
import List from "./components/List/List";
import Restaurant from "./components/Restaurant/Restaurant";
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Registration from './components/user/Registration';
import Login from './components/user/Login';
import Cart from './components/user/Cart';
import AddRestaurant from './components/Restaurant/AddRestaurant';
import Order from './components/user/Order';
import About from './components/Aboutus/About';
import Contact from './components/Contactus/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path='/homepage' element = {<HomePage/>}/>
          <Route path='/list/:city' element = {<List/>}/>
          <Route path='/restaurant/:id' element = {<Restaurant/>}/>
          <Route path='/registration' element = {<Registration/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/cart/' element = {<Cart/>}/>
          <Route path='/addrestaurant/' element = {<AddRestaurant/>}/>
          <Route path='/order/' element = {<Order/>}/>
          <Route path='/about/' element = {<About/>}/>
          <Route path='/contact/' element = {<Contact/>}/>
          <Route path='/' element = {<HomePage/>}/>
        </Routes>
        <Footer/>
       
        
        {/* <h2>
            restapp
        </h2> */}
       
        </BrowserRouter>
        
        </>

  );
}

export default App;
