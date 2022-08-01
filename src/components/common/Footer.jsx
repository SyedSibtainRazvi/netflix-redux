import React, { Fragment } from "react";
const Footer = () => {
    return (
        <Fragment>
            <div className='mt-20'>
                <hr />
                <div className='flex items-center p-4 font-thin w-full justify-center text-gray-300 cursor-pointer'>
                    <ul className='flex mt-10'>
                        <li className='mx-4 hover:text-white'>Audio and Subtitles</li>
                        <li className='mx-4 hover:text-white'>Media Center</li>
                        <li className='mx-4 hover:text-white'>Terms of Use</li>
                        <li className='mx-4 hover:text-white'>Help Center</li>
                        <li className='mx-4 hover:text-white'>Contact Us</li>
                    </ul>
                </div>
                <div className="flex items-center p-4 w-full justify-center text-gray-300">
                    <p>© Netflix India</p>
                </div>
            </div>
        </Fragment>
    )
};

export default Footer;