import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import {addFoodToCart, addRestDetails, emptyFoodFromCart} from './actionFood';
import img5 from "./chole-recipe.jpg";

const Restaurant = () => {
    const [rest_data, setRestData] = useState({});
    const [menu, setMenu] = useState([]);
    const tempId = useParams();
    console.log('rest id - ', tempId);
    const loginData = useSelector(state => state.login);
    const dispatch = useDispatch();
    const vegIcon = 'https://banner2.cleanpng.com/20180601/at/kisspng-vegetarian-cuisine-biryani-indian-cuisine-vegetabl-vegetarian-5b11c235a92d48.569689881527890485693.jpg';
    const nonvegIcon = 'https://spng.pinpng.com/pngs/s/45-459786_non-veg-icon-circle-hd-png-download.png';
    const cartData = useSelector(state => state.cart);
    // console.log('Header---------------------', cartData.restDetails);

    const callApi = async () => {
        const url = 'https://immense-atoll-72999.herokuapp.com/restaurants/search/'+tempId.id;
        const response = await axios.get(url);
        setRestData(response.data);
    }

    //api call for restaurant menu items
    const callApiMenu = async () => {
        const url = 'https://immense-atoll-72999.herokuapp.com/menu/'+tempId.id;
        const response = await axios.get(url);
        setMenu(response.data);
    }

    const addCartFn = (foodItem) => {
        console.log(foodItem);
        let restDetails = {};
        restDetails.rest_id = rest_data.rest_id;
        restDetails.rest_name = rest_data.rest_name;
        restDetails.city = rest_data.location;

        if(restDetails.rest_id === cartData.restDetails.rest_id) {
            dispatch(addFoodToCart(foodItem));
            dispatch(addRestDetails(restDetails));
        }
        else {
            //empty foodcart
            dispatch(emptyFoodFromCart());
            //empty restDetails - no separate action required as addRestDetails will overwrite
            dispatch(addFoodToCart(foodItem));
            dispatch(addRestDetails(restDetails));
        }
        
    }

    useEffect(() => {
        callApi();
        callApiMenu();
    }, [])
    
    useEffect(() => {
        console.log(rest_data);
        console.log(menu);
    })

    return(
        <> 
            <section id="" class="bg-light">
            <div className= "mx-5">
                <div class="container" data-aos="fade-up">
                
                    <div className="row">
                    
                        <div className="col-6">
                        
                            <img src={rest_data.image || 'https://media.timeout.com/images/105361156/750/422/image.jpg'} className="img-fluid food-image-large"/>
                        </div>
                       
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">
                                    <img src={rest_data.image2 || 'https://media-cdn.tripadvisor.com/media/photo-s/16/6f/8c/be/our-secret-smashed-avo.jpg'} className="img-fluid food-image-small"/>
                                </div>
                                <div className="col-6">
                                    <img src={rest_data.image3 || 'https://media-cdn.tripadvisor.com/media/photo-s/0e/1b/64/79/our-smashed-avocado-on.jpg'} className="img-fluid food-image-small"/>
                                </div>
                                <div className="col-6 mt-4">
                                    <img src={rest_data.image4 || 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg'} className="img-fluid food-image-small"/>
                                </div>
                                <div className="col-6 mt-4">
                                    <img src={rest_data.image5 || 'https://media-cdn.tripadvisor.com/media/photo-s/19/42/95/8a/chef-s-signature-smashed.jpg'} className="img-fluid food-image-small"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    

                </div>
            </section>


            <section id="" class="">
                <div class="container" data-aos="fade-up">
                    <div class="section-header text-start">
                    
                        <h2>{rest_data.rest_name}</h2>
                        <h4>{rest_data.category}</h4>
                        <h4>{rest_data.location}</h4>

                        {loginData.loginDataRedux && 
                        (
                            <>
                                <button className="btn btn-success">Add Review</button>
                                <button className="btn btn-warning bg-opacity-50">Mark Favourite</button>
                            </>
                        )}
                    </div>

                    
                </div>
                
            </section>


            <section id="" class="bg-light">
                <div class="container" data-aos="fade-up">
                    <table className="table table-responsive table-warning">
                                        
                                        {menu && menu.map((temp) => (
                                            <tr>
                                                <td><img src={temp.food_category === 'veg' ? vegIcon : nonvegIcon} className="veg-nonveg-icon"/></td>
                                                <td><img src={temp.image || "https://i.tribune.com.pk/media/images/1590373-biryani-1513939158/1590373-biryani-1513939158.gif"} className="menu-image"/></td>
                                                <td>{temp.food_name}</td>
                                                <td>&#8377;{temp.price}</td>
                                                <td>{temp.discription}</td>
                                                {loginData.loginDataRedux && 
                                                (
                                                    <>
                                                        <td><button className="btn btn-sm btn-warning" onClick={() => addCartFn(temp)}>Add to Cart</button></td>
                                                    </>
                                                )}
                                                
                                            </tr>
                                        ))}
                    </table>
                </div>
                
            </section>


           
        </>
    );
}

export default Restaurant;