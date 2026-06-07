import React from 'react';
import { Heart, Eye, Share2 } from 'lucide-react';

export default function VRCard({ item, onPreview }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden max-w-sm w-full">
      {/* Image with Overlays */}
      <div className="relative group">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badge */}
        {item.badge && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {item.badge}
          </span>
        )}

        {/* Price */}
        {item.price && (
          <span className="absolute top-3 right-3 bg-white/80 backdrop-blur text-gray-800 text-sm px-3 py-1 rounded-md shadow">
            {item.price}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 truncate">{item.title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {item.tags?.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full border border-gray-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-4 flex justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Eye size={14} /> {item.views}
          </div>
          <div className="flex items-center gap-1">
            <Heart size={14} /> {item.likes}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-5 flex justify-between items-center">
          <button
            onClick={() => onPreview(item.modelUrl)}
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-md text-sm font-medium transition"
          >
            Preview
          </button>

          <div className="flex gap-3 text-gray-500 hover:text-gray-700">
            <Heart className="cursor-pointer" size={18} />
            <Share2 className="cursor-pointer" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
