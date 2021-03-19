import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

function CheckoutForm(){
    return (
        <div>Sla</div>
    );
};

function Checkout(){
    return (
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
    );
};

export default Checkout;
