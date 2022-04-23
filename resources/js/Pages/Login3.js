import React from 'react';

import { Head } from '@inertiajs/inertia-react'
import Footer3 from './Footer3';
import Header3 from './Header3';
const Login3 = () => {
    return (
        
        <div className='bg-white'>

        <Head>
          <title>Login </title>
        </Head>
                  <Header3></Header3>
            <section className="py-[26px]   px-5 lg:px-14 bg-white rounded-lg max-w-[1050px] w-full mx-auto mt-12 mb-12  box-shadow">

   <h1 class="heading-primary  mb-8">Login to your account
</h1>

   <div className="relative">
              <label className="absolute px-2 ml-2 -mt-3 font-light text-gray-600 bg-white">Email Address</label>
              <input  name='email' type="text" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="janedoe@email.com" />
            </div>
   <div className="relative mb-4 ">
              <label className="absolute px-2 ml-2 -mt-3 font-light  text-gray-600 bg-white">Password</label>
              <input     type="password" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Password" />
            </div>
            
 

            <button    className="bg-purple-600  w-full px-4 py-4 text-white text-base uppercase mb-4 mx-auto">  Login 
      </button>
   <button   className="bg-purple-600  w-full px-4 py-4 text-white text-base uppercase mb-4 mx-auto">  Reset Password 
      </button>
   <button    className="bg-purple-600  w-full px-4 py-4 text-white text-base uppercase mb-4 mx-auto">  Sign Up 
      </button>
</section>


<Footer3></Footer3>
        </div>
    );
};

export default Login3;