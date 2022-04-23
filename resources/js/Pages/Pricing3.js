import React from 'react';
import Footer3 from './Footer3';
import Header3 from './Header3';
import { Head } from '@inertiajs/inertia-react'
import { getsitename, gettoken } from './utils';

const YsfHome3 = () => {

    return (
        <div className='bg-white'>

<Head>
  <title>Pricing Plans</title>
</Head>
            <div>
          <Header3></Header3>
          <div className="bg-blue-900">
  <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
    <div className="text-center">
      <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
        Pricing
      </h2>
      <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
        The right price for you
      </p>
      <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
        Unlimited access to the hottest selling products. Cancel Anytime.
      </p>
    </div>
  </div>
  <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
    <div className="relative z-0">
      <div className="absolute inset-0 h-5/6 bg-blue-900 lg:h-2/3" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative lg:grid lg:grid-cols-7">
          <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
            <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
              <div className="flex-1 flex flex-col">
                <div className="bg-white px-6 py-10">
                  <div>
                    <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-hobby">
                      Hobby
                    </h3>
                    <div className="mt-4 flex items-center justify-center">
                      <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                        <span className="mt-2 mr-2 text-4xl font-medium">
                          $
                        </span>
                        <span className="font-extrabold">
                          46
                        </span>
                      </span>
                      <span className="text-xl font-medium text-gray-500">
                        /6 months
                      </span>
                    </div>
                    <div className="text-center text-red-500">
                      was $150
                    </div>
  
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                  <ul role="list" className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* Heroicon name: outline/check */}
                        <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L13 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base font-medium text-gray-500">
                        Social Proof Products
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* Heroicon name: outline/check */}
                        <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L13 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base font-medium text-gray-500">
                        AliExpress Hot Products
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* Heroicon name: outline/check */}
                        <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L13 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base font-medium text-gray-500">
                        AliExpress Winners Research
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* Heroicon name: outline/check */}
                        <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L13 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base font-medium text-gray-500">
                        10 New Products Added Daily
                      </p>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <div className="rounded-lg shadow-md">
                      <a href="/checkout" className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50" aria-describedby="tier-hobby">
                        Sign Up Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
            <div className="relative z-10 rounded-lg shadow-xl">
              <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600" aria-hidden="true" />
              <div className="absolute inset-x-0 top-0 transform translate-y-px">
                <div className="flex justify-center transform -translate-y-1/2">
                  <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                    Most popular
                  </span>
                </div>
              </div>
              <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                <div>
                  <h3 className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                    Pro
                  </h3>
                  <div className="mt-4 flex items-center justify-center">
                    <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                      <span className="mt-2 mr-2 text-4xl font-medium">
                        $
                      </span>
                      <span className="font-extrabold">
                        13
                      </span>
                    </span>
                    <span className="text-2xl font-medium text-gray-500">
                      /month
                    </span>
                  </div>
                  <div className="text-center text-red-500">
                    was $67
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                <ul role="list" className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      {/* Heroicon name: outline/check */}
                      <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L13 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-gray-500">
                      Sales Trends &amp; Key Indicators
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      {/* Heroicon name: outline/check */}
                      <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L13 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-gray-500">
                      Video Ads &amp; Reviews Files
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      {/* Heroicon name: outline/check */}
                      <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L13 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-gray-500">
                      Amazon, CJ Dropshipping, Aliexpress &amp; eBay Analysis
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      {/* Heroicon name: outline/check */}
                      <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L13 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-gray-500">
                      Suppliers, Facebook Audiences and Influencers
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      {/* Heroicon name: outline/check */}
                      <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L13 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-gray-500">
                      FB, Instagram &amp; TikTok Advert Analysis
                    </p>
                  </li>
                </ul>
                <div className="mt-10">
                  <div className="rounded-lg shadow-md">
                    <a href="/checkout" className="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700" aria-describedby="tier-growth">
                      Select Plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
            <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
              <div className="flex-1 flex flex-col">
                <div className="bg-white px-6 py-10">
                  <div>
                    <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-scale">
                      Yearly
                    </h3>
                    <div className="mt-4 flex items-center justify-center">
                      <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                        <span className="mt-2 mr-2 text-4xl font-medium">
                          $
                        </span>
                        <span className="font-extrabold">
                          72
                        </span>
                      </span>
                      <span className="text-xl font-medium text-gray-500">
                        /year
                      </span>
                    </div>
                    <div className="text-center text-red-500">
                      was $250
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                  <ul role="list" className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* Heroicon name: outline/check */}
                        <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L13 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base font-medium text-gray-500">
                        Everything From Pro Plan
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* Heroicon name: outline/check */}
                        <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L13 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base font-medium text-gray-500">
                        Saving Over $600
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* Heroicon name: outline/check */}
                        <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L13 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base font-medium text-gray-500">
                        Access Newest Features First
                      </p>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <div className="rounded-lg shadow-md">
                      <a href="/checkout" className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50" aria-describedby="tier-scale">
                        Start Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  <Footer3></Footer3>


</div>

        </div>
    );
};

export default YsfHome3;