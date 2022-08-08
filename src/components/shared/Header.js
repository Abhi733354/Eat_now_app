  import React from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import {Link,Navigate,useNavigate } from 'react-router-dom';
  import {setLogout, setUrl} from '../user/actionLogin';

  const Header = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginData = useSelector(state => state.login);
  console.log('Header---------------------', loginData)

  const logoutFn = () => {
    console.log('---------logout------------');
    //redux update - loginData
    dispatch(setLogout());
  }

  const loginFn = () => {
    dispatch(setUrl(window.location.pathname));
    navigate('/login');
  }
    return (
      <div>
        <header id="header" class="fixed-top d-flex align-items-center header-transparent">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <div class="logo me-auto">
        <h1><Link to="/">Zomato</Link></h1>
        {/* <!-- Uncomment below if you prefer to use an image logo  */}
        {/* <img src="img/logo.png" alt="" class="img-fluid"/> */}
      </div>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <Link to= "/"class="nav-link scrollto active">Home</Link>
          <Link to="/about" class="nav-link scrollto">About</Link>
          {/* <Link to=" " class="nav-link scrollto">Menu</Link> */}
          <Link className = "nav-link scrollto" to = "/addrestaurant">Add restaurant</Link>
          <Link to="/contact" class="nav-link scrollto">Contact</Link>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <span>
        {
          loginData.loginDataRedux ? (
            <>
              <Link to="/cart" class="book-a-table-btn scrollto" >Cart</Link>
              <button onClick={logoutFn} class="book-a-table-btn scrollto" >Logout</button>
            </>
          ):(
            <>

      <button onClick={loginFn} class="book-a-table-btn scrollto" >Login</button>
      <Link to= "/registration" class="book-a-table-btn scrollto">Register</Link>
      </>
          )
        }
      </span>

    </div>
  </header>
    
        </div>

        
    
    )
  }

  export default Header
