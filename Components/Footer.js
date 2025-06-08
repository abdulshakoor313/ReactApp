"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-10 px-6 mt-20 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Navigation Links */}
        <div>
          <h3 className="text-base font-semibold mb-2">Navigation</h3>
          <div className="flex flex-col gap-2 px-5 md:px-0">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About Me</Link>
            <Link href="/courses" className="hover:underline">Courses</Link>
            <Link href="/books" className="hover:underline">Books</Link>
            <Link href="/account" className="hover:underline">Account</Link>
          </div>
        </div>

        {/* Social Links (with Link instead of <a>) */}
        <div>
          <h3 className="text-base font-semibold mb-2">Follow Me</h3>
          <div className="flex flex-col gap-2">
            <Link href="https://twitter.com/yourhandle" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
            </Link>
            <Link href="https://instagram.com/yourhandle" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            </Link>
            <Link href="https://facebook.com/yourhandle" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-base font-semibold mb-2">Stay Updated</h3>
          <p className="mb-2">Get news on new releases and events.</p>
          <Link
            href="/newsletter"
            className="inline-block bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
          >
            Join Newsletter
          </Link>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400">
        &copy; {year} Alex Joyfield. All rights reserved.
      </div>
    </footer>
  );
}
