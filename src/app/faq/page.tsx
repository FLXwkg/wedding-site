'use client';

import { useState } from 'react';
import AccordionItem from '@/components/FAQ/AccordionItem';

const faqs = [
  {
    id: 1,
    question: 'What is the wedding date and time?',
    answer: 'Our wedding will be held on June 15, 2026. The ceremony begins at 2:00 PM at St. James Cathedral, followed by a reception at 5:00 PM at the Grand Ballroom.'
  },
  {
    id: 2,
    question: 'Do I need to RSVP?',
    answer: 'Yes, please RSVP by June 1st, 2026. You can RSVP online using our RSVP page or contact us directly at info@ourwedding.com.'
  },
  {
    id: 3,
    question: 'Can I bring a plus one?',
    answer: 'Your invitation will indicate whether a plus one is permitted. If you have questions, please let us know when you RSVP.'
  },
  {
    id: 4,
    question: 'What is the dress code?',
    answer: 'Black tie optional. Men may wear tuxedos or dark suits. Women may wear evening gowns or cocktail dresses. Feel free to express yourself!'
  },
  {
    id: 5,
    question: 'Will there be vegetarian options?',
    answer: 'Absolutely! When you RSVP, you\'ll be able to indicate any dietary restrictions or preferences.'
  },
  {
    id: 6,
    question: 'Is parking available?',
    answer: 'Yes, complimentary valet parking will be provided at the venue. No need to worry about finding a spot!'
  },
  {
    id: 7,
    question: 'What time should I arrive?',
    answer: 'Please arrive by 1:45 PM for the ceremony. This gives us time to get everyone seated before we begin.'
  },
  {
    id: 8,
    question: 'Will there be a live band or DJ?',
    answer: 'We\'ll have both! A live band for cocktail hour and dinner, followed by a DJ for dancing into the night.'
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">Everything you need to know about our wedding</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
                isExpanded={expandedId === faq.id}
                onToggle={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Feel free to reach out to us directly at info@ourwedding.com or call (123) 456-7890
          </p>
        </div>
      </section>
    </div>
  );
}
