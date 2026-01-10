'use client';

import RSVPForm from '@/components/RSVP/RSVPForm';

export default function RSVP() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">RSVP</h1>
          <p className="text-lg text-gray-600">Please let us know if you'll be joining us!</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <RSVPForm />
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">RSVP Deadline</h2>
          <p className="text-lg text-gray-600 mb-4">
            Please RSVP by <strong>June 1st, 2026</strong>
          </p>
          <p className="text-gray-600">
            Your response helps us finalize details like seating and catering. 
            Thank you for letting us know!
          </p>
        </div>
      </section>
    </div>
  );
}
