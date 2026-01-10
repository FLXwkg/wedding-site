'use client';

import Link from 'next/link';
import { useState } from 'react';

const allRsvps = [
  { id: 1, name: 'John Doe', email: 'john@example.com', guests: 1, status: 'attending', dietaryNeeds: 'Vegetarian', createdAt: '2026-01-05' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', guests: 2, status: 'attending', dietaryNeeds: 'None', createdAt: '2026-01-06' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', guests: 1, status: 'not_attending', dietaryNeeds: 'None', createdAt: '2026-01-07' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', guests: 3, status: 'pending', dietaryNeeds: 'Gluten-free', createdAt: '2026-01-08' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', guests: 2, status: 'attending', dietaryNeeds: 'None', createdAt: '2026-01-09' },
];

export default function RSVPList() {
  const [filter, setFilter] = useState<'all' | 'attending' | 'not_attending' | 'pending'>('all');

  const filteredRsvps = filter === 'all' ? allRsvps : allRsvps.filter(r => r.status === filter || (filter === 'not_attending' && r.status === 'not_attending'));

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/admin" className="text-rose-600 hover:text-rose-700 mb-4 inline-block">← Back to Dashboard</Link>
              <h1 className="text-4xl font-bold text-gray-900">RSVP List</h1>
              <p className="text-lg text-gray-600 mt-2">Complete list of all responses</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-rose-600">{filteredRsvps.length}</p>
              <p className="text-gray-600">Total</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {(['all', 'attending', 'not_attending', 'pending'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filter === f
                    ? 'bg-rose-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {f === 'not_attending' ? 'Not Attending' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="w-full bg-white">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-600">Name</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-600">Email</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-600">Guests</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-600">Status</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-600">Dietary Needs</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-600">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {filteredRsvps.map((rsvp) => (
                  <tr key={rsvp.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{rsvp.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{rsvp.email}</td>
                    <td className="px-6 py-4">{rsvp.guests}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        rsvp.status === 'attending' ? 'bg-green-100 text-green-800' :
                        rsvp.status === 'not_attending' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {rsvp.status === 'not_attending' ? 'Not Attending' : rsvp.status.charAt(0).toUpperCase() + rsvp.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">{rsvp.dietaryNeeds}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{rsvp.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
