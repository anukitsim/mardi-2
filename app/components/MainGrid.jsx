"use client"

import React, { useState } from 'react';

const MainGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    {
      img1: '/images/mardi1.jpeg',
      img2: '/images/mardi2.jpg',
      title: 'Mardi Development',
      description: 'Construction of high-class projects in collaboration with international hotel brands and management companies. Our goal is to create premium-class hotels with a high level of service. You can become the owner of profitable real estate - from apartments to townhouses.'
    },
    {
        img1: '/images/mardi1.jpeg',
        img2: '/images/mardi2.jpg',
        title: 'Mardi Development',
        description: 'Construction of high-class projects in collaboration with international hotel brands and management companies. Our goal is to create premium-class hotels with a high level of service. You can become the owner of profitable real estate - from apartments to townhouses.'
      },
    { img1: '/images/mardi1.jpeg', img2: '/images/mardi2.jpg', title: 'Title 3', description: 'Description 3' },
    { img1: '/images/mardi1.jpeg', img2: '/images/mardi2.jpg', title: 'Title 4', description: 'Description 4' },
    { img1: '/images/mardi1.jpeg', img2: '/images/mardi2.jpg', title: 'Title 5', description: 'Description 5' },
    { img1: '/images/mardi1.jpeg', img2: '/images/mardi2.jpg', title: 'Title 6', description: 'Description 6' }
  ];

  return (
    <main className="w-full h-screen bg-[#394b33]">
      <h1 className="text-left text-[#f2ecdc] text-[22px] mb-8 pl-5">
        <span className='text-[26px]'>
        Explore Mardi Holding
        </span>
       
        <br />
        <br />
         Your Gateway to Premier Real Estate, Hospitality, Travel, and More
      </h1>
      <div className="grid grid-cols-2 w-full h-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center h-full border-t border-b border-r border-[#f2ecdc] p-4"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-full h-full">
              <img
                src={hoveredIndex === index ? item.img2 : item.img1}
                alt="Mardi"
                className={`transition-all duration-1000 ease-in-out w-full h-full object-cover ${
                  hoveredIndex === index ? 'rounded-lg scale-105' : 'scale-100'
                }`}
              />
              <div
                className={`absolute bottom-4 right-4 p-2 rounded-full border-2 border-white transition-all duration-500 ease-in-out ${
                  hoveredIndex === index ? 'bg-[#c8cf21]' : 'bg-transparent'
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-between w-full mt-4 text-[#f2ecdc]">
              <div className='w-6/12'>
                <p className="text-[1.1111111111vw]">
                  {item.description}
                </p>
              </div>
              <h2 className="text-[2.2222222222vw] font-bold">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainGrid;
