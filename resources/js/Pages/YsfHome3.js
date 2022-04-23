import React from 'react';
import Footer3 from './Footer3';
import Header3 from './Header3';
import { Head } from '@inertiajs/inertia-react'
import { getsitename, gettoken } from './utils';

const YsfHome3 = () => {

    return (
        <div className='bg-white'>

<Head>
  <title>Home</title>
</Head>
            <div>
          <Header3></Header3>
  <div className="flex flex-col text-center md:h-96 items-center justify-center mt-20">
    <div className="w-2/3 sm:w-3/4 md:w-3/5 pt-10">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 px-8 lg:mt-24 ">
        The Best 
        <span className="  text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-800 ">Winning Product</span>
        Resource, Made For
        <span className="  text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-800 ">Dropshippers</span>
      </h1>
      <h2 className="w-2/3  sm:w-3/4 md:w-3/5 mt-6 text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 mx-auto ">Gain access to the largest &amp; fastest growing collection of winning products</h2>
      <h3 className="mt-8 text-lg md:text-xl   lg:text-1xl uppercase text-gray-400 ">Join 20k+ happy customers and grab your free account today.</h3>
    </div>
    <div className="mt-12">
      <a href="/pricing-plans" className="w-full bg-purple-800 hover:bg-purple-900 hover:shadow-lg text-white py-3 px-6  uppercase text-xl">
        <span className="mr-3">Free Sign Up</span>
        {/* <i class="far fa-chevron-circle-right"></i> Font Awesome fontawesome.com */}
      </a>
    </div>
  </div><div className="bg-gray-50 mt-36 pt-8 pb-24">
    <div className="text-center text-4xl md:text-5xl lg:font-bold pt-10 ">
      <h3 className="text-gray-800">Three Awesome Features In One</h3>
    </div>
    <div className="max-w-7xl mx-auto">
      <div className="max-w-7xl flex justify-center flex-col md:flex-row mt-14">
        <div className="w-full md:w-1/3 ">
          <div className=" bg-white rounded-md mt-4 mx-4 px-4 pt-6 pb-10 h-full border-b-8 border-purple-700">
            <h4 className="text-center text-2xl my-4"> Social Proof Products</h4>
            <p className="text-xl">Over 2500 Top Selling Products from Facebook, Instagram &amp; NOW TikTok. Every product is rigorously tested to ensure it has good engagement &amp; sales before it makes it into our database</p>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className=" bg-white rounded-md mt-4  mx-4 px-4 pt-6 pb-10 h-full border-b-8 border-purple-700">
            <h4 className="text-center text-2xl my-4">AliExpress Hot Products</h4>
            <p className="text-xl">Our systems are analysing hundreds of aliexpress products every single day. Be the first to get access to the fastest growing collection of best selling products.</p>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className=" bg-white rounded-md mt-4 mx-4 px-4 pt-6 pb-10 h-full border-b-8 border-purple-700">
            <h4 className="text-center text-2xl my-4">Aliexpress Winners Research</h4>
            <p className="text-xl">Search and analyse any product on the Aliexpress platform. Instantly view extensive sales figures, profits and much more. Be one of the first to find the latest trending products</p>
          </div>
        </div>
      </div>
    </div>
  </div><div className="bg-white mt-24 ">
    <div className="text-center text-3xl md:text-4xl lg:font-bold pt-10 max-w-2xl mx-20 sm:mx-24 md:mx-auto">
      <h3 className="text-gray-800">Dropship Spy allows you to build your <span className=" text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-800 ">business</span>
        by taking the hard work out of <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-800 ">dropshipping.</span>
      </h3>
      <div className="mt-8">
        <a href="/pricing-plans" className="w-full bg-purple-800 hover:bg-purple-900 hover:shadow-lg text-white py-3 px-6  uppercase text-xl">
          <span className="mr-3">Sign Up Free</span>
          {/* <i class="far fa-chevron-circle-right"></i> Font Awesome fontawesome.com */}
        </a>
      </div>
    </div>
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center flex-wrap flex-col md:flex-row pt-8">
        <div className="w-full md:w-1/3 lg:w-1/4 mt-4 md:mt-12 mb-10 text-center">
          <div className="mx-6 py-3 md:px-2 sm:px-4 lg:px-4 bg-gray-50 rounded h-full mt-14 ">
            <div className="bg-gradient-to-r from-blue-400 to-purple-800 w-16 h-16 p-2 text-white rounded-lg mx-auto -mt-12 shadow-md">
              <svg className="svg-inline--fa fa-megaphone fa-w-18 h-12 w-12 text-2xl" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="megaphone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M32 176c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32 11.38 0 20.9-6.28 26.57-15.22l106.99 32.3c-3.35 9.76-5.56 20.04-5.56 30.92 0 52.94 43.06 96 96 96 44.49 0 81.66-30.57 92.5-71.7L480 448V64L58.57 191.22C52.9 182.28 43.38 176 32 176zm179.29 190.88l91.47 27.61C297.95 415.92 278.85 432 256 432c-26.47 0-48-21.53-48-48 0-6.05 1.24-11.79 3.29-17.12zM560 32h-32c-8.84 0-16 7.16-16 16v416c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16z" /></svg>{/* <i class="fas fa-megaphone h-12 w-12 text-2xl"></i> Font Awesome fontawesome.com */}
            </div>
            <h4 className="mt-6 text-2xl">Social Proof Ads</h4>
            <p className="mt-4 text-lg">Every social proof item comes with detailed info, allowing for instant access to engagement scores, likes, comments, shares, and views</p>
          </div>
        </div><div className="w-full md:w-1/3 lg:w-1/4 mt-4 md:mt-12 mb-10 text-center">
          <div className="mx-6 py-3 md:px-2 sm:px-4 lg:px-4 bg-gray-50 rounded h-full mt-14 ">
            <div className="bg-gradient-to-r from-blue-400 to-purple-800 w-16 h-16 p-2 text-white rounded-lg mx-auto -mt-12 shadow-md">
              <svg className="svg-inline--fa fa-amazon fa-w-14 h-12 w-12 text-2xl" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="amazon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg><path fill="currentColor" d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z" /></svg>{/* <i class="fab fa-amazon h-12 w-12 text-2xl"></i> Font Awesome fontawesome.com */}
            </div>
            <h4 className="mt-6 text-2xl">Amazon Analysis</h4>
            <p className="mt-4 text-lg">Product ranks &amp; keywords for US, UK, Germany, France and other Amazon sites</p>
          </div>
        </div><div className="w-full md:w-1/3 lg:w-1/4 mt-4 md:mt-12 mb-10 text-center">
          <div className="mx-6 py-3 md:px-2 sm:px-4 lg:px-4 bg-gray-50 rounded h-full mt-14 ">
            <div className="bg-gradient-to-r from-blue-400 to-purple-800 w-16 h-16 p-2 text-white rounded-lg mx-auto -mt-12 shadow-md">
              <svg className="svg-inline--fa fa-flask fa-w-14 h-12 w-12 text-2xl" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="flask" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg><path fill="currentColor" d="M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6h-172z" /></svg>{/* <i class="fas fa-flask h-12 w-12 text-2xl"></i> Font Awesome fontawesome.com */}
            </div>
            <h4 className="mt-6 text-2xl">Key Indicators</h4>
            <p className="mt-4 text-lg">We're the only company to offer key indicators &amp; engagement scores for every single product. More information means better decisions</p>
          </div>
        </div><div className="w-full md:w-1/3 lg:w-1/4 mt-4 md:mt-12 mb-10 text-center">
          <div className="mx-6 py-3 md:px-2 sm:px-4 lg:px-4 bg-gray-50 rounded h-full mt-14 ">
            <div className="bg-gradient-to-r from-blue-400 to-purple-800 w-16 h-16 p-2 text-white rounded-lg mx-auto -mt-12 shadow-md">
              <svg className="svg-inline--fa fa-analytics fa-w-18 h-12 w-12 text-2xl" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="analytics" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M510.62 92.63C516.03 94.74 521.85 96 528 96c26.51 0 48-21.49 48-48S554.51 0 528 0s-48 21.49-48 48c0 2.43.37 4.76.71 7.09l-95.34 76.27c-5.4-2.11-11.23-3.37-17.38-3.37s-11.97 1.26-17.38 3.37L255.29 55.1c.35-2.33.71-4.67.71-7.1 0-26.51-21.49-48-48-48s-48 21.49-48 48c0 4.27.74 8.34 1.78 12.28l-101.5 101.5C56.34 160.74 52.27 160 48 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-4.27-.74-8.34-1.78-12.28l101.5-101.5C199.66 95.26 203.73 96 208 96c6.15 0 11.97-1.26 17.38-3.37l95.34 76.27c-.35 2.33-.71 4.67-.71 7.1 0 26.51 21.49 48 48 48s48-21.49 48-48c0-2.43-.37-4.76-.71-7.09l95.32-76.28zM400 320h-64c-8.84 0-16 7.16-16 16v160c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V336c0-8.84-7.16-16-16-16zm160-128h-64c-8.84 0-16 7.16-16 16v288c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V208c0-8.84-7.16-16-16-16zm-320 0h-64c-8.84 0-16 7.16-16 16v288c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V208c0-8.84-7.16-16-16-16zM80 352H16c-8.84 0-16 7.16-16 16v128c0 8.84 7.16 16 16 16h64c8.84 0 16-7.16 16-16V368c0-8.84-7.16-16-16-16z" /></svg>{/* <i class="fas fa-analytics h-12 w-12 text-2xl"></i> Font Awesome fontawesome.com */}
            </div>
            <h4 className="mt-6 text-2xl">Trending Data</h4>
            <p className="mt-4 text-lg">See historical sales and profits data, plus weekly live sales tracking graphs</p>
          </div>
        </div><div className="w-full md:w-1/3 lg:w-1/4 mt-4 md:mt-12 mb-10 text-center">
          <div className="mx-6 py-3 md:px-2 sm:px-4 lg:px-4 bg-gray-50 rounded h-full mt-14 ">
            <div className="bg-gradient-to-r from-blue-400 to-purple-800 w-16 h-16 p-2 text-white rounded-lg mx-auto -mt-12 shadow-md">
              <svg className="svg-inline--fa fa-video-plus fa-w-18 h-12 w-12 text-2xl" aria-hidden="true" focusable="false" data-prefix="far" data-icon="video-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M543.9 96c-6.2 0-12.5 1.8-18.2 5.7L416 170.1v-58.3c0-26.4-23.2-47.8-51.8-47.8H51.8C23.2 64 0 85.4 0 111.8v288.4C0 426.6 23.2 448 51.8 448h312.4c28.6 0 51.8-21.4 51.8-47.8v-58.3l109.7 68.3c5.7 4 12.1 5.7 18.2 5.7 16.6 0 32.1-13 32.1-31.5V127.5C576 109 560.5 96 543.9 96zM368 398.9c-.6.4-1.8 1.1-3.8 1.1H51.8c-2 0-3.2-.6-3.8-1.1V113.1c.6-.4 1.8-1.1 3.8-1.1h312.4c2 0 3.2.6 3.8 1.1v285.8zm160-43.7l-112-69.8v-58.7l112-69.8v198.3zM288 232h-56v-56c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v56h-56c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h56v56c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-56h56c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z" /></svg>{/* <i class="far fa-video-plus h-12 w-12 text-2xl"></i> Font Awesome fontawesome.com */}
            </div>
            <h4 className="mt-6 text-2xl">Video Ads</h4>
            <p className="mt-4 text-lg">We make video ads from actual footage, plus slideshows, one with text and one without. Free to use with any platform</p>
          </div>
        </div><div className="w-full md:w-1/3 lg:w-1/4 mt-4 md:mt-12 mb-10 text-center">
          <div className="mx-6 py-3 md:px-2 sm:px-4 lg:px-4 bg-gray-50 rounded h-full mt-14 ">
            <div className="bg-gradient-to-r from-blue-400 to-purple-800 w-16 h-16 p-2 text-white rounded-lg mx-auto -mt-12 shadow-md">
              <svg className="svg-inline--fa fa-user-unlock fa-w-20 h-12 w-12 text-2xl" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-unlock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg><path fill="currentColor" d="M224,256A128,128,0,1,0,96,128,128,128,0,0,0,224,256Zm96,64a63.07,63.07,0,0,1,8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5H296.9a174.1,174.1,0,0,1-145.8,0H134.4A134.43,134.43,0,0,0,0,422.4V464a48,48,0,0,0,48,48H328.9a63.58,63.58,0,0,1-8.9-32Zm288-32H464V208.67c0-17.44,13.67-32.18,31.1-32.66A32,32,0,0,1,528,208a16,16,0,0,0,16,16h17a15,15,0,0,0,15-15h0c0-43.28-34-79.51-77.26-80.95A80,80,0,0,0,416,208v80H384a32,32,0,0,0-32,32V480a32,32,0,0,0,32,32H608a32,32,0,0,0,32-32V320A32,32,0,0,0,608,288ZM496,432a32,32,0,1,1,32-32A32,32,0,0,1,496,432Z" /></svg>{/* <i class="fas fa-user-unlock h-12 w-12 text-2xl"></i> Font Awesome fontawesome.com */}
            </div>
            <h4 className="mt-6 text-2xl">Audiences</h4>
            <p className="mt-4 text-lg">Specialised audiences built for you to use on your FB adverts. Targeting the right buyer is half the battle</p>
          </div>
        </div><div className="w-full md:w-1/3 lg:w-1/4 mt-4 md:mt-12 mb-10 text-center">
          <div className="mx-6 py-3 md:px-2 sm:px-4 lg:px-4 bg-gray-50 rounded h-full mt-14 ">
            <div className="bg-gradient-to-r from-blue-400 to-purple-800 w-16 h-16 p-2 text-white rounded-lg mx-auto -mt-12 shadow-md">
              <svg className="svg-inline--fa fa-comment-alt-lines fa-w-16 h-12 w-12 text-2xl" aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment-alt-lines" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288zm-96-216H144c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-96 96H144c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z" /></svg>{/* <i class="far fa-comment-alt-lines h-12 w-12 text-2xl"></i> Font Awesome fontawesome.com */}
            </div>
            <h4 className="mt-6 text-2xl">Ad Copy</h4>
            <p className="mt-4 text-lg">We write multiple ad copies for each product, including re-targeting ads, which you can use as your marketing material. Another time saver</p>
          </div>
        </div><div className="w-full md:w-1/3 lg:w-1/4 mt-4 md:mt-12 mb-10 text-center">
          <div className="mx-6 py-3 md:px-2 sm:px-4 lg:px-4 bg-gray-50 rounded h-full mt-14 ">
            <div className="bg-gradient-to-r from-blue-400 to-purple-800 w-16 h-16 p-2 text-white rounded-lg mx-auto -mt-12 shadow-md">
              <svg className="svg-inline--fa fa-hand-holding-usd fa-w-18 h-12 w-12 text-2xl" aria-hidden="true" focusable="false" data-prefix="far" data-icon="hand-holding-usd" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M551.9 312c-31.1-26.4-69.3-16.1-88.4-1.8l-60.4 45.5h-3.3c-.2-38-30.5-67.8-69.2-67.8h-144c-28.4 0-56.3 9.4-78.5 26.3L79.8 336H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h80l41.3-31.5c14-10.7 31.4-16.5 49.4-16.5h144c27.9 0 29.1 40.2-1.1 40.2h-59.8c-7.6 0-13.8 6.2-13.8 13.8v.1c0 7.6 6.2 13.8 13.8 13.8h134.5c9.7 0 19.2-3.2 26.9-9l61.3-46.1c8.3-6.2 20.5-6.7 28.4 0 10.1 8.5 9.3 23.1-.9 30.7L419.4 455c-7.8 5.8-17.2 9-26.9 9H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h376.8c19.9 0 39.3-6.5 55.2-18.5l100.8-75.9c16.6-12.5 26.5-31.5 27.1-52 .7-20.5-8.1-40.1-24-53.6zM257.6 144.3l50.1 14.3c3.6 1 6.1 4.4 6.1 8.1 0 4.6-3.8 8.4-8.4 8.4h-32.8c-3.6 0-7.1-.8-10.3-2.2-4.8-2.2-10.4-1.7-14.1 2l-17.5 17.5c-5.3 5.3-4.7 14.3 1.5 18.4 9.5 6.3 20.4 10.1 31.8 11.5V240c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-17.6c30.3-3.6 53.4-31 49.3-63-2.9-23-20.7-41.3-42.9-47.7l-50.1-14.3c-3.6-1-6.1-4.4-6.1-8.1 0-4.6 3.8-8.4 8.4-8.4h32.8c3.6 0 7.1.8 10.3 2.2 4.8 2.2 10.4 1.7 14.1-2l17.5-17.5c5.3-5.3 4.7-14.3-1.5-18.4-9.5-6.3-20.4-10.1-31.8-11.5V16c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v17.6c-30.3 3.6-53.4 31-49.3 63 2.9 23 20.6 41.3 42.9 47.7z" /></svg>{/* <i class="far fa-hand-holding-usd h-12 w-12 text-2xl"></i> Font Awesome fontawesome.com */}
            </div>
            <h4 className="mt-6 text-2xl">Profit Calculator</h4>
            <p className="mt-4 text-lg">Figure out how many sales you need to turn a profit. Adjust margin and advertising to cost. You'll know exactly how to price each product</p>
          </div>
        </div><div className="w-full md:w-1/3 lg:w-1/4 mt-4 md:mt-12 mb-10 text-center">
          <div className="mx-6 py-3 md:px-2 sm:px-4 lg:px-4 bg-gray-50 rounded h-full mt-14 ">
            <div className="bg-gradient-to-r from-blue-400 to-purple-800 w-16 h-16 p-2 text-white rounded-lg mx-auto -mt-12 shadow-md">
              <svg className="svg-inline--fa fa-typewriter fa-w-16 h-12 w-12 text-2xl" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="typewriter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M312 384h16a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm64 0h16a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-256 0h16a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm360-192h-32v-82.73a32.07 32.07 0 0 0-9.38-22.65L361.38 9.38A32 32 0 0 0 338.75 0H112a48 48 0 0 0-48 48v144H32a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32v128a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V320a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32zM352 45.25L402.75 96H352zM96 48a16 16 0 0 1 16-16h208v64a32 32 0 0 0 32 32h64v64h-50.75a32 32 0 0 0-22.62 9.37l-13.26 13.26a32 32 0 0 1-22.62 9.37h-101.5a32 32 0 0 1-22.62-9.37l-13.26-13.26a32 32 0 0 0-22.62-9.37H96zm352 400a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V320h384zm32-160H32v-64h114.75L160 237.25A63.58 63.58 0 0 0 205.25 256h101.5A63.58 63.58 0 0 0 352 237.25L365.25 224H480zM144 440a8 8 0 0 0 8 8h208a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H152a8 8 0 0 0-8 8zm40-56h16a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm64 0h16a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8z" /></svg>{/* <i class="fal fa-typewriter h-12 w-12 text-2xl"></i> Font Awesome fontawesome.com */}
            </div>
            <h4 className="mt-6 text-2xl">Reviews</h4>
            <p className="mt-4 text-lg">CSV files for each product. Easily upload them to the shopify reviews app. Build confidence in the products you sell</p>
          </div>
        </div><div className="w-full md:w-1/3 lg:w-1/4 mt-4 md:mt-12 mb-10 text-center">
          <div className="mx-6 py-3 md:px-2 sm:px-4 lg:px-4 bg-gray-50 rounded h-full mt-14 ">
            <div className="bg-gradient-to-r from-blue-400 to-purple-800 w-16 h-16 p-2 text-white rounded-lg mx-auto -mt-12 shadow-md">
              <svg className="svg-inline--fa fa-parachute-box fa-w-16 h-12 w-12 text-2xl" aria-hidden="true" focusable="false" data-prefix="far" data-icon="parachute-box" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M511.9 175c-9.1-75.6-78.4-132.4-158.3-158.7 36.3 39.2 62.2 100.1 62.4 174.8L314.6 320H280V192h104C384 76.8 315.1 0 256 0S128 76.8 128 192h104v128h-34.6L96 191.1c.2-74.7 26.1-135.6 62.4-174.8C78.5 42.7 9.2 99.5.1 175c-1.1 9.1 6.8 17 16 17h19.5l124.7 158.5c0 .5-.3 1-.3 1.5v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V352c0-.5-.3-1-.3-1.5L476.4 192h19.5c9.2 0 17.1-7.8 16-17zM304 456c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-80c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v80z" /></svg>{/* <i class="far fa-parachute-box h-12 w-12 text-2xl"></i> Font Awesome fontawesome.com */}
            </div>
            <h4 className="mt-6 text-2xl">Suppliers</h4>
            <p className="mt-4 text-lg">Each product has the best suppliers from sites like Aliexpress and CJDropshipping. Once you start selling you'll be able to buy from a number of quality vendors</p>
          </div>
        </div><div className="w-full md:w-1/3 lg:w-1/4 mt-4 md:mt-12 mb-10 text-center">
          <div className="mx-6 py-3 md:px-2 sm:px-4 lg:px-4 bg-gray-50 rounded h-full mt-14 ">
            <div className="bg-gradient-to-r from-blue-400 to-purple-800 w-16 h-16 p-2 text-white rounded-lg mx-auto -mt-12 shadow-md">
              <svg className="svg-inline--fa fa-comet fa-w-16 h-12 w-12 text-2xl" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="comet" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg><path fill="currentColor" d="M236.90992,256.02578,205.6384,192.55713a15.29617,15.29617,0,0,0-27.45706,0l-31.27152,63.46865L77.04451,266.223a15.3143,15.3143,0,0,0-8.46875,26.13668l50.60356,49.33391-12,69.72841a15.3707,15.3707,0,0,0,15.08595,17.9531,14.985,14.985,0,0,0,7.11329-1.81641L191.90987,394.631l62.53131,32.92768A15.26524,15.26524,0,0,0,276.64043,411.422l-11.92775-69.72841,50.5938-49.33391a15.347,15.347,0,0,0-8.53126-26.13668Zm5.46289,62.75772-12.03712,11.73435,2.83594,16.57029,6.22266,36.38081L206.82,366.31663l-14.91017-7.85155-14.91017,7.85155-32.53715,17.13278,6.25392-36.32806L153.57,330.53153l-12.05274-11.75194L115.08362,293.0101l36.4473-5.32031,16.64846-2.42968,7.43555-15.09177,16.29494-33.07222,16.29494,33.07222,7.43555,15.09177,16.64846,2.42968,36.50589,5.32812ZM504.754,7.23124a24.64079,24.64079,0,0,0-24.5-6.20116C447.97068,10.825,371.3749,34.616,312.87484,59.92256c-.8125-2.90624-1.71875-5.5-2.40625-7.90428a31.09684,31.09684,0,0,0-17.72073-19.58981,30.52225,30.52225,0,0,0-26.375,1.18749C223.154,56.11007,116.36877,114.79943,58.05621,173.08255c-77.40828,77.3866-77.40828,203.45086,0,280.83746a198.87425,198.87425,0,0,0,280.91241,0c58.28326-58.28311,116.90832-165.05444,139.50405-208.24578a31.37146,31.37146,0,0,0,1.1875-26.40035,31.034,31.034,0,0,0-19.59572-17.69919c-2.40626-.6875-5-1.5-7.90626-2.39062,25.002-58.18741,49.002-134.96659,58.81451-167.365A24.76358,24.76358,0,0,0,504.754,7.23124Zm-89.2833,195.2497-7.90626,16.90232,18,5.18554c9.68751,2.81249,18.40627,5.40624,24.40628,6.20311-21.81253,41.89447-78.59579,145.37088-133.72085,200.45087-64.877,64.89053-170.69158,64.98428-235.59985,0s-64.90827-170.66185,0-235.53675C135.74575,140.59041,239.24781,83.80729,279.87285,61.51631c2,6.59179,4.59376,15.29295,7.375,24.99215l5.21875,17.99607,16.90823-7.90429c51.375-24.08785,126.28333-48.28508,166.69158-60.67178C463.752,76.30926,439.37692,151.49274,415.47065,202.48094Z" /></svg>{/* <i class="fal fa-comet h-12 w-12 text-2xl"></i> Font Awesome fontawesome.com */}
            </div>
            <h4 className="mt-6 text-2xl">Influencers</h4>
            <p className="mt-4 text-lg">A Complete list of all the Instagram influencers in the same niche as the products. Each influencer includes prices and services.</p>
          </div>
        </div>
      </div>
    </div>
  </div><div className="text-center my-20 text-4xl md:text-5xl lg:font-bold py-8 font-bold border-t-2 border-gray-100 text-gray-800">Dropshippers <span className=" text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-800 ">Love</span>  Dropship Spy</div><div className="flex flex-col md:flex-row mx-auto justify-center items-center max-w-7xl">
    <div className=" text-gray-100 w-full md:w-1/3 h-full">
      <div className="m-4 bg-blue-800">
        <div className>
          <img src="https://res.cloudinary.com/dpiovvtes/image/upload/v1650732679/photo-1_omekxs.jpg" alt="Happy Person Image" className="w-full object-cover shadow h-96" />
        </div>
        <div className="p-4">
          <p className="text-lg">“Great tool, great support. They keep adding features for the same price. Definetly a must-buy for the ecommerce enterpeneur!”</p>
          <h5 className="text-lg mt-4">Gaston Davids</h5>
        </div>
      </div>
    </div>
    <div className=" text-gray-100 w-full md:w-1/3 ">
      <div className="m-4 bg-purple-800">
        <div className>
          <img src="https://res.cloudinary.com/dpiovvtes/image/upload/v1650732733/photo-16_ytetdc.jpg" alt="Happy Person Image" className="w-full object-cover shadow h-96" />
        </div>
        <div className="p-4">
          <p className="text-lg">“Amazing customer support, very helpful to get me on the right path with the products! Haven’t used the service for to long yet. So far so good!”</p>
          <h5 className="text-lg mt-4">Christoffer Jonsson</h5>
        </div>
      </div>
    </div>
    <div className=" text-gray-100 w-full md:w-1/3 ">
      <div className="m-4 bg-blue-800">
        <div className>
          <img src="https://res.cloudinary.com/dpiovvtes/image/upload/v1650732841/photo-9_g1mpf2.jpg" alt="Happy Person Image" className="w-full object-cover shadow h-96" />
        </div>
        <div className="p-4">
          <p className="text-lg">“Best and most legitimate platform ever”</p>
          <h5 className="text-lg mt-4">Dropship Member Since 2018</h5>
        </div>
      </div>
    </div>
  </div><div className="relative bg-white pt-16 pb-32 overflow-hidden mt-14">
    <div className="relative">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
          <div>
            <div>
              <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                {/* Heroicon name: outline/inbox */}
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </span>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                New For October 2021
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                AliExpress Product Research. Search any Aliexpress Product from within Dropship Spy and get instant live sales data.
              </p>
              <div className="mt-6 pt-4">
                <a href="/pricing-plans" className="w-full bg-purple-800 hover:bg-purple-900 hover:shadow-lg text-white py-3 px-6  uppercase text-xl">
                  <span className="mr-3">Sign Up Now FREE</span>
                  {/* <i class="far fa-chevron-circle-right"></i> Font Awesome fontawesome.com */}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://res.cloudinary.com/dpiovvtes/image/upload/v1650732928/aliexpress-research_c0vep7.png" alt="Inbox user interface" />
          </div>
        </div>
      </div>
    </div>
  </div><div className="bg-indigo-700">
    <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
        <span className="block">Boost your productivity.</span>
        <span className="block">Start using Dropship Spy today.</span>
      </h2>
      <p className="mt-4 text-xl leading-6 text-indigo-200">It's FREE to sign up and view over 10,000 products that have already been added.</p>
      <a href="/pricing-plans" className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
        Sign up for free
      </a>
    </div>
  </div><section aria-labelledby="faq-heading" className="bg-white">
    <div className="max-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="max-w-xl">
        <h2 id="faq-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">Frequently asked questions</h2>
        <p className="mt-4 text-base text-gray-500">Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find what you're looking for, you can always message us with your enquiry by clicking the speech bubble at the bottom of the page.</p>
      </div>
      <dl className="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-4">
        <div>
          <dt className="text-lg text-gray-900">
            How do you find winning products?
          </dt>
          <dd className="mt-3 text-md text-gray-500">
            Our teams are trained to use our unique in-house tools that give them elite and sensitive information on products across the internet. They monitor, track and research products until they find a fantastic item that fits under winning or promising products.
          </dd>
        </div>
        <div>
          <dt className=" text-lg text-gray-900">
            Do I need a Shopify account?
          </dt>
          <dd className="mt-3 text-md text-gray-500">
            No, you can use Dropship Spy for any eCommerce platform. All our information is digital and usable how you wish. That said, we do integrate with shopify which automates alot of processes.
          </dd>
        </div>
        <div>
          <dt className=" text-lg text-gray-900">
            Can I cancel anytime?
          </dt>
          <dd className="mt-3 text-md text-gray-500">
            No problem! You are in complete control of your membership. You can cancel at anytime by clicking the account button once you are logged in. You can also pause your subscription. This will stop your billing, which you can resume at a later date.
          </dd>
        </div>
        <div>
          <dt className="text-lg text-gray-900">
            How do I add products to my site?
          </dt>
          <dd className="mt-3 text-md text-gray-500">
            You have two options. You can download or copy all the content you want and add it manually, Or you can connect your Shopify store and import each product with a  few clicks.
          </dd>
        </div>
        {/* More questions... */}
      </dl>
    </div>
  </section>

  <Footer3></Footer3>


</div>

        </div>
    );
};

export default YsfHome3;