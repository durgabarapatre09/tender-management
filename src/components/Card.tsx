import React from 'react';

interface CardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, onClick }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg p-4" onClick={onClick}>
    <div className="font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base">{description}</p>
  </div>
);

export default Card;
