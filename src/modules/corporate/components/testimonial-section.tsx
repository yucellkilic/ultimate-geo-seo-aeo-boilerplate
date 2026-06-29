'use client';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    testimonial: 'This boilerplate saved us months of development time!',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    role: 'Founder, StartupXYZ',
    testimonial: 'The Geo-SEO implementation is incredible. Our traffic doubled!',
    rating: 5,
  },
  {
    name: 'Mike Johnson',
    role: 'CTO, GlobalCo',
    testimonial: 'Best boilerplate for Next.js projects. Highly recommended!',
    rating: 5,
  },
];

export function TestimonialSection() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="bg-slate-700 rounded-lg p-6">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <p className="text-slate-300 mb-4 italic">"{testimonial.testimonial}"</p>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-slate-400">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
