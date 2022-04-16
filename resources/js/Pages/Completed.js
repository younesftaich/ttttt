import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { PayPalButton } from "react-paypal-button-v2";

import axios from 'axios';
import queryString from 'query-string'
const Checkout2 = () => {
    const parsed = queryString.parse(location.search);
    const order = parsed.order;
    const [orderid,setorder] = useState("")
    const [packageprice,setprice] = useState("")
    const [email,setemail] = useState("Grina2iris@outlook.com")
    

    useEffect(() => {
        if ( order != null){
            (async () => {
                let checkresult =  axios.get('/api/subunique/'+order).then(response => response.data);   
                checkresult.then(function(result) {
                    console.log(result)
                    setorder(result.id)
                    setprice(result.packageprice)
                  
                 })
                   })  ();
        }
        
      
       
      }, [order]);
  
    
   return (
    <div className="font-Poppins font-semibold min-h-screen bg-indigo-100">
 
    <div className=" bg-indigo-100   mx-auto pt-8 px-4 sm:px-6 lg:px-8 pb-6">






        <div id="fill-details" className="flex space-x-4 items-center py-2">     

            <span className="font-bold md:text-2xl text-center text-xl">Complete your order :</span>


        </div>


        
      

        <div className="fill-details gap-10">
            <div className="shadow-md items-center bg-white p-4 md:p-8 rounded-xl">
            <div id="fill-details" className="items-center py-2">
            <p className="  text-left text-base m-4">   Your Order #{orderid} is Placed ! </p>
            <p className="  text-left text-base m-4">Your subscription will be processed immediately after the payment . </p>

            <p className="  text-left text-base m-4  ">We accept payments using PayPal and Bank Transfer .  </p>
            <p className="  text-center text-base m-4 text-white object-fill	 bg-slate-500 px-3 py-3">How To Pay With PayPal  </p>
            <p className="  text-left text-base m-4">Login to your PayPal account , Click on " Send " , Put the following email : {email} </p>
            <p className="  text-left text-base m-4">Enter this amount : {packageprice}  </p>
            <p className="  text-left text-base m-4">Important Step : Don't select the option to send using goods & services , otherwise the payment will be refunded , Select the option to send using friends & family option , if you have any issues feel free to contact our live chat .</p>

            <p className="  text-left text-base ml-4 mr-4">In the note section put : {orderid}</p>

            
            <button className="  text-white rounded-lg text-base m-4 py-3 px-4 bg-green-400">Mark As Paid</button>
            <p className="  text-center text-base m-4 text-white object-fill	 bg-slate-500 px-3 py-3">How To Pay With Bank Transfer  </p>
            <p className="  text-left text-base m-4">Contact us via live chat , we'll send you our bank details .
            </p>

      


        </div>


            </div>




        
        </div>
    </div>





</div>
   );
};

export default Checkout2;