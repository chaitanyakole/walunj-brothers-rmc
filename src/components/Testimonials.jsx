import React from 'react';
import { MessageSquareQuote } from 'lucide-react';

/**
 * TESTIMONIALS COMPONENT
 * 
 * In accordance with content guidelines:
 * We do not invent fake reviews or fabricate customer endorsements.
 * 
 * To show real client testimonials:
 * 1. Set `hasVerifiedReviews` to true
 * 2. Populate genuine client reviews in `verifiedTestimonials` array below.
 */

const verifiedTestimonials = [
  // Placeholder structure ready for verified reviews
  /*
  {
    id: 1,
    clientName: "Pune Infrastructure Contractor",
    project: "Commercial Slab Pour, Wagholi",
    comment: "Customer testimonial will appear here.",
    rating: 5
  }
  */
];

const hasVerifiedReviews = verifiedTestimonials.length > 0;

export default function Testimonials() {
  // If testimonials are not provided, hide the section rather than displaying fake reviews
  if (!hasVerifiedReviews) {
    return null;
  }

  return (
    <section className="py-14 sm:py-20 bg-[#f8fafc] dark:bg-[#0e1117] border-t border-slate-200 dark:border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-amber-500/10 border border-blue-200 dark:border-amber-500/20 text-blue-800 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Client Feedback</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedTestimonials.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-white dark:bg-[#181c24] border border-slate-200 dark:border-white/10 shadow-sm"
            >
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4 italic">
                "{review.comment}"
              </p>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">{review.clientName}</p>
                <p className="text-xs text-blue-700 dark:text-amber-400 font-semibold">{review.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
