const Blog = () => {
  return (
    <div className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh perspectives, travel tips, and insider insights from the Maldives.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto text-center py-20 animate-slide-up">
          <div className="bg-secondary-50 rounded-xl p-12">
            <p className="text-2xl text-gray-600 mb-6">
              Coming Soon
            </p>
            <p className="text-gray-700">
              Our blog section is under construction. Check back soon for regular updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
