import { ClockIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

const Article = () => {

  // Placeholder article data
  const article = {
    title: 'The Hidden Beaches of Malé Atoll',
    subtitle: 'Discover secluded shores where turquoise waters meet pristine white sands',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
    author: 'Sarah Johnson',
    date: 'December 15, 2024',
    readTime: 8,
    category: 'Destinations',
  };

  return (
    <article className="py-12">
      {/* Hero Image */}
      <div className="relative h-[60vh] mb-12">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <div className="mb-4">
              <span className="px-4 py-1 bg-primary text-white text-sm font-semibold uppercase tracking-wider rounded-full">
                {article.category}
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {article.subtitle}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <UserIcon className="h-5 w-5" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-5 w-5" />
                <span>{article.readTime} min read</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none animate-slide-up">
            <p className="lead text-xl text-gray-700 mb-6">
              The Maldives is renowned for its picture-perfect beaches, but venture beyond 
              the well-trodden paths, and you'll discover hidden gems that few travelers 
              ever experience. These secluded shores offer an intimate connection with 
              paradise, far from the crowds.
            </p>

            <h2>Finding Your Private Paradise</h2>
            <p>
              Malé Atoll, the beating heart of the Maldives, conceals numerous pristine 
              beaches accessible only by local dhoni boats or adventurous kayaking. These 
              hidden shores provide an authentic glimpse into the natural beauty that has 
              captivated travelers for generations.
            </p>

            <p>
              Early morning is the magic hour. As the sun rises over the Indian Ocean, 
              casting golden rays across impossibly blue waters, these secret beaches 
              come alive with their own rhythm—the gentle lapping of waves, the call of 
              tropical birds, and the whisper of palm fronds in the breeze.
            </p>

            <h2>Sustainable Beach Exploration</h2>
            <p>
              When visiting these pristine locations, remember that we're guests in a 
              fragile ecosystem. Take only photographs, leave only footprints, and respect 
              the delicate marine life that calls these shores home.
            </p>

            <blockquote>
              "The Maldives isn't just a destination—it's a state of mind, where time 
              slows down and every moment feels infinite." - Local Guide, Ahmed Hassan
            </blockquote>

            <h2>Planning Your Visit</h2>
            <p>
              The best time to explore these hidden beaches is during the dry season 
              (November to April), when the weather is most favorable and the waters 
              are calm. However, shoulder seasons offer their own charm with fewer 
              visitors and dramatic skies.
            </p>

            <p>
              Consider hiring a local guide who knows the tides, weather patterns, and 
              hidden access points. Their knowledge not only ensures a safe experience 
              but also enriches your journey with stories and insights you won't find 
              in guidebooks.
            </p>

            <h2>What to Bring</h2>
            <ul>
              <li>Reef-safe sunscreen to protect both your skin and the coral</li>
              <li>A waterproof camera to capture underwater beauty</li>
              <li>Snorkeling gear for exploring nearby reefs</li>
              <li>Light, breathable clothing and a wide-brimmed hat</li>
              <li>Plenty of water and light snacks</li>
            </ul>

            <p>
              These hidden beaches of Malé Atoll represent the Maldives at its most 
              authentic and unspoiled. Whether you seek solitude, adventure, or simply 
              a deeper connection with nature, these secret shores deliver an experience 
              that stays with you long after the sand has been rinsed from your feet.
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
              Continue Reading
            </h3>
            <div className="text-center">
              <button className="btn-secondary">
                View More Articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
