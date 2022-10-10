  import React, { useReducer, useRef, useState } from 'react';
  import {Link, useNavigate} from 'react-router-dom';

  const HomePage = () => {
    const inputRef1 = useRef();
    // const navigate = useNavigate();
    const [city, setCity] = useState('');
    return (
      <div>   
            <section id="hero">  
              <div class="carousel-container">
              
              
                <div class="carousel-content">
                  <span>
                  
                     </span>
                
                
                  <h2 class="animate__animated animate__fadeInDown"><span></span>Food To Go</h2>
                  
                  <h3 class="animate__animated animate__fadeInUp">Discover the best food & drinks in your city</h3>
                  {/* <input type="text" onChange={(e) => setCity(e.target.value)} value={city}/>      */}
                  <select onChange={(e) => setCity(e.target.value)}>
                          <option value="-">Select City</option>
                          <option value="delhi">Delhi</option>
                          <option value="mumbai">Mumbai</option>
                          <option value="chennai">Chennai</option>
                          {/* <option value="kolkata">Kolkata</option> */}
                          <option value="pune">pune</option>
                      </select>

                  <Link id="search_button" to={`/list/${city}`}>Search</Link>
                  {/* <button type="button" class="btn btn-danger">Left</button> */}
                </div>
              </div>
    </section>
          
        
      </div>
    )
  }

  export default HomePage;

