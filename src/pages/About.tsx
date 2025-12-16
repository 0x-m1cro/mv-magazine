const About = () => {
  return (
    <div className="py-20">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Where's Maldives
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Where the Maldives reveals itself.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12 animate-slide-up">
          {/* Mission */}
          <section>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Where's Maldives is a premium digital travel magazine dedicated to showcasing 
              the unparalleled beauty, rich culture, and unique experiences of the Maldives. 
              We believe in slow travel, mindful exploration, and telling stories that matter.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our mission is to inspire, inform, and guide travelers seeking authentic 
              connections with this island paradise—from hidden beaches and local communities 
              to sustainable luxury and underwater wonders.
            </p>
          </section>

          {/* Values */}
          <section className="bg-secondary-50 p-8 rounded-xl">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-xl text-primary mb-2">Authenticity</h3>
                <p className="text-gray-700">
                  We share real stories from real travelers and locals, without filters or exaggeration.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-primary mb-2">Sustainability</h3>
                <p className="text-gray-700">
                  We champion eco-friendly tourism and celebrate resorts and operators leading the way.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-primary mb-2">Quality</h3>
                <p className="text-gray-700">
                  Every article is carefully researched, beautifully written, and thoughtfully designed.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-primary mb-2">Community</h3>
                <p className="text-gray-700">
                  We build connections between travelers, locals, and the Maldivian culture.
                </p>
              </div>
            </div>
          </section>

          {/* Team */}
          <section>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              We're a diverse team of writers, photographers, travel experts, and Maldives 
              enthusiasts who share a deep love for these islands. Based across the world, 
              we're united by our commitment to showcasing the Maldives in all its glory.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              From award-winning travel journalists to local guides who know every reef 
              and restaurant, our contributors bring decades of combined experience and 
              genuine passion to every story.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-primary to-primary-700 text-white p-12 rounded-xl text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Join Our Journey
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Subscribe to Where's Maldives and discover stories that inspire wanderlust.
            </p>
            <button className="btn-premium">
              Subscribe Now
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
