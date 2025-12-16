const Itineraries = () => {
  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Itineraries
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expertly crafted travel itineraries for your perfect Maldives adventure.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto text-center py-20 animate-slide-up">
          <div className="bg-secondary-50 rounded-xl p-12">
            <p className="text-2xl text-gray-600 mb-6">
              Coming Soon
            </p>
            <p className="text-gray-700">
              We're preparing detailed itineraries to help you plan your dream vacation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itineraries;
