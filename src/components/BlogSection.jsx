import React from "react";
import { Link } from "react-router-dom";
import blogData from "../utils/ObjectData/BlogData";

const BlogSection = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#2563EB] mb-2">Recent Tips</h2>
        <p className="text-gray-600 text-sm">
          Stay updated with practical advice and expert knowledge
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {blogData.map((blog) => (
          <Link
            to={`/blog/${blog.id}`}
            key={blog.id}
            className="bg-white border border-blue-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="text-sm text-[#2563EB] font-semibold mb-1">{blog.category}</div>
              <div className="text-xs text-gray-500 mb-2">{blog.date} • {blog.readTime}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">{blog.snippet}</p>
              <span className="mt-4 inline-block text-[#2563EB] font-semibold text-sm hover:underline">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
