import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='sm:flex-col md:flex md:flex-row bg-gray-700 text-white justify-around py-14'>
                    <div>
                        <span>© 2022 Vade Labs Pvt. Ltd.</span>
                    </div>
                    <div>
                        <p className='text-gray-400 text-center'>About us</p>
                        <p>We're a group of enthusiasts who love helping creatives build software applications.</p>
                    </div>
                    <div>
                        <p className='text-gray-400 text-center'>Contact us</p>
                        <p>🌎 hello@vadelabs.com<br />📞 +91-7829887887</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer