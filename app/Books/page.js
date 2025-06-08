import React from 'react';
import Link from 'next/link';


const books = [
  {
    title: "The Glass Garden",
    description: "A mystical tale of healing and mystery woven through nature.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    link: "#",
  },
  {
    title: "The Glass Garden",
    description: "A mystical tale of healing and mystery woven through nature.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    link: "#",
  },
  {
    title: "The Glass Garden",
    description: "A mystical tale of healing and mystery woven through nature.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    link: "#",
  },
  {
    title: "The Glass Garden",
    description: "A mystical tale of healing and mystery woven through nature.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    link: "#",
  },
  {
    title: "The Glass Garden",
    description: "A mystical tale of healing and mystery woven through nature.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    link: "#",
  },
  {
    title: "The Glass Garden",
    description: "A mystical tale of healing and mystery woven through nature.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    link: "#",
  }
];

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-white py-12 px-6 text-gray-900">
      <h1 className="text-4xl font-bold text-center mb-12">Books by Alex Joyfield</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {books.map((book, idx) => (
          <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow">
            <img src={book.image} alt={book.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
            <p className="mb-4">{book.description}</p>
            <a href={book.link} className="text-blue-600 font-semibold hover:underline">Learn More</a>
          </div>
        ))}
      </div>
    </main>
  );
}
