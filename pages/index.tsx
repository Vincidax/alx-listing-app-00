import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { IMAGES, ICONS } from '../constants';

const Home: NextPage = () => {
  const listings = [
    {
      id: 1,
      title: 'Modern Loft in Downtown',
      location: 'New York, NY',
      price: 120,
      rating: 4.92,
      image: IMAGES.listings.placeholder1,
      isSuperhost: true,
      dates: 'Nov 12-18',
    },
    {
      id: 2,
      title: 'Cozy Beachfront Cottage',
      location: 'Malibu, CA',
      price: 210,
      rating: 4.85,
      image: IMAGES.listings.placeholder2,
      isSuperhost: false,
      dates: 'Dec 1-7',
    },
    {
      id: 3,
      title: 'Luxury Mountain Villa',
      location: 'Aspen, CO',
      price: 350,
      rating: 4.98,
      image: IMAGES.listings.placeholder3,
      isSuperhost: true,
      dates: 'Jan 5-12',
    },
  ];

  const handleSearch = () => {
    console.log('Search initiated');
  };

  const handleWishlist = (id: number) => {
    console.log(`Added listing ${id} to wishlist`);
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
            <span className="ml-2 text-xl font-bold text-red-500 hidden md:inline">airbnb</span>
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
                <img src={ICONS.search} alt="Search" className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              label="Become a Host" 
              onClick={() => console.log('Become a Host')} 
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
        {/* Filters */}
        <div className="flex space-x-4 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {['All', 'Beach', 'Mountain', 'City', 'Countryside', 'Lakefront'].map((filter) => (
            <button
              key={filter}
              className="flex-shrink-0 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-900 transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <div key={listing.id} className="relative">
              <Card
                title={listing.title}
                description={`${listing.location} · ${listing.dates}`}
                imageUrl={listing.image}
                price={`$${listing.price} night`}
                rating={listing.rating}
                isSuperhost={listing.isSuperhost}
              />
              <button 
                onClick={() => handleWishlist(listing.id)}
                className="absolute top-3 right-3 p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition-all"
              >
                <img src={ICONS.heart} alt="Save to wishlist" className="h-5 w-5" />
              </button>
            </div>
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