const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "I never thought I could rent a place this well-suited to my taste and lifestyle. The verification process made me feel safe every step of the way.",
      name: "Grace",
      role: "Tenant"
    },
    {
      id: 2,
      text: "I wanted to rent out our city flat but I didn't know of a service where I could feel confident renting to people I don't know personally.",
      name: "Mr. Johnson",
      role: "Landlord"
    }
  ];

  return (
    <section className="bg-primary py-16 relative overflow-hidden">
      {/* Background Network Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="network-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="8" fill="white" opacity="0.3" />
              <circle cx="80" cy="60" r="12" fill="white" opacity="0.2" />
              <circle cx="50" cy="80" r="6" fill="white" opacity="0.4" />
              <line x1="20" y1="20" x2="80" y2="60" stroke="white" strokeWidth="1" opacity="0.2" />
              <line x1="80" y1="60" x2="50" y2="80" stroke="white" strokeWidth="1" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-vetarent-orange fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>
            <span className="text-white font-semibold">5 Testimonials</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            What are our <span className="text-vetarent-orange">Users</span> saying
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-vetarent-orange fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              
              <p className="text-white text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-white/80 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-2 mt-12">
          <div className="w-3 h-3 bg-vetarent-orange rounded-full"></div>
          <div className="w-3 h-3 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;