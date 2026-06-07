import React, { useState } from "react";
import { Link } from "react-router-dom";
import plumbingImg from "../assets/blog/plumbing2.jpeg";
import electricImg from "../assets/blog/elec.png";
import cleaningImg from "../assets/blog/spring.jpeg";



const articles = [
  {
    _id: "1",
    category: "Plumbing",
    title: "5 Signs You Need Emergency Plumbing Services",
    date: "March 15, 2024",
    readTime: "4 min read",
    content: "Don’t wait until it’s too late. Learn the warning signs that indicate you need immediate plumbing attention.",
    image: plumbingImg,
    featured: true,
  },
  {
    _id: "2",
    category: "Electrical",
    title: "Electrical Safety Tips Every Homeowner Should Know",
    date: "March 12, 2024",
    readTime: "6 min read",
    content: "Keep your family safe with these essential electrical safety guidelines and prevention tips.",
    image: electricImg,
  },
  {
    _id: "3",
    category: "House Cleaning",
    title: "Spring Cleaning Checklist: Room by Room Guide",
    date: "March 10, 2024",
    readTime: "8 min read",
    content: "Get your home sparkling clean this spring with our comprehensive room-by-room cleaning checklist.",
    image: cleaningImg,
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Expert Tips & Insights</h1>
        <p className="text-gray-600 text-sm">
          Stay informed with our latest articles on home maintenance, DIY tips, and professional advice
        </p>

        {/* Search Filter */}
        <div className="mt-6 flex items-center gap-4">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-64"
          />
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
            Filter
          </button>
        </div>
      </div>

      {/* Featured Article */}
      {filteredArticles
        .filter((a) => a.featured)
        .map((article) => (
          <div className="mb-10" key={article._id}>
            <span className="inline-block text-xs font-semibold text-blue-600 mb-2">Featured Article</span>
            <div className="bg-gray-100 rounded-md overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-300 flex justify-center items-center">
                <img src={article.image} alt={article.title} className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-1">{article.category}</div>
                <div className="text-xs text-gray-500 mb-2">{article.date} • {article.readTime}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{article.content}</p>
                <Link to={`/blog/${article._id}`}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
                    Read Article
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}

      {/* Grid Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles
          .filter((a) => !a.featured)
          .map((article) => (
            <div className="bg-gray-100 rounded-md overflow-hidden shadow-sm" key={article._id}>
              <div className="h-48 bg-gray-300 flex justify-center items-center">
                <img src={article.image} alt={article.title} className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-1">{article.category}</div>
                <div className="text-xs text-gray-500 mb-2">{article.date} • {article.readTime}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{article.content}</p>
                <Link to={`/blog/${article._id}`} className="text-blue-600 font-semibold text-sm">
                  Read More
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
