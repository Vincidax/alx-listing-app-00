import React from 'react';
import { CardProps } from '../../interfaces';
import { ICONS } from '../../constants';

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  price,
  rating,
  isSuperhost
}) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative aspect-square">
        <img 
          className="w-full h-full object-cover" 
          src={imageUrl} 
          alt={title} 
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-semibold text-lg truncate">{title}</h3>
          {rating && (
            <div className="flex items-center flex-shrink-0">
              <img src={ICONS.star} alt="Star" className="h-4 w-4 mr-1" />
              <span>{rating}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-2 truncate">{description}</p>

        {/* Price */}
        {price && (
          <p className="font-medium">
            <span className="font-semibold">${price}</span> night
          </p>
        )}

        {/* Superhost Badge */}
        {isSuperhost && (
          <div className="mt-2">
            <span className="text-xs border border-black px-2 py-1 rounded-full">
              Superhost
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;