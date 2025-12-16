import { useState } from 'react';
import Hero from '../components/home/Hero';
import ContentGrid from '../components/home/ContentGrid';
import SubscriptionModal from '../components/common/SubscriptionModal';

const Home = () => {
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  return (
    <div>
      <Hero />
      <ContentGrid />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Your Journey Begins Here
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of travelers who trust Where's Maldives for authentic, 
            curated stories from paradise.
          </p>
          <button
            onClick={() => setIsSubscriptionModalOpen(true)}
            className="btn-premium text-lg px-10 py-4 hover:scale-105 transform transition-transform"
          >
            Subscribe Today
          </button>
        </div>
      </section>

      <SubscriptionModal
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
      />
    </div>
  );
};

export default Home;
