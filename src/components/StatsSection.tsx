const StatsSection = () => {
  const stats = [
    {
      number: "10k +",
      label: "Verified Landlords",
      color: "text-vetarent-orange"
    },
    {
      number: "34k +",
      label: "Verified Property",
      color: "text-vetarent-orange"
    },
    {
      number: "28k +",
      label: "Trusted Property",
      color: "text-vetarent-orange"
    }
  ];

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className={`text-4xl lg:text-5xl font-bold ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-foreground font-medium text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;