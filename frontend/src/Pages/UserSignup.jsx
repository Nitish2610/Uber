import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ userData, setUserData ] = useState({})
  const submithandler = (e)=>{
    e.preventDefault();
    const newUserData = {
      fullName: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };
  
    setUserData(newUserData);

    console.log(newUserData);
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
  }
  return (
   
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber-logo"
        />
        <form onSubmit={submithandler}>
        <h3 className="text-lg font-medium">What's your email</h3>
        <div className='flex gap-4 mb-6'>
        <input
            required
            className="bg-[#eeeeee]  w-1/2 rounded border px-4 py-2 text-lg placeholder:text-base"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
          />
          <input
            required
            className="bg-[#eeeeee] w-1/2 rounded border px-4 py-2 text-lg placeholder:text-base"
            type="text"
            placeholder="Last name"
            value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
          />
        </div>
          <h3 className="text-lg font-medium">What's your email</h3>
          <input
            required
            className="bg-[#eeeeee] mb-6 rounded border px-4 py-2 w-full text-lg placeholder:text-base"
            type="email"
            placeholder="abc@gmail.com"
            value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
          />
          <h3 className="text-lg font-medium">Enter Password</h3>
          <input
            required
            className="bg-[#eeeeee] mb-6 rounded border px-4 py-2 w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded border px-4 py-2 w-full text-lg">
            Login
          </button>
          </form>
          <p className="text-center mb-2">ALready have an account?<Link to='/login' className="text-blue-600">Login here</Link></p>
      </div>

      <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
    </div>
    
  )
}

export default UserSignup
