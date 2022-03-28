import React from 'react'
import logo from '../images/logo.jpg'

const Nav = () => {
    return (
        <>
            <nav className='fixed top-0 left-0 right-0'>
                <div className='sm:flex-col md:flex md:flex-row justify-between bg-slate-50 py-2 px-5 shadow'>
                    <a className='flex items-center' href='https://www.linkedin.com/company/vadelabs/' target='_blank'>
                        <img src={logo} alt="Vadelabs Logo" className='w-10 cursor-pointer' />
                        <span className='mt-4 text-2xl font-semibold cursor-pointer'>adelabs</span>
                        </a>
                    <ul className='flex pt-3 items-center justify-around space-x-8 font-medium capitalize'>
                        <li><a className='cursor-pointer' href='#skip_hassle'>Skip the hassle</a></li>
                        <li><a className='cursor-pointer' href="#cruise_backend">Cruise through backend</a></li>
                    </ul>
                    <button className='bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4'>Get Early Access</button>
                </div>
            </nav>
        </>
    )
}

export default Nav