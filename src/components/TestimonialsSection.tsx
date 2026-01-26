import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      text: "Best contractor we've ever worked with! They remodeled our kitchen and it turned out better than we imagined. Professional, on-time, and stayed within budget.",
      name: 'Sarah M.',
      project: 'Kitchen Remodel',
    },
    {
      text: 'Called them for an emergency roof repair and they came out same day. Fixed the leak quickly and the price was very fair. Highly recommend!',
      name: 'Mike T.',
      project: 'Roof Repair',
    },
    {
      text: "We've used them for multiple projects over the years. Always reliable, always professional. They're our go-to contractors for everything.",
      name: 'Jennifer L.',
      project: 'Multiple Projects',
    },
    {
      text: 'The crew was incredibly respectful of our home. Covered everything, cleaned up daily, and the final result was flawless. Worth every penny.',
      name: 'Robert K.',
      project: 'Bathroom Renovation',
    },
    {
      text: 'Transparent pricing, no surprises. They walked us through every step and the communication was excellent. Our new deck is beautiful!',
      name: 'Amanda R.',
      project: 'Deck Construction',
    },
    {
      text: 'Fast, professional, and affordable. They fixed our water heater issue in under 2 hours. Will definitely call them for future projects.',
      name: 'David H.',
      project: 'Emergency Plumbing',
    },
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Trusted by Your Neighbors
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Real Reviews from Real Customers
          </p>

          <div className="flex items-center justify-center gap-2 text-4xl sm:text-5xl mb-4">
            <Star className="w-12 h-12 fill-secondary text-secondary" />
            <Star className="w-12 h-12 fill-secondary text-secondary" />
            <Star className="w-12 h-12 fill-secondary text-secondary" />
            <Star className="w-12 h-12 fill-secondary text-secondary" />
            <Star className="w-12 h-12 fill-secondary text-secondary" />
          </div>

          <div className="text-3xl font-bold text-secondary">
            4.9/5
            <span className="text-xl text-blue-200 ml-2">(500+ Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="text-white mb-6 leading-relaxed">"{review.text}"</p>

              <div className="border-t border-white/20 pt-4">
                <div className="font-bold text-secondary">{review.name}</div>
                <div className="text-sm text-blue-200">{review.project}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-blue-200">
            Join hundreds of satisfied customers in the Austin area
          </p>
        </div>
      </div>
    </section>
  );
}
