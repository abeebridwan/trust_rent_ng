const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              veta<span className="text-vetarent-orange">rent</span>
            </h3>
            <p className="text-white/80 leading-relaxed">
              Vetarent is Nigeria's most trusted platform built for RAs. You can stay confident listing and renting properties on our platform.
            </p>
          </div>

          {/* Explore Vetarent */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Explore Vetarent</h4>
            <div className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                For Landlords
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                For Tenants
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                About Us
              </a>
            </div>
          </div>

          {/* Help & Support */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Help & Support</h4>
            <div className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                FAQ
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Contact Support
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Terms & Condition
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="mailto:support@vetarent.ng" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                support@vetarent.ng
              </a>
              <a 
                href="tel:+2348106654528" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                +234 810 665 4528
              </a>
              <div className="text-white/80">
                Vetarent Technologies Ltd<br />
                Victoria Island, Lagos State,<br />
                Nigeria, 101241
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">
            © 2024 Vetarent Technologies Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;