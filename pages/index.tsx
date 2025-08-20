// pages/index.tsx
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Pill from "@/components/common/Pill";
import {
  PROPERTYLISTINGSAMPLE,
  IMAGES,
  ICONS,
  HERO_BACKGROUND,
} from "@/constants";

const Home: NextPage = () => {
  const filterOptions = [
    "All",
    "Top Villa",
    "Self Checkin",
    "Pet Friendly",
    "Luxury",
    "Countryside",
    "Beach",
    "Mountain",
    "City",
    "Lakefront",
  ];

  const listings = [
    {
      id: 1,
      title: "Modern Loft in Downtown",
      location: "New York, NY",
      price: 120,
      rating: 4.92,
      image: IMAGES.listings.placeholder1,
      isSuperhost: true,
      dates: "Nov 12-18",
    },
    {
      id: 2,
      title: "Cozy Beachfront Cottage",
      location: "Malibu, CA",
      price: 210,
      rating: 4.85,
      image: IMAGES.listings.placeholder2,
      isSuperhost: false,
      dates: "Dec 1-7",
    },
    {
      id: 3,
      title: "Luxury Mountain Villa",
      location: "Aspen, CO",
      price: 350,
      rating: 4.98,
      image: IMAGES.listings.placeholder3,
      isSuperhost: true,
      dates: "Jan 5-12",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const handleSearch = () => {
    console.log("Search initiated");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ALX Listing App - Airbnb Clone</title>
        <meta name="description" content="Find your perfect vacation rental" />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={IMAGES.logos.airbnb}
              alt="Airbnb Logo"
              className="h-8 w-auto text-red-500"
            />
            <span className="ml-2 text-xl font-bold text-red-500 hidden md:inline">
              airbnb
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations"
                className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <img
                  src={ICONS.search}
                  alt="Search"
                  className="h-5 w-5 text-gray-500"
                />
              </button>
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <Button
              label="Become a Host"
              onClick={() => console.log("Become a Host")}
              variant="secondary"
            />
            <button className="flex items-center space-x-2 border border-gray-300 rounded-full p-2">
              <img src={ICONS.user} alt="User" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section
          className="relative w-full h-[70vh] flex items-center justify-center text-center bg-cover bg-center rounded-lg mb-8"
          style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

          {/* Hero Text */}
          <div className="relative text-white px-4 md:px-0 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Find your favorite place here!
            </h1>
            <p className="text-lg md:text-2xl">
              The best prices for over 2 million properties worldwide.
            </p>
            <button
              onClick={handleSearch}
              className="mt-6 px-6 py-3 bg-red-500 text-white rounded-full text-lg font-semibold hover:bg-red-600 transition"
            >
              Search Now
            </button>
          </div>
        </section>

        {/* Filter Section */}
        <div className="flex space-x-4 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {filterOptions.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              active={filter === activeFilter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.filter(
            (property) =>
              activeFilter === "All" || property.category.includes(activeFilter)
          ).map((property, index) => (
            <Card
              key={index}
              title={property.name}
              description={`${property.address.city}, ${property.address.country}`}
              imageUrl={property.image}
              price={`$${property.price} night`}
              rating={property.rating}
              isSuperhost={false}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2023 ALX Listing App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
