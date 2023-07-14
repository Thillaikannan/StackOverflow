
import "./Premium.css";
import { useNavigate} from 'react-router-dom';

import StripeCheckout from 'react-stripe-checkout';
import React, { useState } from 'react';

import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal);

function Premium() {
  
  const navigate = useNavigate();

  const navigateToHome = () => {
    
    navigate('/');
  };

  const publishableKey =
  'pk_test_51NCmmnSA5EzUw4rHhg1n9cZG7Qmc0bwPkpSfK6yVzwv4BvD4tuYnwbFHCmu1mkUY6smYTCUdoyzKbN2Vr0Z5GOOh002BXbhWFC';
  const [product, setProduct] = useState({
    name: 'Gold',
    price: 1000,
  });

  const priceForStripe = product.price * 100;
  const handleSuccess = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
      time: 5000,
    });
    
  };
  const handleFailure = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Payment was not successful',
      time: 4000,
    });
  };
  const payNow = async token => {
    try {
      const response = await axios({
        url: 'http://localhost:5000/payment',
        method: 'post',
        data: {
          amount: product.price,
          token,
        },
      });
      if (response.status === 200) {
        handleSuccess();
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };

  
  return (
 
<body>
    <div class="container">
        <h2>Select Your Plan</h2>
        <div class="price-row">
            <div class="price-col">
                <p>Basic</p>
                <h3>0 Rs <span>/month</span></h3>
                <ul>
                    <li>1 question per day</li>
                    <li>test_feature</li>
                    <li>test_feature</li>
                    
                </ul>
                <button onClick={navigateToHome} >Go Free</button>
            </div>
            <div class="price-col">
                <p>Silver</p>
                <h3>100 Rs <span>/month</span></h3>
                <ul>
                    <li>5 question per day</li>
                    <li>test_feature</li>
                    <li>test_feature</li>
                    
                </ul>
                <StripeCheckout class="abs"
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        billingAddress
        shippingAddress
        amount={priceForStripe}
        description={`Your total is ₹${product.price}`}
        token={payNow}
        />
            </div>
            <div class="price-col">
                <p>Gold</p>
                <h3>1000 Rs <span>/month</span></h3>
                <ul>
                    <li>Unlimited questions</li>
                    <li>test_feature</li>
                    <li>test_feature</li>
                    
                </ul>
                <StripeCheckout class="abs"
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        billingAddress
        shippingAddress
        amount={priceForStripe}
        description={`Your total is ₹${product.price}`}
        token={payNow}
        />
        
            </div>
        </div>
    </div>
</body>

  );
}

export default Premium;


/*
import React,{useState} from 'react'
import './Plans.css'
import { plansData } from '../Data/plansData'
//import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import whiteTick from '../../assets/whiteTick.svg' 
//import Payment from '../Payment/Payment'
import { Link } from 'react-router-dom'
import axios from 'axios'
import StripeCheckOut from 'react-stripe-checkout'

const Plans = () => {
  const [amount, setAmount] = useState({
    name: 'course',
    price: 100*100,

  })

  const makePayment = async (token) => {
    const body = {
      token,
      amount
    }
  const headers = {
    "content-Type": "application.json"
  }
  try {
      const response = await fetch("http://localhost:5000/payment", {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      })
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

return (
  <div className='plans-container'>
    <div className='programs-header' style={{ gap: '2rem'}}>
      <h1 className='stroke-text'>Ready to Upgrade your Plans and enjoy</h1>
     
    </div>
    <div className='plans'>
      {plansData.map((plan, i) => (
        <div className='plan' key={i} >
          {plan.icon}
          <span>{plan.name}</span>
          <span>₹{plan.price}</span>

          <div className='features'>
              {plan.features.map((feature, i) => (
                <div className='feature'>
                    <img src={whiteTick} alt='' width='18'/>
                    <span key={i}>{feature}</span>
                </div>
              ))}
          </div>
          <StripeCheckOut
          stripeKey='pk_test_51NQsYxSIf2HZdWLG7O29bYJlQKntjpELhI9WXvTsWcOQoJMgSpedDR7CwV0HlHllEhGJAdJQLM9j6guuTOtQ1QUc00oe5Aq04c' 
        //  stripe_secret_key='bkqe-fean-euuj-cmzf-szrf' 
          token={makePayment}
          name='Buy Options'
           amount={amount.price}
           currency='INR'
           
           
              >
            <button className='btn'>Join Now </button>
            </StripeCheckOut>
        </div>
      ))}
    </div>
    
  </div>
)

              }              
export default Plans
*/