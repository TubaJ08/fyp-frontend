import React, { useState, useEffect } from 'react';
import { vrCardData } from '../utils/data/VRCardData';
import VRViewer from './VRViewer';
import VRCard from '../components/VRCard'; // Your existing card component

const VRCardGrid = () => {
  const [selectedStyle, setSelectedStyle] = useState('All Styles');
  const [roomFilter, setRoomFilter] = useState('All Rooms');
  const [sortBy, setSortBy] = useState('Featured');
  const [showViewer, setShowViewer] = useState(false);
  const [currentModelUrl, setCurrentModelUrl] = useState('');

 const handlePreviewClick = (modelUrl) => {
  setCurrentModelUrl(modelUrl);
  setShowViewer(true);
};


  const filteredCards = vrCardData.filter((card) => {
    const styleMatch =
      selectedStyle === 'All Styles' ||
      card.tags?.includes(selectedStyle);
    const roomMatch =
      roomFilter === 'All Rooms' || card.room === roomFilter;
    return styleMatch && roomMatch;
  });

  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      {/* Filters */}
      <div className="mb-8 text-center">
        <div className="flex flex-wrap justify-center gap-3 text-sm font-medium mb-4">
          {['All Styles', 'Modern Design', 'Minimalist', 'Traditional', 'Modern Farmhouse', 'Scandinavian'].map((style) => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`px-4 py-1.5 rounded-full border ${
                selectedStyle === style
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {style}
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-4 flex-wrap text-sm">
          <select
            value={roomFilter}
            onChange={(e) => setRoomFilter(e.target.value)}
            className="appearance-none border px-4 py-2 rounded-xl text-gray-700 bg-white pr-8"
          >
            <option>All Rooms</option>
            <option>Living Room</option>
            <option>Bedroom</option>
            <option>Kitchen</option>
            <option>Bathroom</option>
            <option>Dining Room</option>
            <option>Office</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none border px-4 py-2 rounded-xl text-gray-700 bg-white pr-8"
          >
            <option>Featured</option>
            <option>Newest</option>
            <option>Popular</option>
          </select>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Showing {filteredCards.length} design{filteredCards.length !== 1 && 's'}
        </p>
      </div>

     {/* Card Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {filteredCards.map((card) => (
    <VRCard key={card.id} item={card} onPreview={handlePreviewClick} />
  ))}
</div>

      {/* VR Modal */}
      {showViewer && (
        <VRViewer modelUrl={currentModelUrl} onClose={() => setShowViewer(false)} />
      )}
    </div>
  );
};

export default VRCardGrid;
