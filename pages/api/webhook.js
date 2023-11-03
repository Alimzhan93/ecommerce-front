import { mongooseConnect } from "@/lib/mongoose";
const stripe = require("stripe")(process.env.STRIPE_SK);
import {buffer} from 'micro'
const endpointSecret = "whsec_462e5a5de76d64f719d40563d0820b2ad1cf7f1650a87e99522b64b7f19d88cf";

export default async function handler(req,res){
    await mongooseConnect();
    const sig = req.headers['stripe-signature'];

    let event;
  
    try {
      event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
  
   
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object;
        console.log(paymentIntentSucceeded);
        break;
 
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

}

export const config ={
    api: {bodyParser:false,}
}

//flashy-noble-heal-led

//acct_1O7W5qE7a02gb5i2