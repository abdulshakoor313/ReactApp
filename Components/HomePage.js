import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-blue-600"
      >
        Bright Future Academy
      </motion.h1>
      <nav className="space-x-6">
        <a href="#hero" className="text-gray-700 hover:text-blue-600">Home</a>
        <a href="#courses" className="text-gray-700 hover:text-blue-600">Courses</a>
        <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        <Link href="/StudentLookup" className="text-gray-700 hover:text-blue-600 font-bold">
          Check Your Child Status
        </Link>
      </nav>
    </div>
  </header>
)

const HeroSection = () => (
  <section id="hero" className="relative h-screen w-full overflow-hidden">
    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      src="/video.mp4"
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
    />

    {/* Dark semi-transparent overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

    {/* Text content on top */}
    <div className="absolute inset-1 flex items-center justify-center text-center text-white px-4 z-20">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Unlock Your Child’s Potential
        </h2>
        <p className="text-lg md:text-2xl">
          Join our coaching and home schooling programs today.
        </p>
      </motion.div>
    </div>
  </section>
)



const CoursesSection = () => (
  <section id="courses" className="py-16 bg-gray-100">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h3 className="text-3xl font-bold text-gray-800 mb-10">Our Courses</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
          whileHover={{ scale: 1.03 }}
        >
          <h4 className="text-2xl font-semibold mb-2 text-blue-600">Coaching Academy</h4>
          <p className="text-gray-600">Tailored academic coaching for grades 1-10, focused on strong subject foundations and exam excellence.</p>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
          whileHover={{ scale: 1.03 }}
        >
          <h4 className="text-2xl font-semibold mb-2 text-blue-600">Home Schooling</h4>
          <p className="text-gray-600">Personalized curriculum, flexible learning, and full parent-teacher support for home-based education.</p>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
          whileHover={{ scale: 1.03 }}
        >
          <h4 className="text-2xl font-semibold mb-2 text-blue-600">Coaching Academy</h4>
          <p className="text-gray-600">Tailored academic coaching for grades 1-10, focused on strong subject foundations and exam excellence.</p>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
          whileHover={{ scale: 1.03 }}
        >
          <h4 className="text-2xl font-semibold mb-2 text-blue-600">Home Schooling</h4>
          <p className="text-gray-600">Personalized curriculum, flexible learning, and full parent-teacher support for home-based education.</p>
        </motion.div>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer id="contact" className="bg-blue-600 text-white py-6">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <p className="mb-2">© 2025 Bright Future Academy. All rights reserved.</p>
      <p>Email: info@brightfuture.edu.pk | Phone: +92-300-0000000</p>
    </div>
  </footer>
)

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CoursesSection />
      <Footer />
    </div>
  )
}

export default HomePage
