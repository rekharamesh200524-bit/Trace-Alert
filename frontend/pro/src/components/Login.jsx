import axios from 'axios'
import React, { useState } from 'react' // Adjusted import to use React and useState
import { ShieldAlert } from 'lucide-react'; // Adding icon import for better styling
import { useNavigate } from 'react-router-dom';

// Renamed to App to ensure it runs correctly
const App = () => {
  const navigate=useNavigate()
  const [val, setVal] = useState({
    email: "",
    password: ""
  })

  const change = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value })
  }

  const click = async (e) => {
    e.preventDefault()
    if (!val.email && !val.password) {
      alert("All fields are required")
      return
    }

    try {
      const login = await axios.post('http://localhost:3000/api/login', val)
      console.log(login.data.data)
      alert(login.data.msg)
      localStorage.setItem('user',JSON.stringify(login.data.data))
      navigate('/profile')
    } catch (error) {
      const Err = error.response?.data.msg || error.message
      alert(Err)
      console.log(Err)
    }
  }

  return (
    // Outer container: Dark background with animated grid and radial glow
    <div className="min-h-screen bg-gray-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-inter text-gray-100 relative overflow-hidden">
      
      {/* Background styling for the active system grid */}
      <style>
        {`
          @keyframes pulse-light {
            0% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.8; }
            100% { transform: scale(1); opacity: 0.5; }
          }
          .background-grid {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 40px 40px;
            opacity: 0.5;
            z-index: 0;
          }
          .radial-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 900px;
            height: 900px;
            background: radial-gradient(circle, rgba(255, 0, 0, 0.25) 0%, rgba(255, 0, 0, 0) 70%);
            transform: translate(-50%, -50%);
            animation: pulse-light 5s infinite ease-in-out;
            pointer-events: none;
            z-index: 1;
          }
        `}
      </style>
      
      <div className="background-grid"></div>
      <div className="radial-glow"></div>
      
      {/* Content wrapper to ensure it's above the background elements */}
      <div className="relative z-10">
        
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            {/* Central Warning Icon: High contrast Red and White, replaces original span */}
            <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/90 transform hover:scale-110 transition duration-300 border-4 border-red-400">
              <ShieldAlert className="text-white w-14 h-14" strokeWidth={2.5} />
            </div>
          </div>
          <h2 className="mt-8 text-center text-5xl font-extrabold text-white tracking-widest [text-shadow:0_0_8px_rgba(255,0,0,0.8)]">
            TRACE ALERT
          </h2>
          <p className="mt-3 text-center text-lg text-red-400 font-semibold">
            Sign in to your account
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          {/* Login Card: Translucent Dark Card with dramatic border/shadow */}
          <div className="bg-gray-800/80 backdrop-blur-sm py-12 px-8 shadow-2xl shadow-red-800/40 rounded-3xl sm:px-10 border-t-8 border-red-600 transition duration-500 hover:shadow-red-500/60">
            <form className="space-y-8" onSubmit={click}>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-red-300 mb-2 uppercase">
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={val.email}
                    onChange={change}
                    // Dark input style with red focus glow
                    className="w-full px-5 py-3 border-2 border-red-600/30 rounded-xl bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/50 transition duration-300 shadow-inner shadow-black/50"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-bold text-red-300 mb-2 uppercase">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={val.password}
                    onChange={change}
                    // Dark input style with red focus glow
                    className="w-full px-5 py-3 border-2 border-red-600/30 rounded-xl bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/50 transition duration-300 shadow-inner shadow-black/50"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              
                

              <div>
                <button
                  type="submit"
                  // Extreme Red Button Style with shadow/glow
                  className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-2xl shadow-2xl shadow-red-700/60 text-xl font-extrabold text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-red-400 focus:ring-offset-gray-900 transition duration-200 uppercase tracking-widest active:scale-[0.98]"
                >
                  Sign In
                </button>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-500">
                  Don't have an account?{' '}
                  <a href="/" className="font-bold text-red-400 hover:text-red-300 transition duration-200">
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;