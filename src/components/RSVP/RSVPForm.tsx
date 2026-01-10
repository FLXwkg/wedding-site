'use client';

import { useState } from 'react';

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: 'yes',
    dietaryNeeds: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('RSVP Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        guests: '1',
        attending: 'yes',
        dietaryNeeds: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-green-900 mb-2">Thank you!</h3>
        <p className="text-green-700">Your RSVP has been received. We can't wait to celebrate with you!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
          placeholder="john@example.com"
        />
      </div>

      {/* Attending */}
      <div>
        <label htmlFor="attending" className="block text-sm font-semibold text-gray-900 mb-2">
          Will you be attending? *
        </label>
        <select
          id="attending"
          name="attending"
          value={formData.attending}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
        >
          <option value="yes">Yes, I will attend</option>
          <option value="no">No, I cannot attend</option>
          <option value="maybe">Maybe</option>
        </select>
      </div>

      {/* Number of Guests */}
      <div>
        <label htmlFor="guests" className="block text-sm font-semibold text-gray-900 mb-2">
          Number of Guests (including yourself) *
        </label>
        <select
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
          ))}
        </select>
      </div>

      {/* Dietary Needs */}
      <div>
        <label htmlFor="dietaryNeeds" className="block text-sm font-semibold text-gray-900 mb-2">
          Dietary Restrictions
        </label>
        <input
          type="text"
          id="dietaryNeeds"
          name="dietaryNeeds"
          value={formData.dietaryNeeds}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
          placeholder="e.g., Vegetarian, Gluten-free"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          Message for the couple
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent"
          placeholder="Share your well wishes..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-rose-600 text-white font-semibold py-3 rounded-lg hover:bg-rose-700 transition"
      >
        Submit RSVP
      </button>
    </form>
  );
}
