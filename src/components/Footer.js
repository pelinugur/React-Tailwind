import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-8'>REACT.</h1>
                <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium</p>
                <div className='flex justify-between md:w-[75%] my-6 '>
                    <FaDribbbleSquare size={30} />
                    <FaFacebookSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-2  flex justify-between mt-8'>
                <div>
                    <h6 className='text-medium text-gray-400 font-bold'>Solutions</h6>
                    <ul>
                        <li className='text-sm py-2'>Analytics</li>
                        <li className='text-sm py-2'>Marketing</li>
                        <li className='text-sm py-2'>Commerce</li>
                        <li className='text-sm py-2'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='text-medium text-gray-400 font-bold'>Support</h6>
                    <ul>
                        <li className='text-sm py-2'>Pricing</li>
                        <li className='text-sm py-2'>Documentation</li>
                        <li className='text-sm py-2'>Guides</li>
                        <li className='text-sm py-2'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='text-medium text-gray-400 font-bold'>Company</h6>
                    <ul>
                        <li className='text-sm py-2'>About</li>
                        <li className='text-sm py-2'>Blog</li>
                        <li className='text-sm py-2'>Jobs</li>
                        <li className='text-sm py-2'>Press</li>
                        <li className='text-sm py-2'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400 font-bold'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer