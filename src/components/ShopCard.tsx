
import React from 'react';

interface ShopCardProps {
  title: string;
  content: string;
}

const ShopCard: React.FC<ShopCardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* ShopCard Header */}
      <div className="bg-gray-200 px-4 py-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>

      {/* ShopCard Content */}
      <div className="p-4">
        <p className="text-gray-600">{content}</p>
      </div>

    </div>
  );
};

export default ShopCard;