import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../../components/CheckoutForm';

const stripePromise = loadStripe('pk_test_51RnbvF2ehihTJAp47oqOti4AlCE4CnwutJew2v5nyEwg1FQeWSHkkhO2zk2N1isLuZ9y2ZPkGChjEFDWmW5LHzUp00P8CM2y6D'); // Replace with your real public key

const StripePayment = () => {
  const hardcodedAmount = 10000; // $100 in cents
  const hardcodedBookingId = 'demoBooking123'; // Dummy ID

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Pay with Card</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm amount={hardcodedAmount} bookingId={hardcodedBookingId} />
      </Elements>
    </div>
  );
};

export default StripePayment;
