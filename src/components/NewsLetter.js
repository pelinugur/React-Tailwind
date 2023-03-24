import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-100'>
                    <input className='p-3 flex w-full rounded-md text-black outline-0' type="email" placeholder="Enter Email" />
                    <button className='bg-[#00df9a] w-[200px] h-[50px] rounded-md font-medium my-6 mx-auto py-3 text-black '>Notify Me</button>
                </div>
            </div>
            <p>
            We care bout the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span> 
            </p>
        </div>
    </div>
  )
}

export default NewsLetter