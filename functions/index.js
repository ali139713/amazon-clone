/* eslint-disable */

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  // eslint-disable-next-line max-len
  'sk_test_51HpMDYEyGT5AepuernFQ6kqCb8MFLOttDEwSs9vlaqONgUU1YyrjA9XWhq5vMa8g2NghwkBZVHDB3c0KyOrxxXsQ00k2wcHx8p'
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/payments/create', async (request, response) => {
  try {
    const total = request.query.total;
    console.log('Payment Request Received!!!', total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: 'usd',
    });

    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
    console.log('PAYMENT INTENT!!!!', paymentIntent.client_secret);
  } catch (err) {
    console.log('ERROR', err);
  }
});

exports.api = functions.https.onRequest(app);
