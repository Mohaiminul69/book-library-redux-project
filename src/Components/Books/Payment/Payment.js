import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51JypbOAGDt5ordsCYdrLJuiGD6kBwwg7nyoZSFz6hVSyKKjNCkrIyIHDgXIqFWvX8W7YtNYwkIMmh55mooiccpP100QZBQ8gt5');
const Payment = () => {

    const { price } = useParams()

    return (
        <div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        price={price}
                    />
                </Elements>

            </div>

        </div>
    );
};

export default Payment;