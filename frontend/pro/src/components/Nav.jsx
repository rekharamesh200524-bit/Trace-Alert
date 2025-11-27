import { Link } from 'react-router-dom'
import React from 'react'
import { Shield, Home, FileText, Users, User, LogOut } from 'lucide-react'

const Nav = () => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logout clicked')
  }

  return (
    <div className="bg-gray-900/90 backdrop-blur-sm border-b-2 border-red-600 py-4 px-6 font-inter text-gray-100 shadow-2xl shadow-red-800/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50 border-2 border-red-400">
            <Shield className="text-white w-5 h-5" strokeWidth={2.5} />
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-widest [text-shadow:0_0_6px_rgba(255,0,0,0.8)]">
            TRACE ALERT
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-1">
          <Link 
            to='/home'
            className="flex items-center space-x-2 bg-gray-800/80 hover:bg-red-600/80 py-3 px-4 rounded-xl transition duration-200 border border-red-600/30 hover:border-red-400 group"
          >
            <Home className="text-red-400 group-hover:text-white w-4 h-4" />
            <span className="text-red-300 group-hover:text-white font-semibold">Home</span>
          </Link>

          <Link 
            to='/report'
            className="flex items-center space-x-2 bg-gray-800/80 hover:bg-red-600/80 py-3 px-4 rounded-xl transition duration-200 border border-red-600/30 hover:border-red-400 group"
          >
            <FileText className="text-red-400 group-hover:text-white w-4 h-4" />
            <span className="text-red-300 group-hover:text-white font-semibold">Report Missing Child</span>
          </Link>

          <Link 
            to='/miss'
            className="flex items-center space-x-2 bg-gray-800/80 hover:bg-red-600/80 py-3 px-4 rounded-xl transition duration-200 border border-red-600/30 hover:border-red-400 group"
          >
            <Users className="text-red-400 group-hover:text-white w-4 h-4" />
            <span className="text-red-300 group-hover:text-white font-semibold">Missing Children</span>
          </Link>

          <Link 
            to='/profile'
            className="flex items-center space-x-2 bg-gray-800/80 hover:bg-red-600/80 py-3 px-4 rounded-xl transition duration-200 border border-red-600/30 hover:border-red-400 group"
          >
            <User className="text-red-400 group-hover:text-white w-4 h-4" />
            <span className="text-red-300 group-hover:text-white font-semibold">Profile</span>
          </Link>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 bg-red-600 hover:bg-red-500 py-3 px-6 rounded-xl transition duration-200 shadow-lg shadow-red-700/50 hover:shadow-red-500/60 border border-red-500 group"
        >
          <LogOut className="text-white w-4 h-4" />
          <span className="text-white font-bold">Logout</span>
        </button>
      </div>
    </div>
  )
}

export default Nav