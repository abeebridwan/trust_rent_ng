const ValueProposition = () => {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-foreground mb-4 whitespace-nowrap">
            Verified Rentals. <span className="text-vetarent-blue">For Everyone.</span>
          </h2>

          <p className="text-muted-foreground/70 text-sm md:text-lg max-w-2xl font-semibold mx-auto">
            Whether you&apos;re a landlord or a tenant, Vetarent ensures safety, 
            trust, and transparency at every step.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Tenants */}
          <div className="bg-card rounded-2xl p-8 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-vetarent-blue-light rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-vetarent-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground">For Tenants</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-vetarent-blue rounded-full mt-2"></div>
                <span className="text-foreground">Verified listings Only</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-vetarent-blue rounded-full mt-2"></div>
                <span className="text-foreground">Co-verified Landlords</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-vetarent-blue rounded-full mt-2"></div>
                <span className="text-foreground">Buyer & Secure</span>
              </div>
            </div>
          </div>

          {/* For Landlords */}
          <div className="bg-primary rounded-2xl p-8 space-y-6 text-white">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">For Landlords</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <span>Easy Listing Process</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <span>Verified Tenants</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <span>Secure Rent Verification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;