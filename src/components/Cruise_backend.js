import React from 'react'
import one from '../images/one.png'
import two from '../images/two.png'
import three from '../images/three.png'

const Cruise_backend = () => {
    return (
        <section className='bg-white rounded-lg my-5' id="cruise_backend">
            <h2 className='font-semibold text-5xl capitalize text-center'>
                <span className='text-blue-700'>Cruise </span>through backend.
            </h2>
            <div className='sm:flex-col sm:mx-5 md:flex md:flex-row justify-around items-center my-20 md:mx-32'>
                <div className='sm:w-full md:w-1/2 md:mx-10'>
                    <h3 className='font-bold text-3xl'>Choose from 100+ integrations.</h3>
                    <p className='text-lg my-10 text-gray-500'>Vade Studio is designed to work seamlessly with your favourite databases or web services. <span className='font-semibold text-black'>Tweak a template or start from scratch.</span> <br /><br />
                        We've baked-in over 100 integrations directly into the platform, so you can integrate quickly and easily with other services, databases and applications out there.</p>
                </div>
                <figure>
                    <img src={one} alt="Img" />
                </figure>
            </div>
            <div className='sm:flex-col sm:mx-5 md:flex md:flex-row justify-around items-center my-20 md:mx-32'>
                <figure>
                    <img src={two} alt="Img" />
                </figure>
                <div className='sm:w-full md:w-1/2 md:mx-10'>
                    <h3 className='font-bold text-3xl'>Configure & Connect.</h3>
                    <p className='text-lg  my-10 text-gray-500'>Get all of your
                        <span className='font-semibold text-black'> data sources connected into a content mesh, in the same place, in real time.</span><br /><br />
                        This provides you a unified API for data navigation across all your integrated services.
                    </p>
                </div>
            </div>
            <div className='sm:flex-col sm:mx-5 md:flex md:flex-row justify-around items-center my-20 md:mx-32'>
                <div className='sm:w-full md:w-1/2 md:mx-10'>
                    <h3 className='font-bold text-3xl'>Test. Build. Deploy.</h3>
                    <p className='text-lg  my-10 text-gray-500'>
                        <span className='font-semibold text-black'>Play around with the generated APIs.
                        </span><br />
                        Once configured – test, build and deploy the unified API into our secure and reliable infrastructure.
                        <br /><br />Run your queries in the editor and use our intuitive interface to
                        <span className='font-semibold text-black'>navigate through your data - clean, organised & at your fingertips.
                        </span>

                    </p>
                </div>
                <figure>
                    <img src={three} alt="Img" />
                </figure>
            </div>
            <hr className='w-2/3 mx-auto my-10 text-4xl' />
            <p className='w-2/3 mx-auto text-xl my-5'>We're building an ecosystem where
                <span className='bg-yellow-300 leading-9'> anyone can get inspired</span> with application templates, discover novel ideas from top builders, and
                <span className='bg-yellow-300 leading-9'> publish revolutionary application</span> that could
                <span className='bg-yellow-300 leading-9'> change the world.</span>
            </p>
            <div className='text-center my-5'>
                <span className='inline-block border-2 rounded-lg border-blue-600'>
                    <input type="email" className='py-4 px-2 rounded-l-lg' placeholder='example@gmail.com' />
                    <button className='bg-blue-600 hover:bg-blue-700 text-white py-4 px-2'>Get Early Access</button>
                </span>
            </div>
            <a className='text-right' href="#">
                <p className='pr-10'>🔝 <br /> Back To Top</p></a>
        </section>
    )
}

export default Cruise_backend