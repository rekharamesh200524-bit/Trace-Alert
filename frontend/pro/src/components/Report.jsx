import axios from 'axios'
import React, { useState } from 'react'

const Report = () => {
  const [val,setVal]=useState({
    username:"",
    email:"",
    number:"",
    relation:"",
    missName:"",
    age:"",
    gender:"",
    date:"",
    location:"",
    identity:"",
    photo:null
  })

const change=(e)=>{
const {name,value,files}=e.target
if(name==='photo'){
  setVal({...val,photo:files[0]})
}
else{
  setVal({...val,[name]:value})
}
}

const click=async(e)=>{
e.preventDefault()
const formdata=new FormData()

formdata.append("username",val.username)
formdata.append("email",val.email)
formdata.append("number",val.number)
formdata.append('relation',val.relation)
formdata.append('missName',val.missName)
formdata.append('age',val.age)
formdata.append('gender',val.gender)
formdata.append('date',val.date)
formdata.append('location',val.location)
formdata.append('identity',val.identity)

if(val.photo){
  formdata.append('photo',val.photo)
}

try {
  const report =await axios.post("http://localhost:3000/api/reportMissing",formdata,{headers:{"Content-Type":"multipart/form-data"}})
  console.log(report.data);
  alert(report.data.msg)
  setVal({
     username:"",
    email:"",
    number:"",
    relation:"",
    missName:"",
    age:"",
    gender:"",
    date:"",
    location:"",
    identity:"",
    photo:null
  })
  
} catch (error) {
  let err=error.response?.data.msg || error.message
  alert(err)
}
}

  return (
    <>
      <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center border-4 border-red-500">
                <span className="text-white font-bold text-3xl">!</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Report Missing Child
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Please provide accurate information to help us respond quickly
            </p>
          </div>

          {/* Form */}
          <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-8">
            <form onSubmit={click} className="space-y-8">
              {/* Reporter Information */}
              <div className="border-l-4 border-red-500 pl-6">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Your Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200">Name *</label>
                    <input 
                      type="text" 
                      name='username' 
                      value={val.username} 
                      onChange={change}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200 text-white placeholder-gray-400"
                      placeholder="Your full name"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200">Email *</label>
                    <input 
                      type="email" 
                      name='email' 
                      value={val.email} 
                      onChange={change}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200 text-white placeholder-gray-400"
                      placeholder="your@email.com"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200">Contact Number *</label>
                    <input 
                      type="number" 
                      name='number' 
                      value={val.number} 
                      onChange={change}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200 text-white placeholder-gray-400"
                      placeholder="Phone number"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200">Relationship *</label>
                    <input 
                      type="text" 
                      name='relation' 
                      value={val.relation} 
                      onChange={change}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200 text-white placeholder-gray-400"
                      placeholder="Relationship to missing person"
                      required 
                    />
                  </div>
                </div>
              </div>

              {/* Missing Person Information */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Missing Person Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200">Name</label>
                    <input 
                      type="text" 
                      name='missName' 
                      value={val.missName} 
                      onChange={change}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-white placeholder-gray-400"
                      placeholder="Missing person's name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200">Age</label>
                    <input 
                      type="number" 
                      name='age' 
                      value={val.age} 
                      onChange={change}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-white placeholder-gray-400"
                      placeholder="Age"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200">Gender</label>
                    <select 
                      name="gender" 
                      value={val.gender} 
                      onChange={change}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-white"
                    >
                      <option value="" className="text-gray-900">Select Gender</option>
                      <option value="male" className="text-gray-900">Male</option>
                      <option value="female" className="text-gray-900">Female</option>
                      <option value="other" className="text-gray-900">Others</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200">Date Missing *</label>
                    <input 
                      type="date" 
                      name='date' 
                      value={val.date} 
                      onChange={change}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-white"
                      required 
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="block text-sm font-semibold text-gray-200">Last Seen Location *</label>
                    <input 
                      type="text" 
                      name='location' 
                      value={val.location} 
                      onChange={change}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-white placeholder-gray-400"
                      placeholder="Last known location"
                      required 
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="block text-sm font-semibold text-gray-200">Physical Description & Identity</label>
                    <textarea 
                      name="identity" 
                      value={val.identity} 
                      onChange={change}
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-white placeholder-gray-400 resize-none"
                      placeholder="Describe clothing, height, hair color, distinguishing features, etc."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Photo Upload */}
              <div className="border-l-4 border-green-500 pl-6">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Photo Upload
                </h2>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-green-500 transition duration-200 bg-gray-700/50">
                    <input 
                      type="file" 
                      name='photo' 
                      onChange={change}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-300 font-medium">Click to upload a photo</p>
                      <p className="text-sm text-gray-400 mt-1">PNG, JPG, JPEG up to 10MB</p>
                    </label>
                  </div>
                  {val.photo && (
                    <div className="text-center text-green-400 font-medium">
                      ✓ Photo selected: {val.photo.name}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-8">
                <button 
                  type='submit'
                  className="px-12 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Submit Report
                </button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-400">
                  * Required fields. All information will be treated with confidentiality.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Report