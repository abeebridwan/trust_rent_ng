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
    <section className="bg-background-stats py-0 md:py-16 mx-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center divide-y-2 divide-gray-300 md:divide-y-0 md:divide-x-2 md:divide-gray-300">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`space-y-2 pt-4 md:py-4 ${
              index === stats.length - 1 ? "pb-4" : "pb-0"
            }`}
          >
            <div className={`text-2xl lg:text-[2.5rem] font-semibold ${stat.color}`}>
              {stat.number}
            </div>
            <div className="text-foreground font-medium text-sm md:text-lg mt-1 md:mt-0">
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
