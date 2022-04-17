import React, { useEffect,useState } from 'react';
import { Head } from '@inertiajs/inertia-react'
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia'

import Nav from './YsfNav'
import Foot from './Footer'
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import { Icon } from '@iconify/react';

const YsfHome = () => {
    const myRef = React.createRef();

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    const toggleNav2 = () => {
        if (toggleMenu){

            setToggleMenu(!toggleMenu)
        }
    }

  
     const checkout = () => {
   
        Inertia.get('/checkout', {  }, { replace: false })

     }

     
     const updatecountry = (country) => {
         setSearch(false)

        setCountry(country)

        myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });


     }
      



     const [toggleMenu,setToggleMenu] = useState(false)
     const [search,setSearch] = useState(false)
      const [loading,setLoading] = useState(true)
      const [countries,setCountries] = useState([])
      const [loading2,setLoading2] = useState(true)
      const [countries2,setCountries2] = useState([])
      const [country,setCountry] = useState()


      const [searchCountry, setSearchCountry] = useState("")
      const [searchCountry2, setSearchCountry2] = useState("")
      const changesearchedcountry2 = (e) => {
          console.log(e.target.value)
          setSearchCountry2(e.target.value)
     }
     const changesearchedcountry = (e) => {
         console.log(e.target.value)
       setSearchCountry(e.target.value)
    }
     const [searchChannel, setSearchChannel] = useState("")
     const changesearchedchannel = (e) => {
         console.log(e.target.value)
       setSearchChannel(e.target.value)
    }
      
    useEffect(() => {
       
        (async () => {
            let checkresult =  axios.get('/api/searchcountry/'+searchCountry).then(response => response.data);   
            checkresult.then(function(result) {
                setCountries(result)
                setLoading(false)
               })
                 })  ();
   
    
  
   
  }, [searchCountry]);

  
  useEffect(() => {
   if (search){
    (async () => {
        let checkresult =  axios.get('/api/searchchannel/'+searchCountry2).then(response => response.data);   
        checkresult.then(function(result) {
            setCountries2(result)
            setLoading2(false)
            setSearch(false)

            console.log(result)
           })
             })  ();
   }
   




}, [searchCountry2,search]);





    useEffect(() => {
       
        (async () => {
            let checkresult =  axios.get('/api/channelsbycountry2/'+country).then(response => response.data);   
            checkresult.then(function(result) {
                setCountries2(result.channels)
                setLoading2(false)
               })
                 })  ();
   
    
  
   
  }, [country]);
      
    useEffect(() => {
       
        (async () => {
            let checkresult =  axios.get('/api/countries').then(response => response.data);   
            checkresult.then(function(result) {
                console.log(result)
                setCountries(result)
               })
               setLoading(false)  })  ();
   
    
  
   
  }, []);


  
  const searchh = () => {
    setSearch(true)
 }



    return (

        
     
                <div onClick={() => toggleNav2()} class=" bg-body bg-no-repeat bg-contain w-full h-full overflow-hidden">
                    <Head>
  <title>Tv Channels List - FAST IPTV SHOP</title>
</Head>


           <nav  className="max-w-[1500px] w-full  lg:px-5 mx-auto py-5 flex gap-8 xl:gap-28 items-center justify-between relative transition-all duration-300 ease-out">
 <a href="#" className="w-68 h-full object-cover px-5 lg:px-0"> <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646744485/fastt_1_nrmss1.png" alt="logo" className="w-full h-auto object-cover inline-block" /></a>
  <div onClick={(e) => {
        //stop clicks getting to the overlay
        e.stopPropagation();
      }} className= {toggleMenu ? "navigation nav-active" : "navigation "} >
    
    <div className='grid grid-cols-2'>
    <div className="w-full ml-3 flex justify-center lg:hidden ">
      <a href="#"><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646744485/fastt_1_nrmss1.png" alt="logo" className="w-40 h-auto object-contain " /></a>
    </div>

    <div onClick={ () => toggleNav() } className="w-full flex justify-center lg:hidden ">
      <div>
   
   
      <svg   className=" object-contain  w-8 h-8"  color='white' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4l-66.1.3c-4.4 0-8-3.5-8-8c0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4l66-.3c4.4 0 8 3.5 8 8c0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2c0 4.4-3.6 8-8 8z"/></svg>
      </div>
    </div>

    </div>
    
  
  
    <Nav />


  </div>
  <div className="toggle-btn inline-block lg:hidden pr-5">
    <button onClick={ () => toggleNav() }   className="w-12 h-12 flex justify-center items-center rounded-full bg-white">
    <svg className="   w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
  </div>
</nav>

<section className="mt-14 sm:mt-[105px] pb-14 sm:pb-28">
  <div className="max-w-[1100px] w-full px-5 mx-auto text-center">
    <h1 className="heading-primary text-white mb-6">Our Full IPTV Channels List</h1>
    <p className="text-primary-text mb-[62px]">An easy access and super simple IPTV service for all your devices.</p>
    <div className="w-full grid md:grid-cols-channel-left gap-6">
      <div className="bg-white p-1.5 rounded-md h-[calc(100vh-176px)] overflow-hidden">
   

      <div className="relative mt-5 mb-5">
    
          <input value={searchCountry}
                              onChange={changesearchedcountry}   type="text" name="search" placeholder="Search your country here..." className="w-full bg-[#EBEDF1] px-4 py-2 rounded-md inline-block outline-none text-black-default placeholder:text-[#3a3333]" />
          <span className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-lg font-semibold">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </span>
        </div>

        <div className="w-full h-full overflow-auto scrollbar">

        {
  Object.values(countries).map((country, index) => {
    return (
        
        
        <button  onClick={() => updatecountry(country.country)}   className="text-secondary font-bold bg-[#EBEDF1] w-full px-4 py-0.5 text-left flex justify-between items-center rounded-md text-black-default focus:bg-blue-20  mb-1.5 text-base sm:text-lg">
        {country.country}
        <i className="bx bx-chevron-right text-xl xl:text-4xl" />
      </button>
    );
})
}


    
        </div>
      </div>

      
      <div className="bg-white p-1.5 rounded-md h-[calc(100vh-176px)] overflow-hidden">
   

      <div  ref={myRef} className="relative mt-5 mb-5">
    
      <h1> Search for your favorite channel here and click the scoop button</h1>



          <input value={searchCountry2}
                              onChange={changesearchedcountry2}   type="text" name="search" placeholder="Example : iFollow , Sky , Bein ...." className="w-full bg-[#EBEDF1] px-4 py-2 rounded-md inline-block outline-none text-black-default placeholder:text-[#3a3333]" />
          <span onClick={() => searchh()} className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 text-lg font-semibold">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 h-[calc(100vh-268px)] overflow-auto scrollbar">
        {
  Object.values(countries2).map((country, index) => {
    return (
       <div>
 <button onClick={() =>  checkout()} className="text-secondary font-bold bg-[#EBEDF1] w-full px-4 py-2.5 text-left flex justify-between items-center rounded-md text-black-default mb-1.5">{country.channel} </button>
           </div>

    );
})
}
        </div>
        
      </div>



    
    </div>
  </div>
</section>


            
        </div>
    );
};

export default YsfHome;