const WhyChooseSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      ),
      title: "Easy Property Search",
      description: "Search, save, and apply for rentals anytime, anywhere."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
        </svg>
      ),
      title: "Verified Landlords Only",
      description: "Every landlord is identity verified, so you know who you're dealing with every time."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5V11C3 16.55 6.84 20.74 12 22C17.16 20.74 21 16.55 21 11V5L12 1M12 7C13.11 7 14 7.89 14 9S13.11 11 12 11 10 10.11 10 9 10.89 7 12 7Z"/>
        </svg>
      ),
      title: "Built to Prevent Scams",
      description: "Our multi-layer verification process protects both you and your property."
    }
  ];

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-vetarent-blue">Vetarent?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-vetarent-blue-light rounded-2xl flex items-center justify-center mx-auto">
                <div className="text-vetarent-blue">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground max-w-sm mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;