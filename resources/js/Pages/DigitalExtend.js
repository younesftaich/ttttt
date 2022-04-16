import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';
import queryString, { stringify } from 'query-string'
import { Inertia } from '@inertiajs/inertia'

import { PayPalButton } from "react-paypal-button-v2";
const Checkout2 = () => {
    const myapi = process.env.MIX_IPTV
    const myRef2 = React.createRef();

   const [toggleMenu, setToggleMenu] = useState(false)
   const [selected, setSelected] = useState(1)
   const [pm, setPm] = useState("PayPal")
   
   const [orderid, setOrderid] = useState("")
   const [orderuniqueid, setOrderuniqueid] = useState("")
   const [email, setEmail] = useState("")
   const [wtp, setWtp] = useState("")
   const [device, setDevice] = useState("m3u")
   const [needmac, setNeedMac] = useState(false)
   const [price, setPrice] = useState("11.99")
   const [pass, setPass] = useState("1 Month Pass")
   const realtoken = "AYIFpRAUleqqAm9t7rBsCnhK6rTsYw8bMsXl9unIZYsufTKt7qZKMgL1JuJU8ebbNxo2Ger6VR1-ZF75"

   const changemail = (e) => {
      setEmail(e.target.value)
   }
   const paymentdone = () => {

      var myuniqueid = makeid(15);
     
     
        

      let subinfo = {
         "active": "no",
         "adultprice": null,
         "extend": 1,
            "channels": channels,
            "expiredate": "",
            "id4k": id4k,
            "mac": mac,
            "packagename": pass,
            "packageprice": price,
            "paid": "no",
            "password": password,
            "placeddate": Date(),
            "plan":selected,
            "portal": portal,
            "proxyprice": null,
            "startdate": "",
            "status": "Waiting Payment",
            "total": price,
            "type": type,
            "uniqueid": myuniqueid,
            "userid": userid,
            "username": username,
            "oldid": subid
            
      }
      //console.log(subinfo)
    
     
      axios.post('/api/extend', subinfo).then(function(result) {
         axios.get('/api/paidextend/'+myuniqueid).then(function(result) {

            Inertia.get('/completed?order='+result.data.subid, {  }, { replace: true })

         })
      } )



      

   
    
     
    };

    
   const paymentinit = () => {
    
    
    
    var myuniqueid = makeid(15);
    localStorage.setItem('customerid', email);

    let myiptv = myapi;
    let subinfo = {
       "email" : email,
       "uniqueid" : myuniqueid,
       "wtp" : wtp,
       "type" : device,
       "mac" : mac,
       "plan":selected,
       "placeddate":Date(),
       "packagename" : pass,
       "proxyprice" : "",
       "adultprice" : "",
       "paid" : "no",
       "status" : "Waiting Payment",
       "packageprice" : price,
       "total" : price

    }
    axios.post('/api/createsub', subinfo).then(function(result) {
      let myid = result.data.subid
      setOrderid(myid)
      setOrderuniqueid(myuniqueid)
    
     

    } )
   
  };
   const changewtp = (e) => {
      setWtp(e.target.value)
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
    
    const parsed = queryString.parse(location.search);
    const id = parsed.uniqueid;
    const [subid, setid] = useState("")
    const [userid, setuserid] = useState("")
    const [channels, setchannels] = useState({})
    const [mac, setMac] = useState("")
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [type, settype] = useState("")
    const [id4k, setid4k] = useState("")
    const [portal, setportal] = useState("")
   const onSubmit = (e) => {
      var myuniqueid = makeid(15);
     
     
        
      e.preventDefault();
      let subinfo = {
         "active": "no",
         "adultprice": null,
         "extend": 1,
            "channels": channels,
            "expiredate": "",
            "id4k": id4k,
            "mac": mac,
            "packagename": pass,
            "packageprice": price,
            "paid": "no",
            "password": password,
            "placeddate": Date(),
            "plan":selected,
            "portal": portal,
            "proxyprice": null,
            "startdate": "",
            "status": "Waiting Payment",
            "total": price,
            "type": type,
            "uniqueid": myuniqueid,
            "userid": userid,
            "username": username,
            "oldid": subid
            
      }
    
     
      axios.post('/api/extend', subinfo).then(function(result) {
         console.log(result)
      } )
      
    };
    function handleSelectChange(event) {
      setDevice(event.target.value);
 if (event.target.value === "mag"  ) {
         setNeedMac(true)
      }
      else {
         setNeedMac(false)
      }
      
  }
   const selectPayPal = () => {
      setPm("PayPal")
   }
   const selectCard = () => {
      setPm("Credit Card")
   }
   const plan1 = () => {
      setSelected(1)
      setPass("1 Month Pass")
      setPrice("11.99")
      myRef2.current.scrollIntoView({ behavior: "smooth", block: "start" });

   }
   const plan3 = () => {
      setSelected(3)
      setPass("3 Months Pass")
      setPrice("29.23")
      myRef2.current.scrollIntoView({ behavior: "smooth", block: "start" });

   }
   const plan6 = () => {
      setSelected(6)
      setPass("6 Months Pass")
      setPrice("44.96")
      myRef2.current.scrollIntoView({ behavior: "smooth", block: "start" });

   }
   const plan12 = () => {
      setSelected(12)
      setPass("1 Year Pass")
      setPrice("71.91")
      myRef2.current.scrollIntoView({ behavior: "smooth", block: "start" });

   }

   const toggleNav = () => {
      setToggleMenu(!toggleMenu)
   }
   const [toggleCur, setToggle] = useState(false)


   const toggleCurrency = () => {

      setToggle(!toggleCur)
   }

   useEffect(() => {
    if ( id != null){
        (async () => {
            let checkresult =  axios.get('/api/subunique/'+id).then(response => response.data);   
            checkresult.then(function(result) {
                console.log(result)
                setid4k(result.id4k)
                setid(result.id)
                setMac(result.mac)
                setpassword(result.password)
                setchannels(result.channels)
                setportal(result.portal)
                settype(result.type)
                console.log(result.userid)
                setuserid(result.userid)
                setusername(result.username)

                })
                })  ();
    }
    
  
   
  }, [id]);
   return (
      <div className='bg-gray-100 min-h-screen'>

         <nav className="   bg-white-200">
            <div className="   max-w-6xl mx-auto px-4">
               <div className="   flex justify-between ">
                  <div className="   flex space-x-4">
                     <div>
                        <a href="/" className="   flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                           <img className="  md:h-14 lg:h-12 w-9/12 h-9" src={"https://res.cloudinary.com/luxiptv/image/upload/v1641149589/XXXX_1_uhbud3.png"} />

                        </a>
                     </div>

                  </div>

                  <div className="   hidden md:flex items-center space-x-1">

                     <div className='relative'>
                        <div onClick={() => toggleCurrency()} className="  cursor-pointer  text-black p-4 px-8 rounded-xl  text-lg leading-6 font-semibold">
                           <div className=' space-x-2'>
                              <div className=' inline-block align-middle'>
                                 <Icon width="30" height="30" icon="twemoji:flag-for-flag-united-kingdom" color="#00CC99" />
                              </div>
                              <div className=' inline-block'>
                                 £ GBP
                              </div>
                              <div className=' inline-block align-middle'>
                                 <Icon color="black" width="25" height="25" icon="akar-icons:arrow-down" />

                              </div>
                           </div>   </div>
                        <div className={toggleCur ? "absolute  z-50 mt-2 rounded-md shadow-lg w-36 origin-top-right right-0" : "hidden"} >

                           <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white">

                              <a href="" className="block py-2 px-5 ">
                                 <div className=' space-x-2'>
                                    <div className=' inline-block align-middle'>
                                       <Icon width="30" height="30" icon="twemoji:flag-for-flag-united-kingdom" color="#00CC99" />
                                    </div>
                                    <div className=' inline-block'>
                                       £ GBP
                                    </div>

                                 </div>
                              </a>
                              <a href="" className="block py-2 px-5 ">
                                 <div className=' space-x-2'>
                                    <div className=' inline-block align-middle'>
                                       <Icon width="30" height="30" icon="twemoji:flag-for-flag-european-union" color="#00CC99" />
                                    </div>
                                    <div className=' inline-block'>
                                       € EUR
                                    </div>

                                 </div>
                              </a>
                              <a href="" className="block py-2 px-5 ">
                                 <div className=' space-x-2'>
                                    <div className=' inline-block align-middle'>
                                       <Icon width="30" height="30" icon="twemoji:flag-for-flag-united-states" color="#00CC99" />
                                    </div>
                                    <div className=' inline-block'>
                                       $ USD
                                    </div>

                                 </div>
                              </a>

                           </div></div>
                     </div>
                  </div>  <div className="   md:hidden flex items-center">
                     <button onClick={() => toggleNav()} className="   mobile-menu-button">
                        <a className="    text-black p-4 px-8 rounded-xl  text-lg leading-6 font-semibold">
                           <div className=' space-x-2'>
                              <div className=' inline-block align-middle'>
                                 <Icon width="30" height="30" icon="twemoji:flag-for-flag-united-kingdom" color="#00CC99" />
                              </div>
                              <div className=' inline-block'>
                              £ GBP
                              </div>
                              <div className=' inline-block align-middle'>
                                 <Icon color="black" width="25" height="25" icon="akar-icons:arrow-down" />

                              </div>
                           </div>   </a>
                     </button>
                  </div>

               </div>
            </div>

            <div className={toggleMenu ? 'mobile-menu  md:hidden' : 'mobile-menu hidden md:hidden'}
            >
               <a className="  text-center  text-black   rounded-xl  text-lg leading-6 font-semibold">
                  <div className=' space-x-2   border-b-2 mt-2'>
                     <div className=' inline-block align-middle'>
                        <Icon width="30" height="30" icon="twemoji:flag-for-flag-united-kingdom" color="#00CC99" />
                     </div>
                     <div className=' inline-block'>
                        £ GBP
                     </div>

                  </div>   </a>
               <a className="  text-center  text-black   rounded-xl  text-lg leading-6 font-semibold">
                  <div className=' space-x-2   border-b-2 mt-2'>
                     <div className=' inline-block align-middle'>
                        <Icon width="30" height="30" icon="twemoji:flag-for-flag-european-union" color="#00CC99" />
                     </div>
                     <div className=' inline-block'>
                        € EUR
                     </div>

                  </div>   </a>
               <a className="  text-center  text-black   rounded-xl  text-lg leading-6 font-semibold">
                  <div className=' space-x-2   border-b-2 mt-2'>
                     <div className=' inline-block align-middle'>
                        <Icon width="30" height="30" icon="twemoji:flag-for-flag-united-states" color="#00CC99" />
                     </div>
                     <div className=' inline-block'>
                        $ USD
                     </div>

                  </div>   </a>




            </div>
         </nav>
         <div  >

            <div >
               <h1 className='text-2xl font-bold text-center p-4'>Extend your subscription 

               </h1>
            </div>
            <div  ref={myRef2} className='mt-2'>
               <h1 className='text-xl font-bold text-left px-8 mt-1'>
                  <span className='text-white bg-green-600 px-4 py-1 text-lg rounded-full '>STEP 1</span>
                  <span className='m-2'><span className='text-green-600'>Select</span> a plan that works for you:
                  </span>
               </h1>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 px-8 gap-3 mt-3'>
               <div onClick={() => plan1()} className={selected == 1 ? "relative cursor-pointer flex flex-col h-full px-6 py-8 overflow-hidden bg-white  shadow-sm border-black border-4 lg:border-black font-bold rounded-3xl  " : "relative cursor-pointer flex flex-col h-full px-6 py-8 overflow-hidden bg-white border shadow-sm border-black lg:border-black font-base rounded-3xl  "}>

                  <div className="mb-8">
                     <h3 className="block mb-2 text-2xl text-center  tracking-widest uppercase">1 Month</h3>

                     <h3 className="block mt-2 text-center text-5xl leading-none  tracking-widest "><span className="ml-1 text-lg font-normal">£</span><span>11.99</span></h3>

                     <h3 className="block mt-2 text-s font-light text-center tracking-widest ">per month</h3>

                  </div>

                  <div className="flex flex-col mt-auto">
                     <button className="relative inline-flex items-center justify-center h-auto px-4 py-3 text-sm font-medium text-white transition-colors bg-green-600 rounded-full sm:text-base sm:px-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">Subscribe</button>
                     <p className="w-full mt-3 text-xs text-center text-gray-400">Signup and gain instant premium access</p>
                  </div>
               </div>

               <div onClick={() => plan12()} className={selected == 12 ? "relative cursor-pointer flex flex-col h-full px-6 py-8 overflow-hidden bg-white  shadow-sm border-black border-4 lg:border-black font-bold rounded-3xl  " : "relative cursor-pointer flex flex-col h-full px-6 py-8 overflow-hidden bg-white border shadow-sm border-black  lg:border-black font-base rounded-3xl  "}>
                  <span className="absolute z-10 px-3 py-1  text-xs tracking-wide text-white bg-green-600 rounded-full right-3 top-3">MOST POPULAR</span>
                  <div className="mb-8">
                     <h3 className="block mb-2 text-2xl text-center  tracking-widest uppercase">1 Year</h3>

                     <h3 className="block mt-2 text-center text-5xl leading-none   tracking-widest "><span className="ml-1 text-lg font-normal">£</span><span>5.99</span></h3>

                     <h3 className="block mt-2 text-s font-light text-center tracking-widest ">per month</h3>

                  </div>

                  <div className="flex flex-col mt-auto">
                     <button className="relative inline-flex items-center justify-center h-auto px-4 py-3 text-sm font-medium text-white transition-colors bg-green-600 rounded-full sm:text-base sm:px-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">Subscribe</button>
                     <p className="w-full mt-3 text-xs text-center text-gray-400">Signup and gain instant premium access</p>
                  </div>
               </div>

               <div onClick={() => plan3()} className={selected == 3 ? "relative cursor-pointer flex flex-col h-full px-6 py-8 overflow-hidden bg-white  shadow-sm border-black border-4 lg:border-black font-bold rounded-3xl  " : "relative cursor-pointer flex flex-col h-full px-6 py-8 overflow-hidden bg-white border shadow-sm border-black  lg:border-black font-base rounded-3xl  "}>

                  <div className="mb-8">
                     <h3 className="block mb-2 text-2xl text-center  tracking-widest uppercase">3 Months</h3>

                     <h3 className="block mt-2 text-center text-5xl leading-none   tracking-widest "><span className="ml-1 text-lg font-normal">£</span><span>9.74</span></h3>

                     <h3 className="block mt-2 text-s font-light text-center tracking-widest ">per month</h3>

                  </div>

                  <div className="flex flex-col mt-auto">
                     <button className="relative inline-flex items-center justify-center h-auto px-4 py-3 text-sm font-medium text-white transition-colors bg-green-600 rounded-full sm:text-base sm:px-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">Subscribe</button>
                     <p className="w-full mt-3 text-xs text-center text-gray-400">Signup and gain instant premium access</p>
                  </div>
               </div>
               <div onClick={() => plan6()} className={selected == 6 ? "relative cursor-pointer flex flex-col h-full px-6 py-8 overflow-hidden bg-white  shadow-sm border-black border-4 lg:border-black font-bold rounded-3xl  " : "relative cursor-pointer flex flex-col h-full px-6 py-8 overflow-hidden bg-white border shadow-sm border-black  lg:border-black font-base rounded-3xl  "}>

                  <div className="mb-8">
                     <h3 className="block mb-2 text-2xl text-center  tracking-widest uppercase">6 Months</h3>

                     <h3 className="block mt-2 text-center text-5xl leading-none   tracking-widest "><span className="ml-1 text-lg font-normal">£</span><span>7.49</span></h3>

                     <h3 className="block mt-2 text-s font-light text-center tracking-widest ">per month</h3>

                  </div>

                  <div className="flex flex-col mt-auto">
                     <button className="relative inline-flex items-center justify-center h-auto px-4 py-3 text-sm font-medium text-white transition-colors bg-green-600 rounded-full sm:text-base sm:px-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">Subscribe</button>
                     <p className="w-full mt-3 text-xs text-center text-gray-400">Signup and gain instant premium access</p>
                  </div>
               </div>




            </div>


        

         





         </div>
    
         <div className='grid md:grid-cols-1 grid-cols-1 gap-3 border-2  p-4 mt-4 rounded-3xl text-xl m-2 border-gray-500 m-2'>
         <div className='mt-2 pt-4 w-full'>
               <h1 className='text-xl font-bold text-left px-8 mt-1'>
                  <span className='text-white bg-green-600 px-4 py-1 text-lg rounded-full '>STEP 2</span>
                  <span className='m-2'><span className='text-green-600'>Select </span>
                     your preferred method of payment:
                  </span>
               </h1>
               <div className='mt-2 pt-4 w-full'>
               <form onSubmit={onSubmit} className=' p-4 mt-4 rounded-3xl  m-2'>

             

                  <div className="space-y-2"><div className="flex font-bold rounded-3xl bg-blue-200 py-3 px-5"><span className="flex-1">
                     {pass}
                     </span><span>
                        £{price}</span></div> <div className="flex rounded-3xl bg-blue-200 font-bold  py-3 px-5"><span className="flex-1" /><span className="mr-7">Total</span><span className="mr-7" style={{ height: '23px', width: '1px', display: 'block' }} /><span> £{price}</span></div></div>
              <div className='grid md:grid-cols-1 grid-cols-1 gap-4'>
<div >
<div className="fill-details gap-10">
            <div className="shadow-md items-center  p-4 md:p-8 rounded-xl">
                <div className="space-y-7 lg:w-8/12 sm:w-full mx-auto">

           

                <PayPalButton
       amount = {price}
      shippingPreference="NO_SHIPPING"
       currency="GBP"
       options={{
        currency: "GBP",
         clientId: realtoken
       }}
       
       style={{
        shape: "pill",
        label :"pay"
      }}
    
      createOrder={(data, actions) => {
         return actions.order.create({
           purchase_units: [{
             amount: {
               currency_code: "GBP",
               value: price
             }
           }],
           application_context: {
              shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
            }
         });
       }}

 


onSuccess={(details, data) => {
   paymentdone()
   

  
      

}}
/>
                  

<div>
                    
                        <p className="justify-center flex items-center text-gray-500  ">
                        <div>
<div   className=' w-full text-black text-s font-light '>
    <div className='space-x-1'>
    <div className='inline-block align-middle'>
       <Icon icon="dashicons:money-alt" />
       </div>
       <div className='inline-block'>
       <h1> 30-Day Money-Back Guarantee</h1>
       </div>
       
    </div>
</div>
<div   className='  w-full text-black text-s font-light '>
    <div className='space-x-1'>
    <div className='inline-block align-middle'>
       <Icon icon="grommet-icons:secure" />
       </div>
       <div className='inline-block'>
       <h1> Secure and encrypted payments via PayPal</h1>
       </div>
       
    </div>
</div>
</div>
                        </p>
                    </div>
                </div>
            </div>




        
        </div>
</div>

              </div>

               </form>

            </div>

            </div>
    

       </div>
      
     

      </div>
   );
};

export default Checkout2;