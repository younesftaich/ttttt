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

    const redirect = () => {
        Inertia.get('/checkout', {  }, { replace: false })

    }
    const myRef = React.createRef();

    const [smartiptv, setsmartiptv] = useState(false);
    const [ibo, setibo] = useState(false);
    const [net, setnet] = useState(false);
    const [set, setset] = useState(false);
    const [fire, setfire] = useState(false);
    const [ott4k, set4k] = useState(false);
    const [tvmate, settvmate] = useState(false);
    const [magbox, setmag] = useState(false);
    const [formul, setformuler] = useState(false);
    const [smarters, setsmarters] = useState(false);
    const [gse, setgse] = useState(false);

    
    const reset = () => {

        setformuler(false)
        setmag(false)
        setsmartiptv(false)
        settvmate(false)
        set4k(false)
        setnet(false)
        setibo(false)
        setset(false)
        setsmarters(false)
        setgse(false)
        setfire(false)

        
        myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const smarttv = () => {

        reset()
        setsmartiptv(true)
        setnet(true)
        setibo(true)
        settvmate(true)
        setset(true)

    }
    const android = () => {
        reset()
        settvmate(true)
        set4k(true)
        setnet(true)
        setibo(true)
        setset(true)
        setsmarters(true)
        setgse(true)
    }
    const amazon = () => {
        reset()
        settvmate(true)
        set4k(true)
        setnet(true)
        setibo(true)
        setset(true)
        setsmarters(true)
        setgse(true)
        setfire(true)
    }
    const windows = () => {
        reset()
        setsmarters(true)

    }
    const mac = () => {
        reset()
        setsmarters(true)
        
        setgse(true)

    }
    const ios = () => {
        reset()
        
        settvmate(true)
        set4k(true)
        setsmarters(true)
        setgse(true)
    }
    const mag = () => {
        reset()
        setmag(true)
    }
    const formuler = () => {
        reset()
        setformuler(true)
    }

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    const toggleNav2 = () => {
        if (toggleMenu){

            setToggleMenu(!toggleMenu)
        }
    }

    const [toggleMenu,setToggleMenu] = useState(false)

    return (

        
     
                <div onClick={() => toggleNav2()} class=" bg-body bg-no-repeat bg-contain w-full h-full overflow-hidden">
                    <Head>
  <title>Setup - FAST IPTV SHOP</title>
</Head>


           <nav  className="max-w-[1500px] w-full  lg:px-5 mx-auto py-5 flex gap-8 xl:gap-28 items-center justify-between relative transition-all duration-300 ease-out">
 <br/> <a className='underline'  href="#" className="w-68 h-full object-cover px-5 lg:px-0"> <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646744485/fastt_1_nrmss1.png" alt="logo" className="w-full h-auto object-cover inline-block" /></a>
  <div onClick={(e) => {
        //stop clicks getting to the overlay
        e.stopPropagation();
      }} className= {toggleMenu ? "navigation nav-active" : "navigation "} >
    
    <div className='grid grid-cols-2'>
    <div className="w-full ml-3 flex justify-center lg:hidden ">
      <br/> <a className='underline'  href="#"><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646744485/fastt_1_nrmss1.png" alt="logo" className="w-40 h-auto object-contain " /></a>
    </div>

    <div onClick={ () => toggleNav() } className="w-full flex justify-center lg:hidden ">
      <div>
   
   
      <svg   className=" object-contain  w-8 h-8"  color='white' xmlns="http://www.w3.org/2000/svg" hiddenrole="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4l-66.1.3c-4.4 0-8-3.5-8-8c0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4l66-.3c4.4 0 8 3.5 8 8c0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2c0 4.4-3.6 8-8 8z"/></svg>
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




<div>
 
<div>
  <header className="max-w-[1050px] w-full mx-auto px-5">

    <div className="flex flex-col items-center ">
      <h1 className="heading-primary text-white mb-8">HOW TO INSTALL IPTV</h1>

      
    <div class="rounded-md bg-blue-50 p-4 max-w-lg mx-auto mb-4"><div class="flex"><div class="flex-shrink-0"><svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg></div><div class="ml-3"><h3 class="text-sm font-medium text-blue-800">Info &amp; Guideline</h3><div class="mt-2 text-sm text-blue-700"><ul class="list-disc pl-5 space-y-1"><li>Double Click on your device , Example : Smart Tv and scroll down , you'll find tutorials and available apps .</li><li>There are many available apps for each device , keep scrolling down so you see the other ones . </li></ul></div></div></div></div>
    
      <h2 className="text-primary-text text-center font-bold">
      Before beginning , you'll need M3u playlist link / Xtream codes api ( Username , Password and Url) or a Portal Url , we provide them immediately after the payment .    </h2>
      <button onClick={() => redirect()}  class="bg-green-600 mt-3  w-full px-4 py-4 text-white text-xl uppercase mb-4 mx-auto">  Click to order a subscription</button>
    </div>



  </header>
  <section className="max-w-[1100px] w-full px-5 mx-auto mt-20 p">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 thumbnails" aria-label="Carousel Pagination">
      <button onClick={() => smarttv()}   className="group w-full h-[85px] py-1.5 sm:h-44 bg-white rounded-lg flex flex-row sm:flex-col hover:bg-black-10 transition-all duration-300  selection: items-center justify-center" data-nav={0} aria-label="Carousel Page 1" aria-controls="tns1" tabIndex={-1}>
        <div className="flex max-w-[670px] w-full sm:max-w-full px-7 sm:px-0 sm:flex-col justify-between items-center">
        <Icon  className="text-black-10   transition-all duration-300" width={74} height={59} icon="pixelarticons:device-tv-smart" />

          <span className="text-lg text-black-10   transition-all duration-300 font-bold sm:mt-8">Smart TV</span>
        </div>
      </button>
      <button onClick={() => android()} className="group w-full h-[85px] py-1.5 sm:h-44 bg-white rounded-lg flex flex-row sm:flex-col hover:bg-black-10 transition-all duration-300  selection: items-center justify-center" data-nav={0} aria-label="Carousel Page 1" aria-controls="tns1" tabIndex={-1}>
        <div className="flex max-w-[670px] w-full sm:max-w-full px-7 sm:px-0 sm:flex-col justify-between items-center">
        <Icon  className="text-black-10   transition-all duration-300" width={74} height={59} icon="ant-design:android-filled" />

          <span className="text-lg text-black-10   transition-all duration-300 font-bold sm:mt-8">Android Device (TV, Box, Phone ...)
</span>
        </div>
      </button>
      <button onClick={() => amazon()} className="group w-full h-[85px] py-1.5 sm:h-44 bg-white rounded-lg flex flex-row sm:flex-col hover:bg-black-10 transition-all duration-300  selection: items-center justify-center" data-nav={0} aria-label="Carousel Page 1" aria-controls="tns1" tabIndex={-1}>
        <div className="flex max-w-[670px] w-full sm:max-w-full px-7 sm:px-0 sm:flex-col justify-between items-center">
        <Icon  className="text-black-10   transition-all duration-300" width={74} height={59} icon="fluent:usb-stick-24-filled" />

          <span className="text-lg text-black-10   transition-all duration-300 font-bold sm:mt-8">Firestick / Fire TV </span>
        </div>
      </button>
      <button onClick={() => windows()} className="group w-full h-[85px] py-1.5 sm:h-44 bg-white rounded-lg flex flex-row sm:flex-col hover:bg-black-10 transition-all duration-300  selection: items-center justify-center" data-nav={0} aria-label="Carousel Page 1" aria-controls="tns1" tabIndex={-1}>
        <div className="flex max-w-[670px] w-full sm:max-w-full px-7 sm:px-0 sm:flex-col justify-between items-center">
        <Icon  className="text-black-10   transition-all duration-300" width={74} height={59} icon="ant-design:windows-filled" />

          <span className="text-lg text-black-10   transition-all duration-300 font-bold sm:mt-8">Windows</span>
        </div>
      </button>
      <button onClick={() => mac()} className="group w-full h-[85px] py-1.5 sm:h-44 bg-white rounded-lg flex flex-row sm:flex-col hover:bg-black-10 transition-all duration-300  selection: items-center justify-center" data-nav={0} aria-label="Carousel Page 1" aria-controls="tns1" tabIndex={-1}>
        <div className="flex max-w-[670px] w-full sm:max-w-full px-7 sm:px-0 sm:flex-col justify-between items-center">
        <Icon  className="text-black-10   transition-all duration-300" width={74} height={59} icon="wpf:mac-os" />

          <span className="text-lg text-black-10   transition-all duration-300 font-bold sm:mt-8">Mac OS</span>
        </div>
      </button>
      <button onClick={() => ios()} className="group w-full h-[85px] py-1.5 sm:h-44 bg-white rounded-lg flex flex-row sm:flex-col hover:bg-black-10 transition-all duration-300  selection: items-center justify-center" data-nav={0} aria-label="Carousel Page 1" aria-controls="tns1" tabIndex={-1}>
        <div className="flex max-w-[670px] w-full sm:max-w-full px-7 sm:px-0 sm:flex-col justify-between items-center">
        <Icon  className="text-black-10   transition-all duration-300" width={74} height={59} icon="cib:app-store-ios" />

          <span className="text-lg text-black-10   transition-all duration-300 font-bold sm:mt-8">IOS (iPhone, iPad, Apple Tv)</span>
        </div>
      </button>
      <button onClick={() => mag()} className="group w-full h-[85px] py-1.5 sm:h-44 bg-white rounded-lg flex flex-row sm:flex-col hover:bg-black-10 transition-all duration-300  selection: items-center justify-center" data-nav={0} aria-label="Carousel Page 1" aria-controls="tns1" tabIndex={-1}>
        <div className="flex max-w-[670px] w-full sm:max-w-full px-7 sm:px-0 sm:flex-col justify-between items-center">
        <Icon  className="text-black-10   transition-all duration-300" width={74} height={59} icon="arcticons:box" />

          <span className="text-lg text-black-10   transition-all duration-300 font-bold sm:mt-8">Mag BOX / STB Emulator</span>
        </div>
      </button>
      <button onClick={() => formuler()} className="group w-full h-[85px] py-1.5 sm:h-44 bg-white rounded-lg flex flex-row sm:flex-col hover:bg-black-10 transition-all duration-300  selection: items-center justify-center" data-nav={0} aria-label="Carousel Page 1" aria-controls="tns1" tabIndex={-1}>
        <div className="flex max-w-[670px] w-full sm:max-w-full px-7 sm:px-0 sm:flex-col justify-between items-center">
        <Icon  className="text-black-10   transition-all duration-300" width={74} height={59} icon="fluent:device-meeting-room-16-filled" />

          <span className="text-lg text-black-10   transition-all duration-300 font-bold sm:mt-8">Formuler</span>
        </div>
      </button>
    </div>
  </section>
</div>

<div className='mb-4' ref={myRef}></div>

<section   >

<section className= {fire ? "max-w-[1100px] w-11/12  mx-auto mt-20 p   lg:px-14 bg-white rounded-lg        mb-12  box-shadow" : "hidden"} >

<div className="tab-1 px-8 py-10">


  <h1 className="text2xl md:text-[35px] text-black-10 font-semibold">Let's install downloader App first !</h1>
  <p className="text-secondary text-black-10">
  We'll need to install downloader app , so we can add iptv apps to the Firestick .



</p>
<p className="text-secondary text-black-10">
    
<br />

<br />
Step 1: Open Firestick Home

<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650290623/Install-IPTV-on-firestick-on-firestick-1_gpf1ef.png" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />

<br />
Step 2: Click on the Settings icon


<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650290835/Install-IPTV-on-firestick-on-firestick-2_oxfvc7.png" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />

<br />Step 3: Select My Fire TV


<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650290872/Install-IPTV-on-firestick-on-firestick-3_k9bbe2.png" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />

<br />
Step 4: Choose Developer Options

  <br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650290907/Install-IPTV-on-firestick-on-firestick-4_w7ojos.png" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />

<br />
Step 5: Click on Apps from Unknown Sources

<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650290937/Install-IPTV-on-firestick-on-firestick-5_s5cgip.png" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />

<br />
Step 6: Click on Turn On

<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650291663/Install-IPTV-on-firestick-on-firestick-6_lhiqpk.png" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />

<br />
Step 7: Navigate back to the home page and select the Find menu

<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650291610/Install-IPTV-on-firestick-on-firestick-7_kadlpz.png" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />

<br />
Step 8: Click on the Search option

<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650291563/Install-IPTV-on-firestick-on-firestick-8_zw00xn.png" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />

<br />
Step 9: Type “Downloader” and select it from the list

<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650291538/Install-IPTV-on-firestick-on-firestick-9_y4ogow.png" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />

<br />Step 10: Select the Downloader icon


<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650291513/Install-IPTV-on-firestick-on-firestick-10_k2wiry.png" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />

<br />Step 11: Click on “Download” and wait for the app to install


<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650291470/Install-IPTV-on-firestick-on-firestick-11_rixed8.png" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />

<br />Step 12: Wait until the download is completed


<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650291417/Install-IPTV-on-firestick-on-firestick-12_ij6cxj.png" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />

<br />Step 13: Click on Open to run the Downloader app


<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650291374/Install-IPTV-on-firestick-on-firestick-13_rewxkp.png" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />

<br />Step 14: Once the downloader opens, click on Allow


<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650291131/Install-IPTV-on-firestick-on-firestick-14_m0c65v.png" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />

<br />Step 15: A prompt will be displayed, click OK


<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650291099/Install-IPTV-on-firestick-on-firestick-15_lv3ocy.png" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />

<br />Step 16: By default Home tab would be open with a text box displayed on the right side


<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650291048/Install-IPTV-on-firestick-on-firestick-16_fshxxr.png" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />
<br />
Once the downloader app is installed , you'll be able to add any iptv app in apk format , scroll down to see the availabe apps !


</p>



</div>


</section>



<section className= {smartiptv ? "max-w-[1100px] w-11/12  mx-auto mt-20 p   lg:px-14 bg-white rounded-lg        mb-12  box-shadow" : "hidden"} >

<div className="tab-1 px-8 py-10">
<img  width={94} height={62} src="https://res.cloudinary.com/luxiptv/image/upload/v1650145918/smart-iptv-300x300_mvykpa.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />

  <h1 className="text2xl md:text-[35px] text-black-10 font-semibold">Smart IPTV</h1>
  <p className="text-secondary text-black-10">SIPTV is very user-friendly, so adding channels and playlists is not difficult at all. If you want to add IPTV channels to SIPTV then you are going to need a playlist from your IPTV service provider. The playlist can either be in M3U or TXT format as both are supported. Here’s how to add IPTV channels to SIPTV

</p>
<p className="text-secondary text-black-10">
    
<br />
<br />
1- Head over to SIPTV site : <br/> <a className='underline'  href='https://siptv.app/mylist/'>https://siptv.app/mylist/</a>
<br />
<br />
2- Add your device’s MAC address in the MAC field. 
<br />
<br />
3- Click the Browse button and select the M3U/TXT playlist field and paste the provided M3U Playlist Link.
<br />
<br />
4- Hit submit and restart the SIPTV app on your device.
<br />
<br />
Once the app is restarted, it should load up all the channels from your IPTV provider within minutes.


</p>



</div>


</section>

<section className= {ibo ? "  max-w-[1100px] w-11/12  mx-auto mt-20 p   lg:px-14 bg-white rounded-lg        mb-12  box-shadow" : "hidden"} >

<div className="tab-1 px-8 py-10">
<img  width={94} height={62} 

src="https://res.cloudinary.com/luxiptv/image/upload/v1650147040/FlWUkcJbDFetE2EE14mUBFBdfUic5OzwrQsiLPnAe1o5Y4KQEmhC_XTtJfDLbSRgFg_s180-rw_etciog.webp" alt="img" className=" group-hover:text-white transition-all duration-300" />

  <h1 className="text2xl md:text-[35px] text-black-10 font-semibold">IBO PLAYER</h1>
  <p className="text-secondary text-black-10">
      
  the IBO PLAYER app is available for many different operating systems and devices:
  
<br />
Play store Android and Android TV: <br/> <a className='underline'   href='https://play.google.com/store/apps/details?id=com.shoum.iboplayer
'>https://play.google.com/store/apps/details?id=com.shoum.iboplayer
</a>
<br />LG smart TV (WebOS): available in LG content store

<br />Samsung TV (Tizen OS): Available from the official Samsung App Store.

<br />Windows and Xbox: Install from Store Windows 10: Coming soon

<br />Amazon Fire TV (APK version) : ibodesk.com/y.apk
</p>
<p className="text-secondary text-black-10">
    
<br />
The steps to follow to configure your IPTV subscription on IBO Player:<br />
<br />
1. After installing the app, open it and you will see Device ID and Device Key of the device.<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650147309/iboniptvplayer_szrrgo.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />
2. On your PC, your mobile or any other device on which you have access to a browser, open the following address : 
<br/> <a className='underline' href='https://iboiptv.com/device/login' >https://iboiptv.com/device/login </a> 
<br />
<br />
3. Enter Device ID and Device Key, confirm humanity check and click Login. Follow the images below to add your M3U Playlist Link<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650147378/list-ibo-player1_vy5w4t.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />
<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650147413/list-ibo-player2_udobsj.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />

<br />

Once the app is restarted, it should load up all the channels from your IPTV provider within minutes.


</p>



</div>


</section>
<section className= {net ? "max-w-[1100px] w-11/12  mx-auto mt-20 p   lg:px-14 bg-white rounded-lg        mb-12  box-shadow" : "hidden"} >

<div className="tab-1 px-8 py-10">
<img  width={94} height={62} 

src="https://res.cloudinary.com/luxiptv/image/upload/v1650147763/0_nbv5s0.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />

  <h1 className="text2xl md:text-[35px] text-black-10 font-semibold">NET IPTV</h1>
  <p className="text-secondary text-black-10">
      
  Net IPTV application,which is best alternative for smart IPTV,  a new light developed app with good performance and player codec. The app available for All SAMSUNG Smart TV from 2016 (Tizen OS) and LG (WebOS 1,2 and 3 ).  NET IPTV official website announced coming soon for WebOS 3.5, 4.0 and 4.5, and available for all android devices, including TVs with android platform and Fire TV stick (from PlayStore and Direct download link).


  
<br />
Play store Android and Android TV: <br/> <a className='underline'  href='https://play.google.com/store/apps/details?id=com.net.iptv
'>https://play.google.com/store/apps/details?id=com.net.iptv
</a>
<br />LG smart TV (WebOS): available in LG content store

<br />Samsung TV (Tizen OS): Available from the official Samsung App Store.

<br />Amazon Fire TV (APK version) : netiptv.eu/netiptv.apk
</p>
<p className="text-secondary text-black-10">
    
<br />
Install IPTV subscription on NET IPTV
:<br />
<br />
1. Find Mac address
Open application and you can see the MAC address , If not , navigate to info ( by pressing RED button usually ).<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650147900/install-netIPTV-01-1030x579-1_einkdb.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />
2. Upload M3u link via portal
Open app upload page via browser :  <br/> <a className='underline'  href='https://netiptv.eu/Upload'>https://netiptv.eu/Upload</a> <br/>
Enter your  mac address  in MAC / APP ID field under UPLOAD m3U/URL row,  Then press Add List

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650147968/install-netIPTV-02-1030x579-1_dlhlge.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />
<br />
3. Enter m3u link and update
Enter The m3u link you received from provider in URL1 field
Click Update List
Done
You need back to net IPTV app and press number 0 on remote control to reload list.<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650147984/install-netIPTV-03-1030x579-1_sezo8y.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />


<br />

Once the app is restarted, it should load up all the channels from your IPTV provider within minutes.


</p>



</div>


</section>
<section className= {set ? "max-w-[1100px] w-11/12  mx-auto mt-20 p   lg:px-14 bg-white rounded-lg        mb-12  box-shadow" : "hidden"} >

<div className="tab-1 px-8 py-10">
<img  width={94} height={62} 

src="https://res.cloudinary.com/luxiptv/image/upload/v1650148493/images_xza5yz.png" alt="img" className=" group-hover:text-white transition-all duration-300" />

  <h1 className="text2xl md:text-[35px] text-black-10 font-semibold">SET IPTV</h1>
  <p className="text-secondary text-black-10">
      
  SET IPTV is new developed IPTV application and available for smart TV (Tizen OS) and Android devices 


  
<br />
Play store Android and Android TV: <br/> <a className='underline'  href='https://install-iptv.com/setiptv'>https://install-iptv.com/setiptv</a>



<br />LG smart TV (WebOS): available in LG content store

<br />Samsung TV (Tizen OS): Available from the official Samsung App Store.

<br />Amazon Fire TV (APK version) : https://install-iptv.com/setiptv


</p>
<p className="text-secondary text-black-10">
    
<br />
Install IPTV subscription on SET IPTV
:<br />
<br />
1. Find Mac address
Open application and you can see the MAC address , If not , navigate to info ( by pressing RED button usually ).<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650148672/install-set-iptv-01-1030x579-1_h7tqq9.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />
2. Navigate to SET IPTV web portal
Open the set IPTV upload page via browser : <br/> <a className='underline'  href='https://cms.manage-setiptv.com/set.app'> https://cms.manage-setiptv.com/set.app</a> <br/> and Choose Playlist link method :
<br />
Enter Mac address
Enter your Set IPTV mac address  in TV MAC field
<br />
Enter M3u Link
Enter The m3u link you received from your IPTV provider in m3u URL field
<br />
Click Send
<br />
<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650148760/install-set-iptv-02-1030x579-2_cul5zd.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />

<br />

Once the app is restarted, it should load up all the channels from your IPTV provider within minutes.


</p>



</div>


</section>

<section className= {ott4k ? "max-w-[1100px] w-11/12  mx-auto mt-20 p   lg:px-14 bg-white rounded-lg        mb-12  box-shadow" : "hidden"} >

<div className="tab-1 px-8 py-10">
<img  width={128} height={92} 

src="https://res.cloudinary.com/luxiptv/image/upload/v1650151619/NlqmmxD6lY2xyEkoCFXBK5xWWksvAwbVgskqpHcAuO0TlGddpUZWXCV-vooeRK-Pf58_w1536-h754-rw_kxnu8t.webp" alt="img" className=" group-hover:text-white transition-all duration-300 " />

  <h1 className="text2xl md:text-[35px] text-black-10 font-semibold">4K OTT APP </h1>
  <p className="text-secondary text-black-10">
      
  4K OTT is new developed IPTV application and available for iOS and Android devices and FireStick


  
<br />
Play store Android and Android TV: <br/> <a className='underline'  href='https://play.google.com/store/apps/details?id=com.ott4knewapp.app
'>https://play.google.com/store/apps/details?id=com.ott4knewapp.app
</a>


<br />iOS App: <br/> <a className='underline'  href='https://apps.apple.com/tr/app/4k-ott/id1552914260'>https://apps.apple.com/tr/app/4k-ott/id1552914260</a>

<br />Amazon Fire TV (APK version) : bit.ly/3vkVnp6


</p>
<p className="text-secondary text-black-10">
    
    
<br />
1. Install the application and open it , put the provided username and password .<br />

<br />
2. Login and Enjoy !
<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650151725/xfR5VGlgVLtXxgcA0_MnrN5dkyOFiLjvVsTvxXHlzuMW_RGsKlee9ZOh0cv2QeCbqZC8_w1536-h754-rw_qx4s3e.webp" alt="img" className=" group-hover:text-white transition-all duration-300" />



</p>



</div>


</section>
<section className= {tvmate ? "max-w-[1100px] w-11/12  mx-auto mt-20 p   lg:px-14 bg-white rounded-lg        mb-12  box-shadow" : "hidden"} >

<div className="tab-1 px-8 py-10">
<img  width={94} height={62} 

src="https://res.cloudinary.com/luxiptv/image/upload/v1650149564/images_ifg3g8.png" alt="img" className=" group-hover:text-white transition-all duration-300" />

  <h1 className="text2xl md:text-[35px] text-black-10 font-semibold">TiviMate</h1>
  <p className="text-secondary text-black-10">
      
  TiviMate available for android platform devices like Android TV, Amazon fire TV stick. the limited free version available in play store. Premium version cost 99 USD (one time) or 25 USD per year . But we provide you the premium unlocked version APK for download and install .


  
<br />
Play store Android and Android TV: <br/> <a className='underline'  href='https://play.google.com/store/apps/details?id=ar.tvplayer.tv
'>https://play.google.com/store/apps/details?id=ar.tvplayer.tv
</a>


<br />LG smart TV (WebOS): available in LG content store

<br />Samsung TV (Tizen OS): Available from the official Samsung App Store.

<br />Amazon Fire TV (APK version) : https://install-iptv.com/tivimate


</p>
<p className="text-secondary text-black-10">
    
<br />
Install IPTV subscription on SET IPTV
:<br />
<br />
1. Add playlist
<br />
After install IPTV open it and select ADD PLAYLIST.
<br />
You able to add playlist in every method like download m3u link (local playlist), Remote playlist (Enter URL) and Xtream Code Login . 
<br />We recommend to connect as Xtream Code method .install TiviMate step 1


<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650149677/tivimate-step1_jjsjec.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />
2. Enter Xtream Codes details
<br />
choose Xtream Codes login and enter Xtream connection details which IPTV provider must provided to you . Then choose next.
<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650149797/tivimate-step2_gercsy.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />

<br />

Once the app is restarted, it should load up all the channels from your IPTV provider within minutes.


</p>



</div>


</section>
<section className= {formul ? "max-w-[1100px] w-11/12  mx-auto mt-20 p   lg:px-14 bg-white rounded-lg        mb-12  box-shadow" : "hidden"} >

<div className="tab-1 px-8 py-10">
    

  <h1 className="text2xl md:text-[35px] text-black-10 font-semibold">Install IPTV on Formuler z7+

</h1>
  
<p className="text-secondary text-black-10">
    
<br />

<br />
1. Find mac address
Open MyTV online app and you will see the screen below . The mac address shown on the top in ID section
You need provide this MAC address to your provider or enter it in your advanced IPTV dashboard in MAG section

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650150847/formuler-z7-install_pneic1.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />
2. Enter Portal URL
Press + Edit Portal to add Portal URL
Enter an optional Portal nickname ( install iptv in example) and add your IPTV provider server URL (ask from your provider)


<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650150875/formuler-z7-install-edit-portal_lkppvs.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />

Once the app is restarted, it should load up all the channels from your IPTV provider within minutes.


</p>



</div>


</section>

<section className= {magbox ? "max-w-[1100px] w-11/12  mx-auto mt-20 p   lg:px-14 bg-white rounded-lg        mb-12  box-shadow" : "hidden"} >

<div className="tab-1 px-8 py-10">
    

  <h1 className="text2xl md:text-[35px] text-black-10 font-semibold">Install IPTV on Mag Box

</h1>
  
<p className="text-secondary text-black-10">
    
<br />
Connect MAG DEVICE to TV and the Internet. Then do as follows
<br />


1- Go to Settings — System Settings — Servers — Portals
<br />


2- Set Portal 1: IPTV
<br />


3- Set Portal 1 URL ( see your subscription details ), contact us if you don't find it
<br />


4- Set Portal 2 Name leave this empty add this only If you order the second subscription
<br />


5- Set Portal 2 URL leave this empty add this only If you order the second subscription
<br />


6- Save everything
<br />


7- Reboot device
<br />


After the box is restarted, wait until the TV screen shows the channels.




</p>



</div>


</section>

<section className= {smarters ? "max-w-[1100px] w-11/12  mx-auto mt-20 p   lg:px-14 bg-white rounded-lg        mb-12  box-shadow" : "hidden"} >

<div className="tab-1 px-8 py-10">
<img  width={94} height={62} 

src="https://res.cloudinary.com/luxiptv/image/upload/v1650150442/yriw_rw_4r1MPmxBSYhn7m_kPmyt2ORCChPEPfNpAYtXwXXjO4Acj7gy_wJI5-6b43M_s180-rw_xwynjq.webp" alt="img" className=" group-hover:text-white transition-all duration-300" />

  <h1 className="text2xl md:text-[35px] text-black-10 font-semibold">IPTV smarters pro
</h1>
  <p className="text-secondary text-black-10">
      
  IPTV Smarters is an  Application which released based on Xtream Codes in beginning , But M3u link and local file list supported in last updates too. Friendly and easy GUI is most important point in this app . This app available for Android , iOS and Smart TVs ( WebOS, Tizen , Android). 



  
<br />
Download for Android devices : <br/> <a className='underline'  href='https://play.google.com/store/apps/details?id=com.nst.smartersplayer&hl=fr&gl=US'>https://play.google.com/store/apps/details?id=com.nst.smartersplayer&hl=fr&gl=US</a>
Download for iOS devices : <br/> <a className='underline'  href='https://apps.apple.com/us/app/iptv-smarters-player/id1383614816'>https://apps.apple.com/us/app/iptv-smarters-player/id1383614816</a>
<br />
Download for MAC OS X : <br/> <a className='underline'  href='https://www.iptvsmarters.com/download?download=mac'>https://www.iptvsmarters.com/download?download=mac</a>
<br />
Download for Amazon Fire TV stick : iptvsmarters.com/smarters.apk
<br />
Download for Windows PC : <br/> <a className='underline'  href='https://www.iptvsmarters.com/download?download=windows'>https://www.iptvsmarters.com/download?download=windows</a>
<br />



</p>
<p className="text-secondary text-black-10">
    
<br />
Install IPTV on IPTV smarters
:<br />
<br />
1. Choose your list type
Open the application and you need choose which method you want add list , We recommend use Xtream Codes


<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650150554/iptv-smarter-step1_a4biqv.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />
2. Enter Xtream connection details
Choose a name for your list (it can be any name ) in first field and Xtream codes USERNAME , PASSWORD and SERVER URL which provided by your IPTV service provider then press ADD USER

<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650150656/iptv-smarter-step2_cvhw0g.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />
3. You are logged in
Now you logged in and Live TV , VOD and series available to watch .
Done.



<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650150614/iptv-smarter-step3_u6bq1c.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />

<br />

Once the app is restarted, it should load up all the channels from your IPTV provider within minutes.


</p>



</div>


</section>

<section className= {gse ? "max-w-[1100px] w-11/12  mx-auto mt-20 p   lg:px-14 bg-white rounded-lg        mb-12  box-shadow" : "hidden"} >

<div className="tab-1 px-8 py-10">
<img  width={94} height={62} 

src="https://res.cloudinary.com/luxiptv/image/upload/v1650149977/GSE-SMART-IPTV-abonnement-1024x614_abofsu.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />

  <h1 className="text2xl md:text-[35px] text-black-10 font-semibold">GSE smart IPTV</h1>
  <p className="text-secondary text-black-10">
      
  GSE smart IPTV app available for iPhone ,iPad , Android smart phones and tablets , tvOS and MAC OS X. You can download it from Play store or App store .



  
<br />
Download for Android devices : <br/> <a className='underline'  href='https://play.google.com/store/apps/details?id=com.gsetech.smartiptv'>https://play.google.com/store/apps/details?id=com.gsetech.smartiptv</a>

<br/>
Download for iOS devices : <br/> <a className='underline'  href='https://apps.apple.com/app/gse-smart-iptv/id1028734023'>https://apps.apple.com/app/gse-smart-iptv/id1028734023</a>
<br />
Download for MAC OS X : <br/> <a className='underline'  href='https://apps.apple.com/se/app/gse-smart-iptv-pro/id1293083751?l=en&mt=12'>https://apps.apple.com/se/app/gse-smart-iptv-pro/id1293083751?l=en&mt=12</a>
<br />
Download for Amazon Fire TV stick : gsesmartiptv.com/dlgseiptv.php
<br />



</p>
<p className="text-secondary text-black-10">
    
<br />
Bring IPTV channels to GSE smart IPTV
:<br />
<br />
1. Navigate to XTREAM CODES API



<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650150078/gse-smart-iptv-install-01_de7qpf.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />
2. Press + icon

<br />

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650150219/gse-smart-iptv-install-02_dkbvfw.png" alt="img" className=" group-hover:text-white transition-all duration-300" />
<br />
3. Enter Xtream based details


<br />

Enter Xtream based connection details : Server , username and password which provided by your IPTV provider. (the details in picture are example and you need enter your own )
You need set a name in Any Name field , It can be any name as you like .
Turn ON Autoupdate EPG
Then press login

<img  

src="https://res.cloudinary.com/luxiptv/image/upload/v1650150192/gse-smart-iptv-install-03_ibdxns.jpg" alt="img" className=" group-hover:text-white transition-all duration-300" />

<br />

Once the app is restarted, it should load up all the channels from your IPTV provider within minutes.


</p>



</div>


</section>

      
</section>



</div>


            
        </div>
    );
};

export default YsfHome;