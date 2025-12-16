import { Fragment } from 'react';
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscriptionModal = ({ isOpen, onClose }: SubscriptionModalProps) => {
  if (!isOpen) return null;

  const plans = [
    {
      name: 'Monthly',
      price: 7.99,
      period: 'month',
      description: 'Perfect for trying out our premium content',
      features: [
        'Unlimited access to all articles',
        'Exclusive travel guides',
        'High-resolution photo galleries',
        'Ad-free reading experience',
        'Monthly newsletter',
      ],
      buttonText: 'Start Monthly Plan',
      highlighted: false,
    },
    {
      name: 'Annual',
      price: 79.99,
      period: 'year',
      description: 'Best value - Save over 15%',
      features: [
        'All Monthly features',
        'Priority customer support',
        'Early access to new content',
        'Exclusive member events',
        'Downloadable guides',
        'Cancel anytime',
      ],
      buttonText: 'Start Annual Plan',
      highlighted: true,
    },
  ];

  return (
    <Fragment>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Join Our Community
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get unlimited access to premium stories, guides, and exclusive content 
                from the Maldives.
              </p>
            </div>

            {/* Plans */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-xl p-8 transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-gradient-to-br from-primary to-primary-600 text-white shadow-xl scale-105'
                      : 'bg-gray-50 hover:shadow-lg'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-premium text-gray-900 text-xs font-bold uppercase tracking-wider rounded-full">
                        Best Value
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3
                      className={`font-serif text-2xl font-bold mb-2 ${
                        plan.highlighted ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span
                        className={`text-5xl font-bold ${
                          plan.highlighted ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        ${plan.price}
                      </span>
                      <span
                        className={`ml-2 ${
                          plan.highlighted ? 'text-white/80' : 'text-gray-600'
                        }`}
                      >
                        /{plan.period}
                      </span>
                    </div>
                    <p
                      className={`text-sm ${
                        plan.highlighted ? 'text-white/90' : 'text-gray-600'
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon
                          className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                            plan.highlighted ? 'text-white' : 'text-primary'
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            plan.highlighted ? 'text-white/90' : 'text-gray-700'
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-white text-primary hover:bg-gray-100'
                        : 'bg-primary text-white hover:bg-primary-600'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-8 text-center text-sm text-gray-600">
              <p>
                Cancel anytime. No hidden fees. All prices in USD.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SubscriptionModal;
