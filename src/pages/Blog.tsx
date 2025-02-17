import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding GST Compliance in India',
    excerpt: 'A comprehensive guide to GST compliance requirements for businesses in India.',
    image: 'https://images.unsplash.com/photo-1633414654403-48b1e7e2c5b6?q=80&w=2070&auto=format&fit=crop',
    date: 'March 15, 2024',
    author: 'John Doe',
    category: 'Taxation',
  },
  {
    id: 2,
    title: 'Digital Transformation in Accounting',
    excerpt: 'How technology is reshaping the accounting industry and what it means for businesses.',
    image: 'https://images.unsplash.com/photo-1633414654458-43675a9d8df8?q=80&w=2070&auto=format&fit=crop',
    date: 'March 10, 2024',
    author: 'Jane Smith',
    category: 'Technology',
  },
  {
    id: 3,
    title: 'Business Setup Guide 2024',
    excerpt: 'Essential steps and considerations for setting up a business in India.',
    image: 'https://images.unsplash.com/photo-1633414654607-b30108bb13c5?q=80&w=2070&auto=format&fit=crop',
    date: 'March 5, 2024',
    author: 'Mike Johnson',
    category: 'Business',
  },
  {
    id: 4,
    title: 'Financial Planning for Startups',
    excerpt: 'Key financial planning strategies for startup success in the current market.',
    image: 'https://images.unsplash.com/photo-1633414654699-10e42e43ccb3?q=80&w=2070&auto=format&fit=crop',
    date: 'March 1, 2024',
    author: 'Sarah Wilson',
    category: 'Finance',
  },
  {
    id: 5,
    title: 'Latest Updates in Tax Regulations',
    excerpt: 'Recent changes in tax regulations and their impact on businesses.',
    image: 'https://images.unsplash.com/photo-1633414654730-d5b86ee92f61?q=80&w=2070&auto=format&fit=crop',
    date: 'February 25, 2024',
    author: 'David Brown',
    category: 'Taxation',
  },
  {
    id: 6,
    title: 'Internal Audit Best Practices',
    excerpt: 'Essential internal audit practices for maintaining financial integrity.',
    image: 'https://images.unsplash.com/photo-1633414654772-d226741a3daa?q=80&w=2070&auto=format&fit=crop',
    date: 'February 20, 2024',
    author: 'Emily Davis',
    category: 'Audit',
  },
];

const Blog = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1633414654648-85cd7a086c24?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-6">
              Blog & Insights
            </h1>
            <p className="font-lato text-xl text-white/90">
              Stay updated with the latest in finance, taxation, and business
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="inline-flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="font-montserrat text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="font-lato text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                    <button className="inline-flex items-center text-[#2979FF] hover:text-[#2979FF]/80">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="font-lato text-gray-600 mb-8">
              Get the latest updates on finance, taxation, and business delivered to your inbox
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2979FF] focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-[#2979FF] text-white px-6 py-3 rounded-md font-medium hover:bg-[#2979FF]/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;