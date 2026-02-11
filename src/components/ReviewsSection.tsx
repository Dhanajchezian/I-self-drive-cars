import { Star } from 'lucide-react';

const reviews = [
  {
    text: "Seamless self-drive experience — friendly, flexible, and the car was handed over in great condition. Highly recommended.",
    author: 'Verified guest',
  },
  {
    text: "Wonderful experience with excellent support throughout the booking. We'll definitely use them again.",
    author: 'Verified guest',
  },
  {
    text: "Responsive and accommodating — smooth handover and helpful service throughout our trip.",
    author: 'Verified guest',
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-wider text-gold font-medium">Reviews</p>
          <h2 className="text-3xl font-bold mt-2">What our customers say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-card/60 border border-border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground font-semibold">G</div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-amber-400">
                    <Star size={16} />
                    <Star size={16} />
                    <Star size={16} />
                    <Star size={16} />
                    <Star size={16} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{r.author}</div>
                </div>
              </div>

              <p className="text-primary-foreground/90">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
