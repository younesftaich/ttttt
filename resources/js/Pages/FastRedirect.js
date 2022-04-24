import React, { useEffect,useState } from 'react';
import moment from 'moment';
import { sitename } from "./utils"
import { Icon } from '@iconify/react';
import { Head } from '@inertiajs/inertia-react'
import queryString from 'query-string'
import { Inertia } from '@inertiajs/inertia'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {PaymentElement} from '@stripe/react-stripe-js';
import {useStripe, useElements} from '@stripe/react-stripe-js';
import { PayPalButton } from "react-paypal-button-v2";
import {
   PayPalScriptProvider,
   PayPalButtons,
   usePayPalScriptReducer
} from "@paypal/react-paypal-js";



// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.MIX_STRIPEPK);

import axios from "axios";



const getCurrentDate = () => {
   return moment().format("YYYY-MM-DD");
  }
  function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
  }
  return result;
 }




function Checkout(props) {

    const checkouturl = process.env.MIX_DIGITAL

    const parsed = queryString.parse(location.search);
    const couponparam = parsed.coupon;
    const emailparam = parsed.email;
    const ott = parsed.ott;

    useEffect(() => {
        let coupon = ""
        if ( couponparam){
            coupon = couponparam
        }
        let finalredirect = checkouturl+"/checkout?ott=1&coupon="+coupon
        window.location.href = finalredirect;
  }, [couponparam,emailparam,ott]);

  
  

   return (
      <div className="font-press-start  ">
        
        <Head>
<title>Checkout  </title>
</Head>
       

     
         
      </div>
   );
}

export default Checkout;
