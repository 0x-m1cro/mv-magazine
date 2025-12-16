import ArticleCard, { type Article } from '../common/ArticleCard';

// Sample article data
const sampleArticles: Article[] = [
  {
    id: 1,
    title: 'The Hidden Beaches of Malé Atoll',
    excerpt: 'Discover secluded shores where turquoise waters meet pristine white sands, far from the tourist crowds.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    readTime: 8,
    category: 'Destinations',
    slug: 'hidden-beaches-male-atoll',
    isPremium: false,
  },
  {
    id: 2,
    title: 'Sustainable Luxury: Eco-Resorts Leading the Way',
    excerpt: 'How the Maldives is pioneering eco-friendly tourism without compromising on luxury and comfort.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
    readTime: 12,
    category: 'Sustainability',
    slug: 'sustainable-luxury-eco-resorts',
    isPremium: true,
  },
  {
    id: 3,
    title: 'Underwater Dining: A Culinary Journey',
    excerpt: 'Experience the magic of dining beneath the waves at the world\'s most spectacular underwater restaurants.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    readTime: 6,
    category: 'Culinary',
    slug: 'underwater-dining-experience',
    isPremium: true,
  },
  {
    id: 4,
    title: 'Local Culture: Beyond the Resorts',
    excerpt: 'Immerse yourself in Maldivian traditions, customs, and daily life in the local island communities.',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80',
    readTime: 10,
    category: 'Culture',
    slug: 'local-culture-beyond-resorts',
    isPremium: false,
  },
  {
    id: 5,
    title: 'Diving the Great Blue: Top Spots for 2024',
    excerpt: 'From manta rays to whale sharks, explore the best diving locations in the Maldives this season.',
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80',
    readTime: 15,
    category: 'Adventure',
    slug: 'diving-great-blue-2024',
    isPremium: true,
  },
  {
    id: 6,
    title: 'The Art of Island Hopping',
    excerpt: 'Plan the perfect multi-island itinerary to experience the diverse beauty of the Maldivian archipelago.',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80',
    readTime: 9,
    category: 'Travel Tips',
    slug: 'art-of-island-hopping',
    isPremium: false,
  },
];

const ContentGrid = () => {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated tales from paradise, delivered with care and attention to every detail.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {sampleArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Load More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentGrid;
