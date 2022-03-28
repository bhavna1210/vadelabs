import { React, useState } from 'react'
import tourImg from '../images/takeTour.png'
const Main = () => {
    const [showThankButton, setShowThankButton] = useState(false);
    const [emailId, setEmailId] = useState("");

    //- Show a thank you button on clicking get early access button
    const emailSend = () => {
        // if (emailId) {
        setShowThankButton(true);
        // }
    }
    return (
        <>
            <section id="#" className="bg-gradient-to-r from-slate-50 to-slate-200">
                <div className='sm:flex-col md:flex md:flex-row justify-around items-center h-screen'>
                    <div className='sm:w-full lg:w-2/5 sm:text-center lg:text-left'>
                        <h1 className='font-bold text-6xl'>Integrate APIs In Minutes</h1>
                        <div className='font-semibold text-2xl my-10'>Get ridiculously creative with your products and let us do the hard work for you!</div>
                        <div className='inline-block w-full flex border-2 rounded-lg border-blue-600'>
                            <input type="email" className='py-4 px-10 rounded-l-lg ' placeholder='example@gmail.com' required />
                            <button className='flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 px-2' onClick={emailSend}>Get Early Access</button>
                        </div>

                        {showThankButton ? (
                            <div className=' mt-5'>
                                <button className='w-full border-2 rounded-lg border-blue-600 bg-blue-600 hover:bg-blue-700 text-white py-4 px-16'> Thank  You  For  Your  Interest! </button>
                                <div className='flex justify-between mt-2'>
                                    <p>✔ An email has been sent to your inbox.</p>
                                    <p>Didn’t receive? <br />
                                        <span className='text-red-500'>↪ Resend</span>
                                    </p>
                                </div>
                            </div>
                        ) : false}

                    </div>
                    <figure>
                        <img src={tourImg} className="img-28rem" alt="Take A Tour" />
                    </figure>
                </div>
            </section>
        </>)
}

export default Main