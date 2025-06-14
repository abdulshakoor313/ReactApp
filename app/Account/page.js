import React from 'react'

import Link from 'next/link';

const Account = () => {
  return (
    <>

    <div>
        <form className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4">
  <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>

  <div>
   <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>

    <input
      type="text"
      id="name"
      name="name"
      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      required
    />
  </div>
    <div>
    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Password</label>
    <input
      type="password"
      id="password"
      name="password"
      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      required
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
    <textarea
      id="message"
      name="message"
      rows="4"
      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      required
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
  >
    Send Message
  </button>
 
</form>


    </div>
    
    </>
  )
}

export default Account;
