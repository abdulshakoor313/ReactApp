import React from 'react'

const page = () => {
  return (
    <div>
       <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-gradient-to-br from-blue-100 to-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Alex Joyfield</h1>
        <p className="text-xl mb-6">Author of gripping fiction that lingers in your mind.</p>
        <a href="/books" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          View My Books
        </a>
      </section>

      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Book</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D" alt="Featured Book" className="w-64 rounded-xl shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold mb-2">The Echo Within</h3>
            <p className="mb-4">A haunting psychological thriller that dives into memory and identity.</p>
            <a href="/books" className="text-blue-600 font-semibold hover:underline">Read More</a>
          </div>
        </div>
      </section>

      <footer className="mt-20 py-8 text-center text-sm text-gray-500">
        &copy; 2025 Alex Joyfield. All rights reserved.
      </footer>
    </main>

    </div>
  )
}

export default page
