import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Miss = () => {
  const navigate=useNavigate()
  const [val, setVal] = useState([])
  
  const fun = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/miss")
      setVal(res.data.data)
    } catch (error) {
      alert("Failed to fetch missing data")
    }
  }

  useEffect(() => {
    fun()
  }, [])
  
const alert=()=>{
//navigate(`/Alertform/${id}`)
}

  return (
    <>
      <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center border-4 border-red-500">
                <span className="text-white font-bold text-3xl">!</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Active Missing Cases
            </h1>
            <p className="text-lg text-gray-300">
              {val.length} active case{val.length !== 1 ? 's' : ''} reported
            </p>
          </div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {val.map((e, i) => (
              <div key={i} className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Photo Section */}
                {e.photo && (
                  <div className="relative h-48 bg-gray-700">
                    <img
                      src={`data:${e.photoType};base64,${e.photo}`}
                      alt="Missing Person"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      MISSING
                    </div>
                  </div>
                )}
                
                {/* Content Section */}
                <div className="p-6">
                  {/* Missing Person Info */}
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-white mb-2">
                      {e.missName || "Unknown Name"}
                    </h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-300 mb-3">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(e.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {e.location}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm">
                      {e.age && (
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                          Age: {e.age}
                        </span>
                      )}
                      {e.gender && (
                        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                          {e.gender}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Identity Description */}
                  {e.identity && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">Description</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {e.identity}
                      </p>
                    </div>
                  )}

                  {/* Reporter Information */}
                  <div className="border-t border-gray-700 pt-4">
                    <h3 className="text-sm font-semibold text-gray-400 mb-3">Reported By</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Name:</span>
                        <span className="text-white font-medium">{e.username}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Relationship:</span>
                        <span className="text-white font-medium">{e.relation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Contact:</span>
                        <span className="text-white font-medium">{e.number}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Email:</span>
                        <span className="text-blue-400 font-medium truncate">{e.email}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-6 pt-4 border-t border-gray-700">
                    <button onClick={alert} className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition duration-200">
                      Share Alert
                    </button>
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition duration-200">
                      Contact Reporter
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {val.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No Active Cases</h3>
              <p className="text-gray-400">There are currently no active missing person reports.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Miss