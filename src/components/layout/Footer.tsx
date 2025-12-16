import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About', path: '/about' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { name: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-primary">
              Where's Maldives
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Where the Maldives reveals itself. A premium digital travel magazine 
              dedicated to showcasing the beauty, culture, and experiences of the Maldives.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Stay Connected</h4>
            <p className="text-gray-600 text-sm">
              Subscribe to our newsletter for exclusive stories and travel tips.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-primary hover:text-white transition-colors">
                    {social.icon.charAt(0).toUpperCase()}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Where's Maldives Magazine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
