'use client';

import React, { useState, useEffect } from 'react';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    axios
      .post('http://localhost:5000/api/payments/create-stripe-intent', {
        amount: 100, // $100 (make sure this is expected by backend)
      })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      })
      .catch((err) => {
        console.error('Failed to create intent:', err);
        setStatus('❌ Error loading payment form.');
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    setStatus('Processing...');

    const cardElement = elements.getElement(CardNumberElement);

    const { error: methodError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (methodError) {
      setStatus(`❌ ${methodError.message}`);
      return;
    }

    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id,
    });

    if (confirmError) {
      setStatus(`❌ ${confirmError.message}`);
    } else if (paymentIntent.status === 'succeeded') {
      setStatus('✅ Payment Successful!');
    }
  };

  const inputStyle = {
    style: {
      base: {
        fontSize: '16px',
        color: '#32325d',
        '::placeholder': { color: '#a0aec0' },
      },
      invalid: {
        color: '#e53e3e',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white rounded shadow space-y-4">
      <h3 className="text-lg font-bold mb-4">💳 Pay $100</h3>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Card Number</label>
        <CardNumberElement options={inputStyle} className="p-2 border rounded w-full" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Expiry Date</label>
        <CardExpiryElement options={inputStyle} className="p-2 border rounded w-full" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">CVC</label>
        <CardCvcElement options={inputStyle} className="p-2 border rounded w-full" />
      </div>

      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Pay $100
      </button>

      {status && <p className="mt-2 text-sm text-green-700 font-medium">{status}</p>}
    </form>
  );
};

export default CheckoutForm;
