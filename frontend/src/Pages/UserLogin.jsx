import React, { useState } from "react";
import { use } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [userData,setUserData] = useState({});
  const submithandler = (e)=>{
    e.preventDefault();
    const userinfo = ({
      email:email,
      password:password
    })
    setUserData(userinfo);
    setEmail('');
    setPassword('');
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
          <input
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded border px-4 py-2 w-full text-lg placeholder:text-base"
            type="email"
            placeholder="abc@gmail.com"
          />
          <h3 className="text-lg font-medium">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded border px-4 py-2 w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded border px-4 py-2 w-full text-lg">
            Login
          </button>
          <p className="text-center mb-2">New Here?<Link to='/signup' className="text-blue-600">Create New Account</Link></p>
        </form>
      </div>

      <div>
        <Link to='/captain-login' className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded border px-4 py-2 w-full text-lg">
          Sign in as Captain
        </Link>
      </div>
    </div>
  
  );
};

export default UserLogin;
