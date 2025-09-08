import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="24" className="fill-vetarent-blue font-bold text-2xl font-sans">vetarent</text>
          </svg>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary font-medium">
            Home
          </a>
          <a href="#" className="text-foreground hover:text-primary font-medium">
            For Landlords
          </a>
          <a href="#" className="text-foreground hover:text-primary font-medium">
            For Tenants
          </a>
          <a href="#" className="text-foreground hover:text-primary font-medium">
            About Us
          </a>
          <a href="#" className="text-foreground hover:text-primary font-medium">
            Contact Us
          </a>
        </nav>
        
        {/* Mobile menu button */}
        <Button variant="ghost" size="sm" className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;