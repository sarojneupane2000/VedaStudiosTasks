import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Get Involved</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Contact Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Media</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">RESOURCES</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Animal Safety</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Programs</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Events</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Alumni</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">WAYS TO GIVE</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Find a Family</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Donation</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Volunteer</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Give a Gift</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">SOCIAL MEDIA</h4>
            <p className="text-gray-700 mb-4">Follow us on social media to find out the latest updates on our progress.</p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-700 hover:text-gray-900"><FaFacebookF size={24} /></a>
              <a href="#" className="text-gray-700 hover:text-gray-900"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-700 hover:text-gray-900"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-700 hover:text-gray-900"><FaYoutube size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-700">&copy; 2024 fourpaws. All Rights Reserved</p>
          <div className="flex justify-center space-x-4 mt-2 md:mt-0">
            <a href="#" className="text-gray-700 hover:text-gray-900">Terms of Service</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Security</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
