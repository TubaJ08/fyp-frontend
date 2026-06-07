// app/checkout/page.tsx or components/StripeWrapper.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51RnbvF2ehihTJAp47oqOti4AlCE4CnwutJew2v5nyEwg1FQeWSHkkhO2zk2N1isLuZ9y2ZPkGChjEFDWmW5LHzUp00P8CM2y6D'); // ✅ Your publishable key

const CheckoutPage = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    axios
      .post('http://localhost:5000/api/payments/create-stripe-intent', {
        amount: 10000, // 💵 $100 in cents
      })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      })
      .catch((err) => {
        console.error('Error creating PaymentIntent:', err);
      });
  }, []);

  const appearance = { theme: 'stripe' };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      ) : (
        <p className="text-center mt-8">Loading payment form...</p>
      )}
    </>
  );
};

export default CheckoutPage;
