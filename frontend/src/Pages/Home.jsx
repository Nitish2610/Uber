import React from 'react'

const Home = () => {
  return (
    <div>
       <div className='bg-cover pt-8 bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] flex flex-col justify-between h-screen'>
         <img className='w-16 ml-8' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='uber-logo' />
         <div className='bg-white pb-7 py-4 px-4 mb-2'>
              <h1 className='text-3xl font-bold text-black mb-2'>Get Started with Uber</h1>
              <button className='w-full text-2xl p-2 font-bold bg-black text-white'>Continue</button>
         </div>
       </div>
    </div>
  )
}

export default Home
