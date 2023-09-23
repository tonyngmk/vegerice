
import React from 'react';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Card Header */}
      <div className="bg-gray-200 px-4 py-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <p className="text-gray-600">{content}</p>
      </div>

    </div>
  );
};

export default Card;