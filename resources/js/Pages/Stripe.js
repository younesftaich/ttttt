import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51KpvmbLTd53hu3rfITu6msMqPABAd1MdpYwNBVSWgWF6i8ncayCRRO6SDkwd2OfnYppcBLJNNbZRXR52HlRvpdyr009CNiPmEN');

function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'pi_3KqmngLTd53hu3rf1pzOXYYZ',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};