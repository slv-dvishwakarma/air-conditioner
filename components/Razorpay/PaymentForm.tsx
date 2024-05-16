// PaymentForm.tsx
import React, { useEffect } from 'react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const PaymentForm: React.FC = () => {
  useEffect(() => {
    // Ensure Razorpay script is loaded before initializing
    if (!window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        console.log('Razorpay script loaded.');
      };
    }
  }, []);

  const paymentAmount = 10000; // Amount in paisa (1 INR = 100 paisa)

  const openRazorpay = () => {
    if (window.Razorpay) {
      const options = {
        key: 'rzp_test_UeQD9MCnjj4aAn', // Enter your Razorpay API Key
        amount: paymentAmount,
        currency: 'INR',
        name: 'Dhamaka Deals',
        description: 'Payment for AC Booking',
        image: '/logo.png',
        theme: {
          color: '#F37254',
        },
        handler: function (response: any) { // Modify this type if you know the response structure
          console.log(response);
          alert('Payment Successful');
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      console.error('Razorpay script not loaded.');
      // Handle error or provide fallback
    }
  };

  return (
    <div>
      <button onClick={openRazorpay} className='bg-[#FF5500] shadow-[0_10px_30px_rgba(0,0,0,0.1)] text-white text-sm font-bold  uppercase  px-[40px] py-[15px] rounded-xl flex m-auto'>Book Now</button>
    </div>
  );
};
