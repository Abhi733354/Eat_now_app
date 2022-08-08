import axios from 'axios';
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {setUrl} from '../user/actionLogin';

const Cart = () => {
    const dispatch = useDispatch();
    const loginData = useSelector(state => state.login);
    console.log('Header---------------------', loginData.loginDataRedux);
    const navigate = useNavigate();
    const {state: orderData} = useLocation();
    console.log('orderData', orderData)


    useEffect(() => {
        if(!loginData.loginDataRedux) {
            dispatch(setUrl(window.location.pathname));
            navigate('/login', );
        }
    }, [loginData.loginDataRedux])

    return (
        <>
            <section class="align-items-center section-bg">
                <div class="container">
                    <h4 data-aos="fade-up">Your order has been placed successfully.</h4>
                </div>
            </section>

            <section class="align-items-center section-bg">
                <div class="container">
                    <h4>Order ID - {orderData.orderid}</h4>
                    <h3>Restaurant - {orderData.rest_name}</h3>
                </div>
            </section>
        </>
    )
}

export default Cart;