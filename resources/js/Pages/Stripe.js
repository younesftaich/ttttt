import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {PaymentElement} from '@stripe/react-stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51KpvmbLTd53hu3rfITu6msMqPABAd1MdpYwNBVSWgWF6i8ncayCRRO6SDkwd2OfnYppcBLJNNbZRXR52HlRvpdyr009CNiPmEN');


const Stripe = () => {

    const CheckoutForm = () => {
        return (
          <form>
            <PaymentElement />
            <button>Submit</button>
          </form>
        );
      };


    const options = {
        // passing the client secret obtained from the server
        clientSecret: 'pi_3Kr0ZmLTd53hu3rf1ij2dEig_secret_Ov0O6MRAK1zjKoCXnIZ5Uzbqj',
      };
    return (
        <div className='text-white'>
            <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />

    </Elements>
        </div>
    );
};

export default Stripe;