import React from 'react';
import Footer3 from './Footer3';
import Header3 from './Header3';
import { Head } from '@inertiajs/inertia-react'
import { getsitename, gettoken } from './utils';

const YsfHome3 = () => {

    return (
        <div className='bg-white'>

<Head>
  <title>Frequently Asked Questions</title>
</Head>
            <div>
          <Header3></Header3>
          <div className="bg-gray-900">
  <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Frequently asked questions
      </h2>
      <p className="mt-4 text-gray-400">Here are some of the most popular questions we get asked.</p>
    </div>
    <div className="mt-20">
      <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
        <div>
          <dt className="font-semibold text-white">
            What is Dropship Spy?
          </dt>
          <dd className="mt-3 text-gray-400">
            Dropship Spy is an eCommerce software company. We build drop shipping tools to help our clients with their eCommerce ventures.
          </dd>
        </div><div>
          <dt className="font-semibold text-white">
            Do you intergrate with Shopify?
          </dt>
          <dd className="mt-3 text-gray-400">
            Yes, using our "Shopify Connect" app, you can connected unlimited stores to your Dropship Spy account. Then you'll be able to import any winning, social proof or promising products to your stores.
          </dd>
        </div><div>
          <dt className="font-semibold text-white">
            How do you find products?
          </dt>
          <dd className="mt-3 text-gray-400">
            Our teams are trained to use our unique in-house tools that give them elite and sensitive information on products across the internet. They monitor, track and research products until they find a fantastic item that fits under winning or promising products. We also track sales data from Aliexpress to help us determine trending products.
          </dd>
        </div><div>
          <dt className="font-semibold text-white">
            Do I Need a Shopify Account to Use Dropship Spy?
          </dt>
          <dd className="mt-3 text-gray-400">
            No, you can use Dropship Spy for any eCommerce platform. All our information is digital and usable how you wish. That said, we do integrate with shopify which automates alot of processes.
          </dd>
        </div><div>
          <dt className="font-semibold text-white">
            Can you tell me about suppliers?
          </dt>
          <dd className="mt-3 text-gray-400">
            For every product that we upload to our site, we’ll also include up to 3 suppliers from Aliexpress. We find the best suppliers for each product based on rating, products sold, product reviews &amp; price.
          </dd>
        </div><div>
          <dt className="font-semibold text-white">
            Do you have any training courses?
          </dt>
          <dd className="mt-3 text-gray-400">
            We do not provide drop ship training or video tutorials at this time. You can however find plenty on YouTube about our services and/or dropshipping in general.
          </dd>
        </div><div>
          <dt className="font-semibold text-white">
            Can I cancel anytime?
          </dt>
          <dd className="mt-3 text-gray-400">
            No problem! You are in complete control of your membership. You can cancel at anytime by clicking the account button once you are logged in. You can also pause your subscription. This will stop your billing, which you can resume at a later date.
          </dd>
        </div><div>
          <dt className="font-semibold text-white">
            What is the refund policy?
          </dt>
          <dd className="mt-3 text-gray-400">
            As a general rule, once you have access to our services and information, we don't provide refunds. However we will do our best to help solve any issues your may have. If you are having any problems, please contact support and our team will do their best to find a solution.
          </dd>
        </div><div>
          <dt className="font-semibold text-white">
            Where do I get a discount code?
          </dt>
          <dd className="mt-3 text-gray-400">
            We usually offer discounts over our website's homepage. Feel free to drop us a message to see if we have any current offers available, but we cannot guaruntee that we will do.
          </dd>
        </div><div>
          <dt className="font-semibold text-white">
            Cancelling my subscription?
          </dt>
          <dd className="mt-3 text-gray-400">
            Cancelling your active subscription will stop the billing and it's renewal. Do this before the next billing cycle and you won't be charged again. You can return at anytime. You can cancel at anytime and if there are days left from a previous payment, you will still have the access until they run out.
          </dd>
        </div><div>
          <dt className="font-semibold text-white">
            I Forgot to cancel, can you do anything?
          </dt>
          <dd className="mt-3 text-gray-400">
            If you have forgotten to cancel your membership, you will need to contact us immediately. We may be able to offer a small refund if you havent used our services.
          </dd>
        </div><div>
          <dt className="font-semibold text-white">
            My payment failed what does that mean?
          </dt>
          <dd className="mt-3 text-gray-400">
            If a payment fails your access will be stopped. Our payment processors will attempt to take payment upto three times. If payment continues to fail, your subscription will be auto cancelled.
          </dd>
        </div><div>
          <dt className="font-semibold text-white">
            How can I save products?
          </dt>
          <dd className="mt-3 text-gray-400">
            You can save items into your favorites by clicking the heart icon on each product.
          </dd>
        </div><div>
          <dt className="font-semibold text-white">
            Download video adverts?
          </dt>
          <dd className="mt-3 text-gray-400">
            To download the free video adverts you just need to click the link and it will open in a new window. After this you just need to right click and 'save as'.
          </dd>
        </div><div>
          <dt className="font-semibold text-white">
            How Do I Import reviews to Shopify?
          </dt>
          <dd className="mt-3 text-gray-400">
            You must install the Shopify reviews app (built by Shopify). Then click settings and then import. This will allow you to upload the reviews file. In order to make sure that the reviews match up to your product, the first column in the file must be the same as the products url. For Example: if your product name is “doggy hair brush” and the url is www.yourstorename.com/products/doggy-hair-brush . Then the first column in the reviews file must be doggy-hair-brush.
          </dd>
        </div><div>
          <dt className="font-semibold text-white">
            How do I import products to Shopify?
          </dt>
          <dd className="mt-3 text-gray-400">
            Once you have connected your store (Goto Dashboard), you can either quick import a product from the product page, or save products to your import list to import later.
          </dd>
        </div>
        {/* More questions... */}
      </dl>
    </div>
  </div>
</div>


  <Footer3></Footer3>


</div>

        </div>
    );
};

export default YsfHome3;