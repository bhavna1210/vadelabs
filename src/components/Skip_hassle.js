import React from 'react'
import skip_hassle from '../images/skipHassle.jpg'
const Skip_hassle = () => {
  return (
    <>
      <section className='pt-10 bg-white rounded-lg' id="skip_hassle">
        <p className="w-2/3 mx-auto text-xl bg-[url('../images/skipHassle.jpg')]">We understand your needs to <span className='bg-yellow-300'>build integrated applications</span> in today’s hyper-connected world. <span className='bg-yellow-300 leading-9'>  Skip the hassle</span> to repeat a cumbersome process <span className='bg-yellow-300 leading-9'>for each unique integration.</span> Join us to build reliable connections with multiple providers and <span className='bg-yellow-300 leading-9'>cruise through backend</span> with ease.</p>
        <hr className='w-2/3 mx-auto my-10 text-4xl'/>
        <h2 className='font-semibold text-5xl capitalize text-center'><span className='text-blue-700'>Skip</span> the hassle</h2>
        <figure>
          <img src={skip_hassle} alt="Skip Hassle" className='mx-auto my-10 img-28rem '/>
        </figure>
      </section>
    </>
  )
}

export default Skip_hassle